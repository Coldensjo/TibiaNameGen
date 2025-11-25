// HTML code:
// <script type="text/javascript" src="tools/random_name_generator.js"></script>
// <button type="button" id="generate_random_name" data-max-length="15" style="margin-left: 10px; padding: 2px 8px; cursor: pointer;">Suggest name</button>

// Random Name Generator by Siz

// --- de-dupe helper --------------------------------------------------------
function uniq(a) {
	return Array.from(new Set(a.map(s => String(s).trim())));
}

const adjectives = uniq([
	"abandoned", "able", "absolute", "academic", "acceptable", "acclaimed", "accomplished", "accurate",
	"aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired",
	"adolescent", "adorable", "adored", "advanced", "adventurous", "affectionate", "afraid", "aged",
	"aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ajar", "alarmed",
	"alarming", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious",
	"ample", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished",
	"animated", "annual", "another", "antique", "anxious", "any", "apprehensive", "appropriate",
	"apt", "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing",
	"athletic", "attached", "attentive", "attractive", "austere", "authentic", "authorized", "automatic",
	"avaricious", "average", "aware", "awesome", "awful", "awkward", "babyish", "back",
	"bad", "baggy", "bare", "barren", "basic", "beautiful", "belated", "beloved",
	"beneficial", "best", "better", "bewitched", "big", "big-hearted", "biodegradable", "bite-sized",
	"bitter", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind",
	"blissful", "blond", "blue", "blushing", "bogus", "boiling", "bold", "bony",
	"boring", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable",
	"brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised",
	"bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy",
	"buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree",
	"careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap",
	"cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean",
	"clear", "clear-cut", "clever", "close", "closed", "cloudy", "clueless", "clumsy",
	"cluttered", "coarse", "cold", "colorful", "colorless", "colossal", "comfortable", "common",
	"compassionate", "competent", "complete", "complex", "complicated", "composed", "concerned", "concrete",
	"confused", "conscious", "considerate", "constant", "content", "conventional", "cooked", "cool",
	"cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "crafty",
	"crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked",
	"crowded", "cruel", "crushing", "cuddly", "cultivated", "cultured", "cumbersome", "curly",
	"curvy", "cute", "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring",
	"dark", "darling", "dazzling", "dead", "deadly", "deafening", "dear", "dearest",
	"decent", "decimal", "decisive", "deep", "defenseless", "defensive", "defiant", "deficient",
	"definite", "definitive", "delayed", "delectable", "delicious", "delightful", "delirious", "demanding",
	"dense", "dental", "dependable", "dependent", "descriptive", "deserted", "detailed", "determined",
	"devoted", "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted",
	"direct", "dirty", "disastrous", "discrete", "disfigured", "disguised", "disgusting", "dishonest",
	"disloyal", "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting",
	"double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry",
	"dual", "dull", "dutiful", "each", "eager", "early", "earnest", "easy",
	"easy-going", "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly",
	"electric", "elegant", "elementary", "elliptical", "embarrassed", "embellished", "eminent", "emotional",
	"empty", "enchanted", "enchanting", "energetic", "enlightened", "enormous", "enraged", "entire",
	"envious", "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even",
	"evergreen", "everlasting", "every", "evil", "exalted", "excellent", "excitable", "excited",
	"exciting", "exemplary", "exhausted", "exotic", "expensive", "experienced", "expert", "extra-large",
	"extra-small", "extraneous", "extroverted", "fabulous", "failing", "faint", "fair", "faithful",
	"fake", "false", "familiar", "famous", "fancy", "fantastic", "far", "far-flung",
	"far-off", "faraway", "fast", "fat", "fatal", "fatherly", "favorable", "favorite",
	"fearful", "fearless", "feisty", "feline", "female", "feminine", "few", "fickle",
	"filthy", "fine", "finished", "firm", "first", "firsthand", "fitting", "fixed",
	"flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy",
	"flippant", "flowery", "fluffy", "fluid", "flustered", "focused", "fond", "foolhardy",
	"foolish", "forceful", "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant",
	"frail", "frank", "frayed", "free", "french", "frequent", "fresh", "friendly",
	"frightened", "frightening", "frigid", "frilly", "frivolous", "frizzy", "front", "frosty",
	"frozen", "frugal", "fruitful", "full", "fumbling", "functional", "funny", "fussy",
	"fuzzy", "gargantuan", "gaseous", "general", "generous", "gentle", "genuine", "giant",
	"giddy", "gifted", "gigantic", "giving", "glamorous", "glaring", "glass", "gleaming",
	"gleeful", "glistening", "glittering", "gloomy", "glorious", "glossy", "glum", "golden",
	"good", "good-natured", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular",
	"grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim",
	"grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded", "growing",
	"growling", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy",
	"hairy", "half", "handmade", "handsome", "handy", "happy", "happy-go-lucky", "hard",
	"hard-to-find", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting",
	"healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "helpful", "helpless",
	"hidden", "hideous", "high", "high-level", "hilarious", "hoarse", "hollow", "homely",
	"honest", "honorable", "honored", "hopeful", "horrible", "hospitable", "hot", "huge",
	"humble", "humiliating", "humming", "humongous", "hungry", "hurtful", "husky", "icky",
	"icy", "ideal", "idealistic", "identical", "idiotic", "idle", "idolized", "ignorant",
	"ill", "ill-fated", "ill-informed", "illegal", "illiterate", "illustrious", "imaginary", "imaginative",
	"immaculate", "immaterial", "immediate", "immense", "impartial", "impassioned", "impeccable", "imperfect",
	"imperturbable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive",
	"improbable", "impure", "inborn", "incomparable", "incompatible", "incomplete", "inconsequential", "incredible",
	"indelible", "indolent", "inexperienced", "infamous", "infantile", "infatuated", "inferior", "infinite",
	"informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "insubstantial",
	"intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "ironclad",
	"irresponsible", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jealous",
	"jittery", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious",
	"juicy", "jumbo", "jumpy", "junior", "juvenile", "kaleidoscopic", "keen", "key",
	"kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowing", "knowledgeable",
	"known", "kooky", "kosher", "lame", "lanky", "large", "last", "lasting",
	"late", "lavish", "lawful", "lazy", "leading", "leafy", "lean", "left",
	"legal", "legitimate", "light", "lighthearted", "likable", "likely", "limited", "limp",
	"limping", "linear", "lined", "liquid", "little", "live", "lively", "livid",
	"loathsome", "lone", "lonely", "long", "long-term", "loose", "lopsided", "lost",
	"loud", "lovable", "lovely", "loving", "low", "loyal", "lucky", "lumbering",
	"luminous", "lumpy", "lustrous", "luxurious", "mad", "made-up", "magnificent", "majestic",
	"major", "male", "mammoth", "married", "marvelous", "masculine", "massive", "mature",
	"meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium",
	"meek", "mellow", "melodic", "memorable", "menacing", "merry", "messy", "metallic",
	"mild", "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly",
	"misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous", "monthly",
	"monumental", "moral", "mortified", "motherly", "motionless", "mountainous", "muddy", "muffled",
	"multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "naive",
	"narrow", "nasty", "natural", "naughty", "nautical", "near", "neat", "necessary",
	"needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next",
	"nice", "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal",
	"notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious", "nutty",
	"obedient", "obese", "oblong", "obvious", "occasional", "odd", "oddball", "offbeat",
	"offensive", "official", "oily", "old", "old-fashioned", "only", "open", "optimal",
	"optimistic", "opulent", "orange", "orderly", "ordinary", "organic", "original", "ornate",
	"ornery", "other", "our", "outgoing", "outlandish", "outlying", "outrageous", "outstanding",
	"oval", "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale", "paltry",
	"parallel", "parched", "partial", "passionate", "past", "pastel", "peaceful", "peppery",
	"perfect", "perfumed", "periodic", "perky", "personal", "pertinent", "pesky", "pessimistic",
	"petty", "phony", "physical", "piercing", "pink", "pitiful", "plain", "plaintive",
	"plastic", "playful", "pleasant", "pleased", "pleasing", "plump", "plush", "pointed",
	"pointless", "poised", "polished", "polite", "political", "poor", "popular", "portly",
	"posh", "positive", "possible", "potable", "powerful", "powerless", "practical", "precious",
	"present", "prestigious", "pretty", "previous", "pricey", "prickly", "primary", "prime",
	"pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper",
	"proud", "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy",
	"putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy",
	"querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quirky", "quixotic",
	"quizzical", "radiant", "ragged", "rapid", "rare", "rash", "raw", "ready",
	"real", "realistic", "reasonable", "recent", "reckless", "rectangular", "red", "reflecting",
	"regal", "regular", "reliable", "relieved", "remarkable", "remorseful", "remote", "repentant",
	"repulsive", "required", "respectful", "responsible", "revolving", "rewarding", "rich", "right",
	"rigid", "ringed", "ripe", "roasted", "robust", "rocky", "rosy", "rotating",
	"rotten", "rough", "round", "rowdy", "royal", "rubbery", "ruddy", "rude",
	"rundown", "runny", "rural", "rusty", "sad", "safe", "salty", "same",
	"sandy", "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared",
	"scary", "scented", "scholarly", "scientific", "scornful", "scratchy", "scrawny", "second",
	"second-hand", "secondary", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate",
	"serene", "serious", "serpentine", "several", "severe", "shabby", "shadowy", "shady",
	"shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shocked", "shocking",
	"shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent",
	"silky", "silly", "silver", "similar", "simple", "simplistic", "sinful", "single",
	"sizzling", "skeletal", "skinny", "sleepy", "slight", "slim", "slimy", "slippery",
	"slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy",
	"snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid",
	"somber", "some", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour",
	"spanish", "sparkling", "sparse", "specific", "spectacular", "speedy", "spherical", "spicy",
	"spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square",
	"squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy",
	"stark", "starry", "steel", "steep", "sticky", "stiff", "stimulating", "stingy",
	"stormy", "straight", "strange", "strict", "strident", "striking", "striped", "strong",
	"studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive",
	"substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb",
	"superficial", "superior", "supportive", "sure-footed", "surprised", "suspicious", "svelte", "sweaty",
	"sweet", "sweltering", "swift", "sympathetic", "talkative", "tall", "tame", "tan",
	"tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting",
	"tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that",
	"these", "thick", "thin", "third", "thirsty", "this", "thorny", "thorough",
	"those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely",
	"tinted", "tiny", "tired", "torn", "total", "tough", "tragic", "trained",
	"traumatic", "treasured", "tremendous", "triangular", "tricky", "trifling", "trim", "trivial",
	"troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent",
	"twin", "ugly", "ultimate", "unacceptable", "unaware", "uncomfortable", "uncommon", "unconscious",
	"understated", "unequaled", "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy",
	"unhealthy", "uniform", "unimportant", "unique", "united", "unkempt", "unknown", "unlawful",
	"unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish",
	"unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused",
	"unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "upright",
	"upset", "urban", "usable", "used", "useful", "useless", "utilized", "utter",
	"vacant", "vague", "vain", "valid", "valuable", "vapid", "variable", "vast",
	"velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious", "victorious", "vigilant",
	"vigorous", "villainous", "violent", "violet", "virtual", "virtuous", "visible", "vital",
	"vivacious", "vivid", "voluminous", "wan", "warlike", "warm", "warmhearted", "warped",
	"wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "weak", "wealthy",
	"weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome",
	"well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-worn",
	"wet", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping",
	"wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding",
	"windy", "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful",
	"wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse",
	"worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong",
	"wry", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy",
	"zany", "zealous", "zesty", "zigzag"
]);

