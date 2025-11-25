## Usage

### 1. Include the script
```html
<!-- Local copy -->
<script src="tools/random_name_generator.js"></script>

<!-- CDN version (not recommended for production) -->
<script src="https://cdn.jsdelivr.net/gh/Coldensjo/TibiaNameGen/random_name_generator.js"></script>
```

### 2. Add an input field and a generate button
```html
<input id="character_name" type="text" />

<button
	id="generate_random_name"
	type="button"
	data-max-length="15"
	style="margin-left: 10px; padding: 2px 8px; cursor: pointer;"
>
	Suggest name
</button>
```

## Custom max-length (`data-max-length`)

The generator can automatically enforce a custom maximum name length.  
To use it, simply set the `data-max-length` attribute on the button:

```html
<button id="generate_random_name" data-max-length="20">
	Suggest name
</button>
```

## Contributing

Contributions are welcome!  
You can help by:

- Adding new name lists (adjectives, monsters, fantasy parts, etc.)
- Adding options or patterns for new name styles
- Reporting bugs or unusual outputs

Before contributing, please ensure:

- Code remains lightweight (no external dependencies)
- Randomness and variation are preserved  
- Existing functionality continues to work
- New lists use the same `uniq([ ... ])` structure

If you're unsure whether a change fits, feel free to open a discussion or issue first.
