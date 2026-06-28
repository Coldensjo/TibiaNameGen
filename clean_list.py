#!/usr/bin/env python3
"""Clean and sort the name lists in random_name_generator.js.

Each list is defined as `const <name> = uniq([ ... ]);`. This script finds
those blocks, parses the quoted string entries, then:
  - removes any entry containing a hyphen (e.g. "well-tempered") -- not allowed
  - removes duplicates (after trimming)
  - sorts the remaining entries case-insensitively
and rewrites each block with consistent formatting.

Usage:
    python clean_list.py                 # clean lists in random_name_generator.js (in place)
    python clean_list.py path/to/file.js # clean lists in a different file
    python clean_list.py --check         # report what would change, write nothing
"""

import re
import sys

DEFAULT_FILE = "random_name_generator.js"

# Lists to clean. Order doesn't matter; these are the `const X = uniq([...])` blocks.
TARGET_LISTS = [
    "adjectives",
    "animals",
    "monsters",
    "firstNameParts",
    "lastNameParts",
    "singleNames",
    "prefixes",
    "connectors",
]

ITEMS_PER_LINE = 8
INDENT = "\t"

# Matches:  const <name> = uniq([  <body>  ]);
BLOCK_RE_TEMPLATE = r"(const\s+{name}\s*=\s*uniq\(\[)(.*?)(\]\);)"
# Matches a single- or double-quoted string literal.
STRING_RE = re.compile(r"""(['"])(.*?)\1""", re.DOTALL)


def parse_items(body):
    """Return (items, quote_char) for a uniq([...]) body."""
    matches = STRING_RE.findall(body)
    if not matches:
        return [], '"'
    quote_char = matches[0][0]
    items = [m[1] for m in matches]
    return items, quote_char


def clean_items(items):
    """Trim entries, drop hyphenated and duplicate entries.

    Returns (kept, hyphenated, duplicate_count). `kept` preserves first-seen
    order; `hyphenated` is the list of removed hyphen-containing entries.
    """
    seen = set()
    kept = []
    hyphenated = []
    duplicate_count = 0
    for raw in items:
        item = raw.strip()
        if not item:
            continue
        if "-" in item:
            hyphenated.append(item)
            continue
        if item in seen:
            duplicate_count += 1
            continue
        seen.add(item)
        kept.append(item)
    return kept, hyphenated, duplicate_count


def sort_key(s):
    return (s.lower(), s)


def format_block(items, quote_char):
    """Render sorted items as wrapped, indented lines."""
    quoted = [f"{quote_char}{item}{quote_char}" for item in items]
    lines = []
    for i in range(0, len(quoted), ITEMS_PER_LINE):
        chunk = quoted[i:i + ITEMS_PER_LINE]
        lines.append(INDENT + ", ".join(chunk))
    return "\n" + ",\n".join(lines) + "\n"


def process(text, check=False):
    report = []

    def make_replacer(name):
        def repl(match):
            head, body, tail = match.group(1), match.group(2), match.group(3)
            items, quote_char = parse_items(body)
            kept, hyphenated, duplicate_count = clean_items(items)
            ordered = sorted(kept, key=sort_key)

            was_sorted = kept == ordered
            changed = duplicate_count or hyphenated or not was_sorted
            if changed:
                notes = []
                if hyphenated:
                    notes.append(f"{len(hyphenated)} hyphenated removed")
                if duplicate_count:
                    notes.append(f"{duplicate_count} duplicate(s) removed")
                if not was_sorted:
                    notes.append("reordered")
                report.append(
                    f"{name}: {len(items)} entries -> {len(ordered)} ({', '.join(notes)})"
                )
                for h in hyphenated:
                    report.append(f"    - dropped hyphenated: {h}")
            else:
                report.append(f"{name}: {len(ordered)} entries already clean")

            if check:
                return match.group(0)
            return head + format_block(ordered, quote_char) + tail
        return repl

    for name in TARGET_LISTS:
        pattern = re.compile(BLOCK_RE_TEMPLATE.format(name=re.escape(name)), re.DOTALL)
        text, n = pattern.subn(make_replacer(name), text, count=1)
        if n == 0:
            report.append(f"{name}: NOT FOUND (skipped)")

    return text, report


def main(argv):
    args = [a for a in argv[1:] if a != "--check"]
    check = "--check" in argv[1:]
    path = args[0] if args else DEFAULT_FILE

    with open(path, "r", encoding="utf-8") as f:
        original = f.read()

    updated, report = process(original, check=check)

    print("\n".join(report))

    if check:
        print("\n[check mode] no files written.")
        return

    if updated != original:
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(updated)
        print(f"\nCleaned lists written to {path}")
    else:
        print(f"\nNo changes needed in {path}")


if __name__ == "__main__":
    main(sys.argv)