const animals = uniq([
	"aardvark", "albatross", "alligator", "alpaca", "ant", "anteater", "antelope", "ape", "armadillo",
	"axolotl", "baboon", "badger", "barracuda", "bat", "bear", "beaver", "bee", "binturong", "bison",
	"boar", "buffalo", "butterfly", "camel", "capuchin", "capybara", "caribou", "cassowary", "cat",
	"caterpillar", "cattle", "chamois", "cheetah", "chicken", "chimpanzee", "chinchilla", "chough",
	"clam", "cobra", "coati", "cockroach", "cod", "colugo", "cormorant", "coyote", "crab", "crane",
	"crocodile", "crow", "curlew", "deer", "dinosaur", "dog", "dogfish", "dolphin", "donkey",
	"dotterel", "dove", "dragonfly", "duck", "dugong", "dunlin", "eagle", "echidna", "eel", "eland",
	"elephant", "elk", "emu", "falcon", "ferret", "finch", "fish", "flamingo", "fly", "fossa", "fox",
	"frog", "gaur", "gazelle", "gerbil", "gibbon", "giraffe", "gnat", "gnu", "goat", "goldfinch",
	"goldfish", "goose", "gopher", "gorilla", "goshawk", "grasshopper", "grouse", "guanaco", "gull",
	"gundi", "hamster", "hare", "hawk", "hedgehog", "heron", "herring", "hippopotamus", "hornet",
	"horse", "human", "hummingbird", "hyena", "ibex", "ibis", "jackal", "jaguar", "jay", "jellyfish",
	"jerboa", "kangaroo", "kakapo", "kingfisher", "kiwi", "koala", "kookabura", "kouprey", "kudu",
	"lapwing", "lark", "lemur", "lemming", "leopard", "lion", "llama", "lobster", "locust", "lorikeet",
	"loris", "louse", "lyrebird", "macaque", "magpie", "mallard", "manatee", "mandrill", "marmoset",
	"marmot", "marten", "meerkat", "mink", "mole", "mongoose", "monkey", "moose", "mosquito", "mouse",
	"mule", "muntjac", "narwhal", "newt", "nightingale", "numbat", "ocelot", "octopus", "okapi",
	"opossum", "oryx", "ostrich", "otter", "owl", "oyster", "panda", "pangolin", "panther", "parrot",
	"partridge", "peafowl", "peccary", "pelican", "penguin", "pheasant", "pig", "pigeon", "platypus",
	"pony", "porcupine", "porpoise", "quail", "quelea", "quokka", "quetzal", "rabbit", "raccoon",
	"rail", "ram", "rat", "raven", "red deer", "red panda", "reindeer", "rhinoceros", "rook",
	"salamander", "salmon", "sand dollar", "sandpiper", "sardine", "scorpion", "seahorse", "seal",
	"serval", "shark", "sheep", "shrew", "skunk", "sloth", "snail", "snake", "sparrow", "spider",
	"spoonbill", "squid", "squirrel", "starling", "stingray", "stinkbug", "stork", "swallow", "swan",
	"tamarin", "tapir", "tarsier", "termite", "tiger", "toad", "toucan", "trout", "turkey", "turtle",
	"uakari", "viper", "vicuna", "vulture", "wallaby", "walrus", "wasp", "weasel", "whale", "wildcat",
	"wolf", "wolverine", "wombat", "woodcock", "woodpecker", "worm", "wren", "xerus", "yak", "zebra",
	"zebu"
]);

