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
        clothes: "fur-trimmed royal cloak, icy blue silk gown",
        background: "snowy aurora night sky with drifting frost",
        elements: "crystalline ice filigree, snowflakes, silver ornaments"
    },
    spring: {
        clothes: "floral-embroidered flowing dress, pastel ribbons",
        background: "blooming meadow with soft sunrise haze",
        elements: "petals, vines, dew-kissed gold accents"
    },
    summer: {
        clothes: "sunlit golden gown, airy sheer cape",
        background: "bright coastal horizon with shimmering heat haze",
        elements: "sun motifs, warm glints, sparkling dust"
    },
    fall: {
        clothes: "velvet dress in amber tones, leaf-patterned mantle",
        background: "autumn forest with swirling golden leaves",
        elements: "maple leaves, bronze filigree, harvest glow"
    },
    Christmas: {
        clothes: "festive regal dress with red-and-gold trim, fur-lined cape",
        background: "snowy village lights and twinkling winter sky",
        elements: "holly, ornaments, warm fairy lights, gold ribbons"
    },
    Easter: {
        clothes: "soft pastel ceremonial gown, delicate lace veil",
        background: "spring garden with bright morning light",
        elements: "painted eggs, lilies, gentle sparkles, gold accents"
    },
    jungle: {
        clothes: "emerald ceremonial dress, leaf-like shoulder pieces",
        background: "lush rainforest with sunbeams through canopy",
        elements: "vines, exotic flowers, mist, carved gold totems"
    },
    space: {
        clothes: "starlit royal dress with nebula patterns, celestial cape",
        background: "deep nebula with distant planets and starfields",
        elements: "orbit rings, constellations, cosmic dust, golden astrolabe motifs"
    },
    mountain: {
        clothes: "rugged regal cloak, slate-and-silver embroidered gown",
        background: "majestic peaks with thin clouds and cold light",
        elements: "stone runes, wind trails, glinting crystalline accents"
    },
    clouds: {
        clothes: "airy flowing dress, cloudlike chiffon layers",
        background: "vast sky of billowing clouds and sun rays",
        elements: "feathered motifs, pearlescent glow, soft golden filigree"
    },
    city: {
        clothes: "modern royal couture dress, sleek metallic embroidery",
        background: "neon-lit skyline with reflective wet streets",
        elements: "holographic accents, geometric gold patterns, glowing signage bokeh"
    },
    grass: {
        clothes: "verdant gown with botanical embroidery, woven crown",
        background: "open green fields with gentle breeze and light",
        elements: "wildflowers, pollen glow, golden nature filigree"
    },
    future: {
        clothes: "futuristic ceremonial suit-dress, chrome and luminous seams",
        background: "sleek sci-fi metropolis with holograms and light trails",
        elements: "holographic glyphs, circuitry filigree, radiant energy lines"
    },
    "middle ages": {
        clothes: "medieval royal gown with brocade, ornate cape and corset",
        background: "stone castle hall with banners and torchlight",
        elements: "heraldic emblems, gilded armor accents, carved golden trim"
    },
    ancient: {
        clothes: "ancient ceremonial robe with gold jewelry and linen folds",
        background: "temple ruins with carved pillars and sacred incense haze",
        elements: "hieroglyph-like symbols, sun discs, antique gold relics"
    }
};
