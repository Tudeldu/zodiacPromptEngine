/**
 * @file toneMap.js
 * @description Tone mappings for atmosphere, lighting, and facial expression.
 */

/**
 * @typedef {Object} ToneSpec
 * @property {string} atmosphere - Words describing the scene mood.
 * @property {string} lighting - Lighting directions for the image model.
 * @property {string} expression - Facial expression matching the tone.
 */

/**
 * A mapping of tone keys to prompt-ready fragments.
 * @type {Record<string, ToneSpec>}
 */
export const TONE_MAP = {
    dark: {
        name: "dark",
        atmosphere: "ominous, arcane, secretive",
        lighting: "low-key chiaroscuro, deep shadows, high contrast rim light",
        expression: "piercing, enigmatic stare; subtle smirk",
        palette: "deep indigo, black, muted gold accents, low saturation",
        camera: "85mm portrait lens, shallow DOF, heavy vignette, crisp eye catchlight",
        fx: "thin smoke, drifting embers, subtle film grain"
    },
    light: {
        name: "light",
        atmosphere: "radiant, pure, uplifting",
        lighting: "high-key soft glow, gentle bloom, luminous fill light",
        expression: "soft kind smile; calm bright eyes",
        palette: "airy whites, pale lavender, soft gold highlights",
        camera: "50mm portrait, soft diffusion, gentle bokeh, clean highlights",
        fx: "floating sparkles, soft haze, subtle lens bloom"
    },
    happy: {
        name: "happy",
        atmosphere: "joyful, warm, celebratory",
        lighting: "warm golden key light, soft rim light, sun-kissed highlights",
        expression: "wide warm smile; lively sparkling eyes",
        palette: "warm gold, coral, rich saturation, bright highlights",
        camera: "50mm, slightly higher exposure, pleasing skin tones, lively bokeh",
        fx: "glittering particles, soft light flares"
    },
    sad: {
        name: "sad",
        atmosphere: "melancholic, quiet, reflective",
        lighting: "cool soft overcast, gentle shadows, dim ambient fill",
        expression: "downcast eyes; subtle tear-gloss; sorrowful calm",
        palette: "cool blues, slate gray, desaturated tones",
        camera: "85mm, soft focus falloff, subtle vignette, moody bokeh",
        fx: "mist, fine drizzle, faint tear sheen"
    },
    neutral: {
        name: "neutral",
        atmosphere: "calm, balanced, composed",
        lighting: "even softbox-style light, controlled highlights",
        expression: "serene neutral expression; relaxed features",
        palette: "natural tones, balanced contrast, moderate saturation",
        camera: "50–85mm, clean exposure, minimal stylization, sharp details",
        fx: "very subtle haze, clean air"
    },
    angry: {
        name: "angry",
        atmosphere: "fierce, intense, volatile",
        lighting: "hard key light, sharp highlights, strong shadow edges",
        expression: "furrowed brows; intense glare; clenched jaw",
        palette: "hot reds, burnt orange, deep blacks, high contrast",
        camera: "slightly low angle, 35–50mm, dramatic perspective, punchy contrast",
        fx: "sparking energy, heat shimmer, flying embers"
    },
    fear: {
        name: "fear",
        atmosphere: "tense, eerie, unsettling",
        lighting: "dim moody beams, underlit accents, harsh pockets of light",
        expression: "wide anxious eyes; tense lips; startled look",
        palette: "cold cyan, sickly green tint, low saturation",
        camera: "tight crop, slight dutch angle, 50mm, heavy vignette",
        fx: "fog, drifting shadow shapes, dust motes in light beams"
    },
    surprised: {
        name: "surprised",
        atmosphere: "electric, sudden, vivid",
        lighting: "bright accent rim light, crisp specular highlights",
        expression: "raised brows; parted lips; astonished eyes",
        palette: "vivid highlights, high clarity, punchy color pops",
        camera: "35–50mm, slightly wider framing, high micro-contrast",
        fx: "light burst, floating particles, subtle motion energy"
    },
    disgusted: {
        name: "disgusted",
        atmosphere: "corrupted, uneasy, toxic",
        lighting: "harsh underlight, uneven sickly glow, gritty shadows",
        expression: "curled lip; narrowed eyes; subtle grimace",
        palette: "muddy green, bile yellow accents, low cleanliness",
        camera: "50mm, gritty texture emphasis, slightly harsh sharpening",
        fx: "toxic haze, drifting spores, grimy particles"
    },
    anticipating: {
        name: "anticipating",
        atmosphere: "charged, suspenseful, expectant",
        lighting: "strong backlight, dramatic gradient lighting, glowing edges",
        expression: "focused intent stare; poised half-smile; alert eyes",
        palette: "teal + gold, cinematic contrast, controlled saturation",
        camera: "50mm, cinematic bokeh, crisp focus plane on eyes",
        fx: "wind-swept particles, glowing dust trails"
    }
};