// Monsternames from Tibia
const monsters = uniq([
	"amazon", "ancient", "scarab", "apocalypse", "ashmunrah", "assassin", "badger", "bandit", "banshee",
	"bat", "bazir", "bear", "behemoth", "beholder", "sheep", "blue", "djinn",
	"bonebeast", "bug", "butterfly", "carniphila", "cave", "rat", "centipede", "chicken", "cobra",
	"crab", "crocodile", "crypt", "shambler", "cyclops", "dark", "monk", "deathslicer", "deer",
	"demodras", "demon", "skeleton", "dharalion", "dipthrah", "dog", "dragon", "lord", "dwarf",
	"geomancer", "guard", "soldier", "dworc", "fleshhunter", "venomsniper", "voodoomaster", "efreet",
	"elder", "elephant", "elf", "arcanist", "scout", "fernfang", "ferumbras", "fire", "devil",
	"elemental", "flamethrower", "flamingo", "frost", "troll", "fury", "gargoyle",
	"gazer", "general", "murius", "ghost", "ghoul", "giant", "spider", "goblin", "green",
	"grorlam", "hero", "hunter", "hyaena", "hydra", "infernatil", "kongra", "larva", "lich",
	"lion", "lizard", "sentinel", "snakecharmer", "templar", "magicthrower", "mahrdis", "marid",
	"merlkin", "mimic", "minotaur", "archer", "mage", "monk", "morgaroth", "morguthis", "mummy",
	"necromancer", "necropharus", "omruc", "orc", "berserker", "leader", "rider", "shaman",
	"spearman", "warlord", "warrior", "orshabaal", "panda", "parrot", "pig", "plaguethrower",
	"poison", "polar", "priestess", "rabbit", "rahemos", "rat", "rotworm", "scarab", "scorpion",
	"serpent", "spawn", "sheep", "shredderthrower", "sibang", "skeleton", "skunk", "slime",
	"smuggler", "snake", "spider", "spit", "nettle", "stalker", "stone", "golem", "swamp",
	"troll", "tarantula", "terror", "bird", "thalas", "evil", "eye", "halloween", "hare",
	"horned", "fox", "old", "widow", "tiger", "troll", "valkyrie", "vampire", "vashresamun",
	"war", "wolf", "warlock", "wasp", "wild", "witch", "winter", "yeti"
]);

