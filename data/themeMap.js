/**
 * @file themeMap.js
 * @description Theme mappings for clothes, background, and elements.
 */

/**
 * @typedef {Object} ThemeSpec
 * @property {string} clothes - Outfit/costume description.
 * @property {string} background - Background scene description (WITHOUT the word "background" if you prefer).
 * @property {string} elements - Thematic elements to sprinkle into the image.
 */

/**
 * A mapping of theme keys to prompt-ready fragments.
 * @type {Record<string, ThemeSpec>}
 */
export const THEME_MAP = {
    winter: {
        name: "winter",
        location: "frozen palace terrace",
        time: "winter night",
        weather: "falling snow, frosty air",
        palette: "icy blues, silver, pale cyan highlights",
        clothes: "fur-trimmed royal cloak, ice-embroidered gown",
        materials: "velvet, fur, crystalline embroidery",
        background: "aurora sky with drifting frost and distant snowy peaks",
        elements: "ice crystals, snowflakes, silver filigree"
    },
    spring: {
        name: "spring",
        location: "blooming garden courtyard",
        time: "early morning",
        weather: "fresh dew, light breeze",
        palette: "pastels, fresh greens, warm sunrise gold",
        clothes: "floral-embroidered flowing dress, ribboned cape",
        materials: "silk, lace, floral threadwork",
        background: "sunrise haze over blossoms and flowering arches",
        elements: "petals, vines, dew sparkle, gold accents"
    },
    summer: {
        name: "summer",
        location: "sunlit coastal cliff",
        time: "late afternoon",
        weather: "warm air, bright sun",
        palette: "gold, turquoise, warm skin tones",
        clothes: "sun-kissed regal gown, airy sheer cape",
        materials: "silk chiffon, gilded trim",
        background: "glittering sea horizon with radiant sun glare",
        elements: "sun motifs, warm glints, floating sparkles"
    },
    fall: {
        name: "fall",
        location: "autumn forest path",
        time: "golden hour",
        weather: "cool breeze, swirling leaves",
        palette: "amber, copper, deep red, warm brown",
        clothes: "velvet dress in amber tones, leaf-pattern mantle",
        materials: "velvet, brocade, brass embroidery",
        background: "glowing woods with drifting leaves and warm haze",
        elements: "maple leaves, bronze filigree, harvest glow"
    },
    Christmas: {
        name: "Christmas",
        location: "snowy village square",
        time: "night",
        weather: "snowfall, twinkling lights",
        palette: "red, gold, evergreen, warm tungsten",
        clothes: "festive regal dress with red-and-gold trim, fur-lined cape",
        materials: "velvet, fur, gilded embroidery",
        background: "lantern-lit streets and decorated pines under a snowy sky",
        elements: "holly, ornaments, fairy lights, gold ribbons"
    },
    Easter: {
        name: "Easter",
        location: "spring meadow shrine",
        time: "morning",
        weather: "soft sun, fresh air",
        palette: "pastel pink, lavender, soft cream, mint",
        clothes: "pastel ceremonial gown, delicate lace veil",
        materials: "lace, silk, pearl accents",
        background: "flower fields with bright morning glow and gentle haze",
        elements: "lilies, painted eggs, gentle sparkles, gold accents"
    },
    jungle: {
        name: "jungle",
        location: "overgrown temple ruins",
        time: "midday",
        weather: "humid mist, sunbeams through canopy",
        palette: "deep green, gold, humid teal",
        clothes: "emerald ceremonial dress, leaf-like shoulder pieces",
        materials: "woven fibers, jade jewelry, gold inlay",
        background: "lush rainforest with dappled light and mist",
        elements: "vines, orchids, carved totems, drifting spores"
    },
    space: {
        name: "space",
        location: "celestial observatory platform",
        time: "eternal starlight",
        weather: "weightless dust, cosmic haze",
        palette: "violet, indigo, star-white, neon accents",
        clothes: "starlit royal dress with nebula patterns, celestial cape",
        materials: "satin, metallic thread, iridescent fabric",
        background: "nebula clouds, distant planets, dense starfields",
        elements: "constellations, orbit rings, cosmic dust, astrolabe motifs"
    },
    mountain: {
        name: "mountain",
        location: "alpine summit ridge",
        time: "sunrise",
        weather: "cold wind, thin mist",
        palette: "slate, pale gold, crisp blue",
        clothes: "rugged regal cloak, slate-and-silver embroidered gown",
        materials: "wool, leather accents, silver embroidery",
        background: "towering peaks with cloud ribbons and cold light",
        elements: "stone runes, wind trails, crystalline accents"
    },
    clouds: {
        name: "clouds",
        location: "sky realm above the clouds",
        time: "bright day",
        weather: "glowing sun rays, airy haze",
        palette: "pearl white, sky blue, soft gold",
        clothes: "airy flowing dress, cloudlike chiffon layers",
        materials: "chiffon, pearlescent fabric, gold filigree",
        background: "billowing clouds with god rays and soft bokeh light",
        elements: "feather motifs, pearlescent glow, floating light motes"
    },
    city: {
        name: "city",
        location: "neon downtown boulevard",
        time: "night",
        weather: "light rain, wet reflections",
        palette: "neon magenta, cyan, deep black, chrome highlights",
        clothes: "modern royal couture dress, sleek metallic embroidery",
        materials: "satin, chrome accessories, reflective textiles",
        background: "neon skyline with rain-slick streets and glowing bokeh",
        elements: "holographic accents, geometric patterns, signage glow"
    },
    grass: {
        name: "grass",
        location: "rolling green fields",
        time: "afternoon",
        weather: "gentle breeze, warm sun",
        palette: "fresh green, sunflower gold, natural tones",
        clothes: "verdant gown with botanical embroidery, woven crown",
        materials: "linen, embroidered threadwork, floral jewelry",
        background: "open meadow with soft horizon haze and bright light",
        elements: "wildflowers, pollen glow, nature filigree"
    },
    future: {
        name: "future",
        location: "sleek arcology plaza",
        time: "night",
        weather: "clean air, light holographic fog",
        palette: "teal, white, chrome, neon accents",
        clothes: "futuristic ceremonial suit-dress, luminous seams",
        materials: "chrome, glass-like textiles, LED filaments",
        background: "holograms and light trails among futuristic towers",
        elements: "circuit filigree, holographic glyphs, energy lines"
    },
    "middle ages": {
        name: "middle ages",
        location: "stone castle hall",
        time: "evening",
        weather: "torch smoke, warm air",
        palette: "warm amber, deep burgundy, aged gold",
        clothes: "medieval royal gown with brocade, ornate cape and corset",
        materials: "brocade, leather, gilded trim",
        background: "banners, stone arches, torchlight glow and smoke",
        elements: "heraldry, gilded armor accents, carved trim"
    },
    ancient: {
        name: "ancient",
        location: "sacred temple courtyard",
        time: "sunset",
        weather: "incense haze, warm dust",
        palette: "sandstone, antique gold, sunset orange",
        clothes: "ancient ceremonial robe with gold jewelry and linen folds",
        materials: "linen, hammered gold, carved stone motifs",
        background: "ruins with pillars, carved reliefs, and sacred haze",
        elements: "sun discs, relics, glyph carvings, drifting incense"
    }
};
