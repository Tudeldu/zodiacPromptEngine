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
        atmosphere: "ominous, mysterious, arcane",
        lighting: "low-key cinematic, deep shadows, high contrast",
        expression: "piercing, enigmatic gaze with a subtle smirk"
    },
    light: {
        atmosphere: "radiant, uplifting, serene",
        lighting: "bright soft glow, high-key, gentle bloom",
        expression: "soft, kind smile with bright eyes"
    },
    happy: {
        atmosphere: "joyful, warm, celebratory",
        lighting: "golden hour glow, soft rim light",
        expression: "wide warm smile, cheerful sparkling eyes"
    },
    sad: {
        atmosphere: "melancholic, quiet, reflective",
        lighting: "cool muted light, soft overcast",
        expression: "downcast eyes, gentle sorrowful expression"
    },
    neutral: {
        atmosphere: "calm, balanced, composed",
        lighting: "natural studio light, even diffusion",
        expression: "serene neutral expression, relaxed features"
    },
    angry: {
        atmosphere: "fierce, intense, volatile",
        lighting: "dramatic hard light, sharp highlights",
        expression: "furrowed brows, intense glare, clenched jaw"
    },
    fear: {
        atmosphere: "tense, eerie, unsettling",
        lighting: "dim moody light, foggy beams, chiaroscuro",
        expression: "wide anxious eyes, tense lips, startled look"
    },
    surprised: {
        atmosphere: "electric, vivid, sudden",
        lighting: "sparkling highlights, dynamic accent lighting",
        expression: "raised brows, slightly parted lips, astonished eyes"
    },
    disgusted: {
        atmosphere: "toxic, corrupted, uneasy",
        lighting: "sickly greenish cast, harsh underlight",
        expression: "subtle grimace, narrowed eyes, curled lip"
    },
    anticipating: {
        atmosphere: "charged, expectant, suspenseful",
        lighting: "glowing backlight, dramatic gradient light",
        expression: "focused intent stare, poised half-smile, alert eyes"
    }
};