// Original fantasy name lists
const firstNameParts = uniq([
	'Aeden', 'Aegis', 'Aelric', 'Aelwyn', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron',
	'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron',
	'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron',
	'Aerith', 'Aethon', 'Aiden', 'Aldan', 'Alden', 'Alder', 'Aldric', 'Alys', 'Arel',
	'Aeris', 'Aethon', 'Aelric', 'Aelwyn', 'Aeron', 'Aeron', 'Aeron', 'Aeron', 'Aeron',
	'Aegis', 'Aldric', 'Alys', 'Aegis', 'Aldric', 'Alys', 'Aelric', 'Aelwyn', 'Aeron',
	'Aeron', 'Aethon', 'Aiden', 'Alden', 'Alder', 'Aeris', 'Aethon', 'Aiden', 'Alden',
	'Alder', 'Aeris', 'Aethon', 'Aiden', 'Alden', 'Alder', 'Aeris', 'Aethon', 'Aiden',
	'Alden', 'Alder', 'Aeris', 'Aethon', 'Aiden', 'Alden', 'Alder', 'Aeris', 'Aethon',
	'Bael', 'Baelor', 'Baldric', 'Bram', 'Bren', 'Brenna', 'Brennan', 'Briar', 'Brienne', 'Bran',
	'Bryn', 'Birch', 'Blade', 'Cade', 'Cael', 'Caelia', 'Caelan', 'Caelum', 'Catelyn',
	'Cedar', 'Celeste', 'Cian', 'Corbin', 'Crest', 'Dain', 'Daenerys', 'Darian', 'Dax',
	'Dawn', 'Derek', 'Dell', 'Dorian', 'Drakon', 'Dusk', 'Eamon', 'Echo', 'Eldric', 'Elden',
	'Eldrin', 'Elara', 'Elena', 'Ember', 'Eris', 'Ethan', 'Evan', 'Faye', 'Faelan', 'Falric',
	'Felix', 'Fen', 'Fenris', 'Fiona', 'Finn', 'Flame', 'Freyja', 'Frost', 'Gage', 'Gale',
	'Gareth', 'Garric', 'Gavin', 'Gleam', 'Grace', 'Grey', 'Gwen', 'Gwyneth', 'Haldor', 'Haldric',
	'Haldir', 'Hale', 'Hannah', 'Haze', 'Hayden', 'Helena', 'Hilt', 'Holt', 'Hugo', 'Iric',
	'Iron', 'Isaac', 'Isolde', 'Ithil', 'Ivan', 'Ivor', 'Ivy', 'Iris', 'Jace', 'Jade',
	'Jaric', 'Jareth', 'Jasmine', 'Jasper', 'Jax', 'Jewel', 'Jocelyn', 'Kai', 'Kade', 'Kael',
	'Kaelen', 'Kaldric', 'Kane', 'Katarina', 'Kieran', 'Kira', 'Kite', 'Knight', 'Lance', 'Lane',
	'Leaf', 'Leo', 'Liam', 'Lily', 'Logan', 'Loric', 'Lorien', 'Luna', 'Lysandra', 'Maeve',
	'Mace', 'Mael', 'Maelor', 'Maldric', 'Mason', 'Max', 'Maya', 'Mist', 'Mira', 'Morgana',
	'Nate', 'Nathan', 'Niamh', 'Nico', 'Nimrod', 'Nimue', 'Noble', 'Nolan', 'Nora', 'Nova',
	'Noric', 'Oak', 'Odin', 'Olivia', 'Opal', 'Ophelia', 'Orb', 'Oric', 'Oric', 'Orion',
	'Oric', 'Orion', 'Oric', 'Orion', 'Oric', 'Orion', 'Oric', 'Orion', 'Oric', 'Orion',
	'Oscar', 'Owen', 'Pace', 'Paldric', 'Pearl', 'Pax', 'Persephone', 'Phelan', 'Pine', 'Piper',
	'Prism', 'Preston', 'Quartz', 'Quade', 'Quaric', 'Quincy', 'Quinn', 'Quorin', 'Quill', 'Rain',
	'Rafe', 'Rane', 'Rex', 'Rhaegar', 'Roran', 'Rose', 'Rowena', 'Ruby', 'Rune', 'Roric',
	'Ryder', 'Sage', 'Saldric', 'Sam', 'Seth', 'Selene', 'Shield', 'Snow', 'Soren', 'Seth',
	'Soren', 'Seth', 'Soren', 'Seth', 'Soren', 'Seth', 'Soren', 'Seth', 'Soren', 'Seth',
	'Soren', 'Seth', 'Soren', 'Seth', 'Soren', 'Seth', 'Soren', 'Seth', 'Soren', 'Seth',
	'Talon', 'Tara', 'Taric', 'Tate', 'Tessa', 'Theo', 'Theron', 'Thalia', 'Thorin', 'Tide',
	'Tristan', 'Uldric', 'Ulric', 'Uma', 'Una', 'Umber', 'Uri', 'Urn', 'Ursa', 'Ursula',
	'Ulysses', 'Vaelen', 'Vale', 'Vance', 'Varek', 'Varic', 'Vera', 'Vex', 'Victor', 'Vial',
	'Violet', 'Vivienne', 'Wade', 'Waldric', 'Wand', 'Wave', 'Wes', 'Weston', 'Willow', 'Winona',
	'Wren', 'Wulfgar', 'Wulfric', 'Xander', 'Xanthe', 'Xara', 'Xavi', 'Xavier', 'Xaric', 'Xenith',
	'Xenon', 'Xylo', 'Yan', 'Yara', 'Yarin', 'Yoke', 'Yorin', 'Yseult', 'Yves', 'Zachary',
	'Zaldric', 'Zane', 'Zara', 'Zed', 'Zephyr', 'Zest', 'Zoe', 'Zaidal', 'Zebron', 'Zerbrus',
	'Ironeye', 'Adall', 'Adrenius', 'Ahmet', 'Al Dee', 'Albert', 'Aldo', 'Alesar', 'Alexander',
	'Alia', 'Allen', 'Alwin', 'Amanda', 'Amber', 'Anerui', 'Aneus', 'Angelina', 'Angus', 'Arito',
	'Arkhothep', 'Arnold', 'Aruda', 'Ashtamor', 'Asima', 'Asrak', 'Avar Tar', 'Azil', 'Baal',
	'Bambi', 'Barbara', 'Bashira', 'Basilisk', 'Baxter', 'Beatrice', 'Benjamin', 'Bezil', 'Billy',
	'Blossom', 'Bluebear', 'Boques', 'Bonecrusher', 'Bonifacius', 'Boozer', 'Borkas', 'Bozo',
	'Brasith', 'Brengus', 'Brewster', 'Briasol', 'Brodrosch', 'Bruno', 'Budrik', 'Bunny', 'Busty',
	'Carina', 'Carlson', 'Charles', 'Chatterbone', 'Chemar', 'Chephan', 'Chester Kahs', 'Christoph',
	'Chrystal', 'Cipfried', 'Clark', 'Clyde', 'Cobra', 'Cornelia', 'Costello', 'Dabui', 'Dagomir',
	'Dalbrect', 'Dallheim', 'Dane', 'Daniel', 'Dario', 'Demonguard', 'Dermot', 'Digger', 'Dixi',
	'Djema', 'Donald', 'Dove', 'Duria', 'Dustrunner', 'Ebenizer', 'Edala', 'Eddy', 'Edoch', 'Edowir',
	'Edvard', 'Elane', 'Elathriel', 'Eloise', 'Elvith', 'Emperor Kruzak', 'Eremo', 'Eroth', 'Etzel',
	'Eva', 'Fahradin', 'Falk', 'Faluae', 'Fearless', 'Feizuhl', 'Fenbala', 'Fenech', 'Ferks', 'Frans',
	'Frodo', 'Gabel', 'Gail', 'Galuna', 'Gamel', 'Gamon', 'Gorn', 'Graubart', 'Gregor', 'Greyhound',
	'Grof', 'Gundralph', 'Gurbasch', 'H.L.', 'Habdel', 'Hagor', 'Hairycles', 'Halif', 'Hanna', 'Hardek',
	'Harkath', 'Haroun', 'Harsky', 'Helor', 'Hofech', 'Hoggle', 'Hugo', 'Humgolf', 'Humphrey',
	'Hyacinth', 'Imalas', 'Imbul', 'Irea', 'Ishebad', 'Ishina', 'Isimov', 'Iwan', 'Iwar', 'Jack',
	'Jakahr', 'James', 'Jean Claude', 'Jezzara', 'Jimbin', 'Julian', 'Karl', 'Kasmir', 'Kawill', 'Kazzan',
	'Kevin', 'King Tibianus', 'Kroox', 'Kulag', 'Lea', 'Lector', 'LeeDelle', 'Leeland', 'Legola', 'Liane',
	'Lightfoot', 'Lily', 'Livielle', 'Lokur', 'Lorbas', 'Lorek', 'Loria', 'Loui', 'Lubo', 'Lugri',
	'Luna', 'Lungelen', 'Lynda', 'Maealil', 'Malor', 'Maria', 'Markwin', 'Marlene', 'Marvik', 'Maryza',
	'McRonald', 'Mehkesh', 'Melchior', 'Memech', 'Mirabell', 'Miraia', 'Mortimer', 'Morun', 'Mugluf',
	'Muriel', 'Muzir', 'Myra', 'Nahbob', 'Nelliem', 'Nemal', 'Nezil', 'Nielson', 'Noodles', 'Norbert',
	'Norf', 'Norma', 'Nydala', 'Obi', 'Odemara', 'Oldrak', 'Olrik', 'Omur', 'Ormuhn', 'Oswald',
	'Padreia', 'Partos', 'Pauline', 'Pemaret', 'Penny', 'Perac', 'Perod', 'Petros', 'Phillip', 'Pino',
	'Puffels', 'Pydar', 'Quentin', 'Quero', 'Rachel', 'Rahkem', 'Rashid', 'Ratamari', 'Ray', 'Razan',
	'Riddler', 'Robin', 'Roderick', 'Rodney', 'Rokyn', 'Romella', 'Rose', 'Rowenna', 'Rudolph', 'Sam',
	'Sandra', 'Sarina', 'Scott', 'Seagull', 'Seahorse', 'Seymour', 'Shalmar', 'Shanar', 'Shauna',
	'Sherry', 'Shiantis', 'Shiriel', 'Shirith', 'Sigurd', 'Simon', 'Sinbeard', 'Skjaar', 'Smiley',
	'Snake Eye', 'Steelsoul', 'Stutch', 'Suzy', 'Svenson', 'Sylvester', 'Talesia', 'Talphion', 'Tandros',
	'Tesha', 'Tezila', 'Thanita', 'Thomas', 'Tibra', 'Tim', 'Timur', 'Todd', 'Tokel', 'Tom', 'Topsy',
	'Tothdral', 'Trimegis', 'Trisha', 'Tulf', 'Turvy', 'Ubaid', 'Ukea', 'Ulrik', 'Umar', 'Urkalio',
	'Ursula', 'Uso', 'Ustan', 'Uzgod', 'Uzon', 'Velvet', 'Vera', 'Vladruc', 'Wally', 'Walter',
	'Warbert', 'Willard', 'William', 'Willie', 'Wyat', 'Wyda', 'Xed', 'Xodet', 'Yaman', 'Yanni',
	'Yberius', 'Yoem', 'Yulas', 'Zoltan'
]);

const lastNameParts = uniq([
	'Account', 'Adamant', 'Agate', 'Alchemist', 'Amber', 'Amulet', 'Ancient', 'Annals', 'Apex',
	'Aqua', 'Archer', 'Armor', 'Arrow', 'Ash', 'Astute', 'Atoll', 'Avenue', 'Axe', 'Bank',
	'Banner', 'Barony', 'Barracks', 'Bastion', 'Bay', 'Bear', 'Beach', 'Beautiful', 'Bee',
	'Blessed', 'Bluff', 'Bloom', 'Blue', 'Blaze', 'Bold', 'Bone', 'Book', 'Boot', 'Bow',
	'Bracer', 'Branch', 'Brass', 'Brave', 'Breeze', 'Bright', 'Brilliant', 'Brook', 'Bronze',
	'Brotherhood', 'Brow', 'Breeze', 'Bridge', 'Brisk', 'Brook', 'Brown', 'Brass', 'Breeze',
	'Calm', 'Campaign', 'Cardinal', 'Castle', 'Cathedral', 'Cave', 'Cavern', 'Cedar', 'Champion',
	'Charm', 'Chapel', 'Chestplate', 'Chronicle', 'Cinder', 'Circlet', 'City', 'Clay', 'Claw',
	'Clear', 'Clever', 'Cliff', 'Cloud', 'Cloister', 'Coal', 'Codex', 'Coat', 'Cognizant',
	'Compass', 'Compassionate', 'Company', 'Conquering', 'Copper', 'Coronet', 'Cove', 'Courage',
	'Crafty', 'Crag', 'Cranny', 'Crest', 'Crown', 'Crusade', 'Crusader', 'Crystal', 'Current',
	'Curious', 'Dagger', 'Damned', 'Dark', 'Dazzling', 'Daybreak', 'Dead', 'Deer', 'Defender',
	'Delight', 'Den', 'Desert', 'Destined', 'Diamond', 'Diadem', 'Diligent', 'Domain', 'Doomed',
	'Dove', 'Dragon', 'Dreary', 'Duchy', 'Dune', 'Dust', 'Dusk', 'Earth', 'East', 'Eagle',
	'Elder', 'Elm', 'Ember', 'Emerald', 'Emblem', 'Empire', 'Enchanter', 'Epic', 'Equinox',
	'Erudite', 'Estate', 'Excessive', 'Explorer', 'Extreme', 'Fast', 'Fated', 'Favored', 'Feather',
	'Feral', 'Ferry', 'Fierce', 'Field', 'Fief', 'Fiery', 'Finch', 'Fire', 'Flag', 'Fleet',
	'Fog', 'Folio', 'Foolish', 'Ford', 'Forest', 'Fort', 'Fortress', 'Fortunate', 'Fountain',
	'Fox', 'Fragile', 'Frost', 'Fur', 'Furious', 'Furry', 'Frost', 'Frost', 'Frost', 'Frost',
	'Fur', 'Frost', 'Frost', 'Frost', 'Frost', 'Frost', 'Frost', 'Frost', 'Frost', 'Frost',
	'Gale', 'Garland', 'Garnet', 'Gauntlet', 'Gentle', 'Gilded', 'Gleaming', 'Glacier', 'Gladiator',
	'Glistening', 'Gloomy', 'Glowing', 'Gold', 'Granite', 'Grand', 'Grave', 'Gravel', 'Gray',
	'Great', 'Greave', 'Green', 'Grimoire', 'Grove', 'Guard', 'Guardian', 'Guild', 'Gust',
	'Hail', 'Hammer', 'Harbor', 'Harvest', 'Hasty', 'Hawk', 'Hay', 'Heaven', 'Helm', 'Hero',
	'Heroic', 'Hidden', 'Hill', 'Hollow', 'Honorable', 'Horn', 'Host', 'Humble', 'Hunter',
	'Ice', 'Imperial', 'Inescapable', 'Inevitable', 'Inferno', 'Inlet', 'Insightful', 'Intelligent',
	'Iron', 'Island', 'Isle', 'Jay', 'Jade', 'Jasper', 'Jaw', 'Just', 'Kind', 'Knife',
	'Knight', 'Lake', 'Lane', 'Lair', 'Lance', 'Large', 'Lark', 'Laurel', 'Leaf', 'Learned',
	'Ledge', 'Legend', 'Legion', 'Lightning', 'Lion', 'Luminous', 'Lucky', 'Mage', 'Majestic',
	'Manor', 'Marble', 'Mark', 'Meadow', 'Mace', 'Mercenary', 'Metal', 'Midnight', 'Mighty',
	'Mineral', 'Mirage', 'Mist', 'Modest', 'Monastery', 'Moon', 'Morning', 'Mountain', 'Mud',
	'Muted', 'Mystery', 'Nimble', 'Nightfall', 'Noble', 'North', 'Northeast', 'Northwest', 'Oak',
	'Oasis', 'Obsidian', 'Ocean', 'Old', 'Onyx', 'Opal', 'Order', 'Outrageous', 'Owl', 'Path',
	'Paladin', 'Parchment', 'Pauldron', 'Peaceful', 'Peak', 'Pearl', 'Pebble', 'Pennant', 'Pelt',
	'Perceptive', 'Phoenix', 'Pine', 'Pioneer', 'Plain', 'Placid', 'Platinum', 'Pompous', 'Port',
	'Powerful', 'Prairie', 'Precipice', 'Pride', 'Prosperous', 'Protector', 'Proud', 'Quartz',
	'Quick', 'Quiet', 'Rain', 'Ranger', 'Rapid', 'Raven', 'Ray', 'Realm', 'Record', 'Redoubt',
	'Regal', 'Regiment', 'Resilient', 'Retreat', 'Rib', 'Ridge', 'Righteous', 'River', 'Road',
	'Robin', 'Robust', 'Rock', 'Root', 'Royal', 'Ruby', 'Rune', 'Sage', 'Sail', 'Sand',
	'Sapient', 'Sapling', 'Savage', 'Scholar', 'Scout', 'Scepter', 'Sea', 'Seal', 'Seaboard',
	'Season', 'Seeker', 'Sentinel', 'Serene', 'Shadow', 'Shadowy', 'Sharp', 'Shield', 'Ship',
	'Shrine', 'Shining', 'Shoal', 'Silent', 'Silver', 'Sisterhood', 'Sky', 'Silly', 'Smart',
	'Snow', 'Soil', 'Solstice', 'Somber', 'Song', 'Soot', 'Spear', 'Spark', 'Sparkling', 'Spine',
	'Sprout', 'Spry', 'Squirrel', 'Star', 'Stalwart', 'Standard', 'Steady', 'Steel', 'Steppe',
	'Still', 'Stone', 'Storm', 'Strong', 'Sturdy', 'Summit', 'Sun', 'Sunrise', 'Sunset',
	'Swan', 'Swift', 'Sword', 'Symbol', 'Tale', 'Talented', 'Talon', 'Temple', 'Tender',
	'Terrible', 'Thorn', 'Throne', 'Thunder', 'Tiger', 'Tiara', 'Tide', 'Tough', 'Tower',
	'Town', 'Trail', 'Tranquil', 'Tree', 'Triumphant', 'Tundra', 'Tusk', 'Twilight', 'Unicorn',
	'Unlucky', 'Valiant', 'Valley', 'Venerable', 'Vengeful', 'Victorious', 'Virtuous', 'Vine',
	'Virtue', 'Voll', 'Voyage', 'Warden', 'Warlock', 'Warrior', 'Watchman', 'Wave', 'West',
	'Whirlpool', 'White', 'Wild', 'Wind', 'Wise', 'Wizard', 'Wolf', 'Wood', 'Wraith',
	'Wrathful', 'Wren', 'Zephyr'
]);

// Includes names from NPCs from Tibia
const singleNames = uniq([
	'Aldric', 'Aric', 'Baldric', 'Cedric', 'Darian', 'Eldric', 'Falric', 'Garric', 'Haldric', 'Iric',
	'Jaric', 'Kaldric', 'Loric', 'Maldric', 'Noric', 'Oric', 'Paldric', 'Quaric', 'Roric', 'Saldric',
	'Taric', 'Uldric', 'Varic', 'Waldric', 'Xaric', 'Yoric', 'Zaldric', 'Aeris', 'Bren', 'Cael',
	'Dain', 'Eris', 'Fen', 'Gwen', 'Hale', 'Iris', 'Jade', 'Kane', 'Lane', 'Mira',
	'Nora', 'Owen', 'Pax', 'Quinn', 'Rane', 'Sage', 'Tara', 'Ursa', 'Vale', 'Wren',
	'Xara', 'Yara', 'Zane', 'Aeron', 'Bryn', 'Cade', 'Dane', 'Evan', 'Finn', 'Gage',
	'Holt', 'Ivan', 'Jace', 'Kade', 'Liam', 'Mace', 'Nate', 'Odin', 'Pace', 'Quade',
	'Rafe', 'Seth', 'Tate', 'Vance', 'Wade', 'Xander', 'Aethon', 'Bael', 'Caelan', 'Dorian',
	'Elden', 'Faelan', 'Gareth', 'Haldor', 'Ivor', 'Jareth', 'Kael', 'Lorien', 'Mael', 'Nolan',
	'Orion', 'Phelan', 'Roran', 'Soren', 'Theron', 'Ulric', 'Varek', 'Wulfric', 'Xenon', 'Yorin',
	'Zephyr', 'Aiden', 'Brennan', 'Corbin', 'Derek', 'Ethan', 'Felix', 'Gavin', 'Hayden', 'Isaac',
	'Jasper', 'Kieran', 'Logan', 'Mason', 'Nathan', 'Oscar', 'Preston', 'Quincy', 'Ryder', 'Sebastian',
	'Tristan', 'Ulysses', 'Victor', 'Weston', 'Xavier', 'Yves', 'Zachary', 'Aria', 'Bella', 'Cora',
	'Diana', 'Elena', 'Fiona', 'Grace', 'Hannah', 'Ivy', 'Kira', 'Luna', 'Maya', 'Olivia',
	'Piper', 'Ruby', 'Uma', 'Vera', 'Willow', 'Zara', 'Alys', 'Briar', 'Celeste', 'Dawn',
	'Elara', 'Faye', 'Hazel', 'Jasmine', 'Lily', 'Maeve', 'Niamh', 'Opal', 'Pearl', 'Tessa',
	'Violet', 'Zoe', 'Alden', 'Bram', 'Cian', 'Dax', 'Eamon', 'Grey', 'Hugo', 'Jax',
	'Kai', 'Leo', 'Max', 'Nico', 'Rex', 'Sam', 'Theo', 'Uri', 'Vex', 'Wes',
	'Xavi', 'Yan', 'Zed', 'Alder', 'Birch', 'Cedar', 'Dell', 'Echo', 'Gale', 'Haze',
	'Kite', 'Leaf', 'Mist', 'Nova', 'Quill', 'Rain', 'Snow', 'Tide', 'Umber', 'Wave',
	'Xylo', 'Yarn', 'Zest', 'Aegis', 'Blade', 'Crest', 'Dusk', 'Ember', 'Gleam', 'Hilt',
	'Jewel', 'Knight', 'Lance', 'Noble', 'Orb', 'Prism', 'Quartz', 'Rune', 'Shield', 'Talon',
	'Urn', 'Vial', 'Wand', 'Xenith', 'Yoke', 'Aelric', 'Baelor', 'Caelum', 'Drakon', 'Eldrin',
	'Faelan', 'Gareth', 'Haldir', 'Ithil', 'Jareth', 'Kaelen', 'Lorien', 'Maelor', 'Nimrod', 'Orion',
	'Phelan', 'Quorin', 'Rhaegar', 'Soren', 'Thorin', 'Ulric', 'Vaelen', 'Wulfgar', 'Xander', 'Yorin',
	'Zephyr', 'Aelwyn', 'Brienne', 'Catelyn', 'Daenerys', 'Elara', 'Freyja', 'Gwyneth', 'Helena', 'Isolde',
	'Jocelyn', 'Katarina', 'Lysandra', 'Morgana', 'Nimue', 'Ophelia', 'Persephone', 'Quinn', 'Rowena', 'Selene',
	'Thalia', 'Ursula', 'Vivienne', 'Winona', 'Xanthe', 'Yseult', 'Zara', 'Aeron', 'Bran', 'Cade',
	'Dain', 'Eldric', 'Fenris', 'Gareth', 'Haldric', 'Ivor', 'Jareth', 'Kael', 'Loric', 'Mael',
	'Noric', 'Oric', 'Paldric', 'Quaric', 'Roric', 'Saldric', 'Taric', 'Uldric', 'Varic', 'Waldric',
	'Xaric', 'Yoric', 'Zaldric', 'Aethon', 'Bael', 'Caelan', 'Dorian', 'Elden', 'Faelan', 'Gareth',
	'Haldor', 'Ivor', 'Jareth', 'Kael', 'Lorien', 'Mael', 'Nolan', 'Orion', 'Phelan', 'Quinn',
	'Roran', 'Soren', 'Theron', 'Ulric', 'Varek', 'Wulfric', 'Xenon', 'Yorin', 'Zephyr', 'Aelric',
	'Bran', 'Cade', 'Dain', 'Eldric', 'Fenris', 'Gareth', 'Haldric', 'Ivor', 'Jareth', 'Kael',
	'Loric', 'Mael', 'Noric', 'Oric', 'Paldric', 'Quaric', 'Roric', 'Saldric', 'Taric', 'Uldric',
	'Varic', 'Waldric', 'Xaric', 'Yoric', 'Zaldric', 'Aerith', 'Brenna', 'Caelia', 'Diana', 'Elena',
	'Fiona', 'Gwen', 'Hannah', 'Iris', 'Jade', 'Kira', 'Luna', 'Maya', 'Nora', 'Olivia',
	'Piper', 'Quinn', 'Ruby', 'Sage', 'Tara', 'Uma', 'Vera', 'Willow', 'Xara', 'Yara',
	'Zara', 'Alys', 'Briar', 'Celeste', 'Dawn', 'Elara', 'Faye', 'Gwen', 'Hazel', 'Iris',
	'Jasmine', 'Kira', 'Lily', 'Maeve', 'Niamh', 'Opal', 'Pearl', 'Quinn', 'Rose', 'Sage',
	'Tessa', 'Una', 'Violet', 'Willow', 'Xara', 'Yara', 'Zoe'
]);

// Prefixes for names
const prefixes = uniq([
	"Acolyte", "Admiral", "Alchemist", "Ambassador", "Ancient", "Apothecary", "Apprentice",
	"Architect", "Archduchess", "Archduke", "Archmage", "Archpriest", "Archer", "Armorer", "Artificer",
	"Artisan", "Artist", "Assassin", "Bard", "Baron", "Baroness", "Beastmaster", "Blacksmith", "Builder",
	"Buccaneer", "Bounty", "Brewer", "Captain", "Carpenter", "Carver", "Chef", "Chamberlain", "Champion",
	"Chief", "Chieftain", "Chronicler", "Clerk", "Commander", "Commodore", "Constable", "Cook", "Cooper",
	"Corsair", "Count", "Countess", "Courser", "Courier", "Craftsman", "Crusader", "Defender", "Diplomat",
	"Diviner", "Doctor", "Druid", "Duchess", "Duke", "Earl", "Elder", "Emperor", "Empress", "Engineer",
	"Enchanter", "Envoy", "Explorer", "Farrier", "Fletcher", "Founder", "Former", "General", "Goldsmith",
	"Grand", "Grandmaster", "Guardian", "Guide", "Healer", "Herald", "Herbalist", "Historian", "High",
	"Hunter", "Innkeeper", "Instructor", "Judge", "Journeyman", "Jeweler", "Jester", "King", "Knight",
	"Lady", "Leader", "Leatherworker", "Learned", "Librarian", "Lieutenant", "Lord", "Mage", "Magistrate",
	"Mariner", "Marquis", "Marchioness", "Marshall", "Master", "Mason", "Merchant", "Mercenary", "Messenger",
	"Miller", "Minstrel", "Miner", "Mistress", "Monk", "Navigator", "Necromancer", "Notary", "Novice",
	"Oracle", "Page", "Paladin", "Painter", "Pathfinder", "Physician", "Pilot", "Pioneer", "Pirate",
	"Poet", "Prince", "Princess", "Privateer", "Professor", "Prophet", "Protector", "Prospector", "Ranger",
	"Rogue", "Sage", "Sailor", "Scholar", "Scout", "Scribe", "Scout", "Seer", "Secretary", "Sentinel",
	"Sergeant", "Shaman", "Sheriff", "Shipwright", "Silversmith", "Sir", "Smith", "Sorcerer", "Spy",
	"Steward", "Supreme", "Tailor", "Tanner", "Teacher", "Thief", "Tracker", "Trader", "Trailblazer",
	"Trapper", "Troubadour", "Venerable", "Vendor", "Vintner", "Viscount", "Viscountess", "Warden",
	"Warlord", "Warlock", "Warrior", "Watchman", "Weaver", "Weaponsmith", "Wise"
]);

// Connecting words for names (like "the", "of", etc.)
const connectors = uniq([
	'the', 'of'
]);

const DEFAULT_MAX = 15;
const DEBUG = false;

// --- blocked --------------------------------------------------------
const blockedWords = ['admin', 'administrator', 'gm', 'cm', 'god', 'tutor', 'fuck', 'sux', 'suck', 'noob', 'nigger', 'nig'];
const blockedPrefixes = ['admin ', 'administrator ', 'gm ', 'cm ', 'god ', 'tutor '];

// --- guards ---------------------------------------------------------
if (typeof $ === 'undefined' && typeof jQuery === 'undefined' && DEBUG) {
	console.warn('jQuery not found – using DOM fallback for name button');
}
if (typeof checkName !== 'function') {
	window.checkName = function () { };
}

// --- utils ----------------------------------------------------------
function getRandomInt(min, max) { // [min, max)
	return Math.floor(Math.random() * (max - min)) + min;
}
function pick(arr) {
	return arr && arr.length ? arr[getRandomInt(0, arr.length)] : '';
}
function capWordsPreserve(str) {
	if (!str) return '';
	return String(str).trim().split(/\s+/).map(w => w[0] ? w[0].toUpperCase() + w.slice(1) : '').join(' ');
}
function capWordLower(str) {
	if (!str) return '';
	str = String(str).trim().toLowerCase();
	return str ? str[0].toUpperCase() + str.slice(1) : '';
}
function normalizeSpaces(s) {
	return String(s).replace(/\s+/g, ' ').trim();
}
// Helper function to absolutely guarantee a name is within maxLen
function enforceMaxLength(name, maxLen) {
	if (!name) return '';
	if (!maxLen || maxLen <= 0) return String(name || '');
	name = String(name);
	if (name.length <= maxLen) return name;
	// Hard truncate if over limit
	return name.substring(0, maxLen).trim();
}

function shortenName(name, maxLen) {
	name = normalizeSpaces(name);
	if (!name || name.length <= maxLen) return name;
	const parts = name.split(' ');
	// Remove words from the end until we're at or under the limit
	while (parts.length > 1 && parts.join(' ').length > maxLen) {
		parts.pop();
	}
	let out = parts.join(' ');
	// If still too long (single long word or remaining words), truncate
	if (out.length > maxLen) {
		out = out.slice(0, maxLen).trim();
	}
	// Clean up trailing punctuation/spaces (but don't let it exceed maxLen)
	out = out.replace(/[\s'-]+$/, '');
	// CRITICAL: Use enforceMaxLength to guarantee we're within maxLen
	return enforceMaxLength(out, maxLen);
}
function combineWordHalves(word1, word2) {
	const half1 = Math.floor(word1.length / 2);
	const half2 = Math.floor(word2.length / 2);
	const useFirstHalf1 = Math.random() < 0.5;
	const useFirstHalf2 = Math.random() < 0.5;
	const part1 = useFirstHalf1 ? word1.substring(0, half1) : word1.substring(half1);
	const part2 = useFirstHalf2 ? word2.substring(0, half2) : word2.substring(half2);
	return (Math.random() < 0.5) ? (part1 + part2) : (part2 + part1);
}

// --- connector regex setup (fix trailing connectors) ----------------
const connectorsList = uniq(connectors.map(s => s.toLowerCase())).sort((a, b) => b.length - a.length);
function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
const connectorPattern = new RegExp(`\\b(?:${connectorsList.map(escRe).join('|')})\\b\\s*$`, 'i');

// Removes trailing connectors like "Alex from the"
function removeTrailingConnector(name) {
	let out = normalizeSpaces(String(name || ''));
	if (!out) return out;
	while (connectorPattern.test(out)) {
		out = out.replace(connectorPattern, '').trim();
	}
	return out;
}

// --- validation -----------------------------------------------------
function isValidName(name, maxLength = DEFAULT_MAX) {
	if (!name) return false;
	name = normalizeSpaces(name);
	if (name.length < 3 || name.length > maxLength) return false;

	const lower = name.toLowerCase();
	for (const p of blockedPrefixes) if (lower.indexOf(p) === 0) return false;
	for (const w of blockedWords) if (lower.indexOf(w) !== -1) return false;

	// Reject names ending with connectors
	if (connectorPattern.test(lower)) return false;

	if (name.indexOf('  ') !== -1) return false;
	const last = name.charAt(name.length - 1);
	if (last === '\'' || last === '-') return false;
	if (name.length > 1 && name.charAt(1) === ' ') return false;
	if (name.length > 1 && name.charAt(name.length - 2) === ' ') return false;

	if (!/^[A-Za-z]/.test(name)) return false;
	if (!/^[A-Za-z\s'-]+$/.test(name)) return false;

	return true;
}

// --- generator helpers ------------------------------------------------------
function resolveMaxLength(maxLength) {
	const parsed = parseInt(maxLength, 10);
	if (!Number.isNaN(parsed) && parsed > 0) return parsed;

	let dataMaxLength;
	if (window.jQuery) {
		const $btn = jQuery('#generate_random_name');
		if ($btn && $btn.length) {
			dataMaxLength = $btn.data('max-length');
		}
	} else {
		const btn = document.getElementById('generate_random_name');
		if (btn) dataMaxLength = btn.getAttribute('data-max-length');
	}

	const dataParsed = parseInt(dataMaxLength, 10);
	if (!Number.isNaN(dataParsed) && dataParsed > 0) return dataParsed;
	return DEFAULT_MAX;
}

function buildRandomName() {
	const adjective = pick(adjectives);
	const animal = pick(animals);
	const firstName = pick(firstNameParts);
	const lastName = pick(lastNameParts);
	const singleName = pick(singleNames);
	const prefix = pick(prefixes);
	const connector = pick(connectors);
	const monster = pick(monsters);
	const pattern = Math.random();
	let name = '';

	if (pattern < 0.12) {
		const singleChoice = Math.random();
		if (singleChoice < 0.25) name = capWordLower(adjective);
		else if (singleChoice < 0.50) name = capWordLower(animal);
		else if (singleChoice < 0.75) name = capWordsPreserve(singleName);
		else name = capWordLower(monster);
	} else if (pattern < 0.32) {
		const twoWordChoice = Math.random();
		if (twoWordChoice < 0.33) {
			const secondPart = Math.random() < 0.5 ? capWordLower(animal) : capWordLower(monster);
			name = `${capWordLower(adjective)} ${secondPart}`;
		} else if (twoWordChoice < 0.66) {
			name = `${capWordsPreserve(firstName)} ${capWordsPreserve(lastName)}`;
		} else {
			const namePart = Math.random() < 0.5 ? capWordsPreserve(firstName) : capWordsPreserve(singleName);
			name = `${namePart} ${capWordLower(monster)}`;
		}
	} else if (pattern < 0.40) {
		const word1 = (Math.random() < 0.5 ? adjective : (Math.random() < 0.5 ? animal : monster)).toLowerCase();
		const word2 = (Math.random() < 0.5 ? adjective : (Math.random() < 0.5 ? animal : monster)).toLowerCase();
		name = capWordLower(combineWordHalves(word1, word2).replace(/[^a-z'-]/g, ''));
	} else if (pattern < 0.52) {
		const nameChoice = Math.random();
		if (nameChoice < 0.25) name = `${prefix} ${capWordsPreserve(firstName)}`;
		else if (nameChoice < 0.50) name = `${prefix} ${capWordsPreserve(singleName)}`;
		else if (nameChoice < 0.75) name = `${prefix} ${capWordLower(animal)}`;
		else name = `${prefix} ${capWordLower(monster)}`;
	} else if (pattern < 0.67) {
		const namePartA = Math.random() < 0.5 ? capWordsPreserve(firstName) : capWordsPreserve(singleName);
		const pickA = Math.random();
		const secondPartA = (pickA < 0.25) ? capWordLower(adjective)
			: (pickA < 0.50) ? capWordLower(animal)
				: (pickA < 0.75) ? capWordLower(monster)
					: capWordsPreserve(lastName);
		name = `${namePartA} ${connector} ${secondPartA}`;
	} else if (pattern < 0.82) {
		const namePartB = Math.random() < 0.5 ? capWordsPreserve(firstName) : capWordsPreserve(singleName);
		const pickB = Math.random();
		const secondPartB = (pickB < 0.25) ? capWordLower(adjective)
			: (pickB < 0.50) ? capWordLower(animal)
				: (pickB < 0.75) ? capWordLower(monster)
					: capWordsPreserve(lastName);
		name = `${prefix} ${namePartB} ${connector} ${secondPartB}`;
	} else if (pattern < 0.92) {
		const namePartC = Math.random() < 0.5 ? capWordsPreserve(firstName) : capWordsPreserve(singleName);
		const pickC = Math.random();
		const secondPartC = (pickC < 0.33) ? capWordLower(adjective)
			: (pickC < 0.66) ? capWordLower(animal)
				: capWordLower(monster);
		name = `${namePartC} ${connector} ${secondPartC}`;
	} else if (Math.random() < 0.5) {
		name = `${prefix} ${capWordsPreserve(firstName)} ${capWordsPreserve(lastName)}`;
	} else {
		name = `${capWordsPreserve(firstName)} ${connector} ${capWordsPreserve(lastName)}`;
	}

	return name;
}

function postProcessName(name, maxLength = DEFAULT_MAX) {
	const limit = (Number(maxLength) > 0) ? Number(maxLength) : DEFAULT_MAX;
	let processed = normalizeSpaces(name || '');
	processed = shortenName(processed, limit);
	processed = removeTrailingConnector(processed);
	return enforceMaxLength(processed, limit);
}

function setNameField(name) {
	const value = String(name || '');
	let handled = false;

	if (window.jQuery) {
		const $input = jQuery('#character_name');
		if ($input && $input.length) {
			$input.val(value);
			handled = true;
		}
	}

	if (!handled) {
		const input = document.getElementById('character_name');
		if (input) {
			input.value = value;
			handled = true;
		}
	}

	if (!handled && DEBUG) {
		console.warn('#character_name not found; generated name:', value);
	}
}

function buildFallbackName(maxLength = DEFAULT_MAX) {
	const baseName = Math.random() < 0.5
		? capWordsPreserve(pick(singleNames))
		: `${capWordLower(pick(adjectives))} ${capWordLower(pick(animals))}`;
	let fallback = postProcessName(baseName, maxLength);
	if (fallback.length < 3) fallback = 'Brave';
	return fallback;
}

// --- generator ------------------------------------------------------
function generateRandomName(maxLength) {
	try {
		const resolvedMaxLength = resolveMaxLength(maxLength);
		const maxAttempts = 40;
		let attempts = 0;

		while (attempts < maxAttempts) {
			const candidate = postProcessName(buildRandomName(), resolvedMaxLength);
			if (isValidName(candidate, resolvedMaxLength)) {
				setNameField(candidate);
				checkName();
				return candidate;
			}
			attempts++;
		}

		const fallbackName = buildFallbackName(resolvedMaxLength);
		setNameField(fallbackName);
		checkName();
		return fallbackName;
	} catch (error) {
		console.error('Error in generateRandomName:', error);
		setNameField('Brave');
		checkName();
		return 'Brave';
	}
}

// --- bind -----------------------------------------------------------
(function bindGenerator() {
	const clickNamespace = '.randomNameGenerator';
	let domBoundButton = null;

	function handleClick(event) {
		event.preventDefault();
		generateRandomName();
	}

	function bindWithJquery() {
		if (!window.jQuery) return false;
		const $btn = jQuery('#generate_random_name');
		if (!$btn || !$btn.length) return false;
		$btn.off(`click${clickNamespace}`).on(`click${clickNamespace}`, handleClick);
		return true;
	}

	function bindWithDom() {
		const btn = document.getElementById('generate_random_name');
		if (!btn) return false;
		if (domBoundButton === btn) return true;
		if (domBoundButton) {
			domBoundButton.removeEventListener('click', handleClick);
		}
		btn.addEventListener('click', handleClick);
		domBoundButton = btn;
		return true;
	}

	function bindButton() {
		if (bindWithJquery()) return;
		if (bindWithDom()) return;
		if (DEBUG) console.warn('Button #generate_random_name not found');
	}

	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		bindButton();
	} else if (window.jQuery) {
		jQuery(bindButton);
	} else {
		document.addEventListener('DOMContentLoaded', bindButton);
	}

	setTimeout(bindButton, 100);
})();