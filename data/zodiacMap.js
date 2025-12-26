/**
 * @file zodiacMap.js
 * @description Zodiac mappings for iconography and explicit background focus.
 */

/**
 * @typedef {Object} ZodiacSpec
 * @property {string} iconography - Wearable/motif details reinforcing the sign.
 * @property {string} bgFocus - Explicit instruction that the sign is prominent in the background.
 */

/**
 * A mapping of zodiac sign names to prompt-ready fragments.
 * Keys must match the option text in the Zodiac dropdown (e.g., "Aries").
 * @type {Record<string, ZodiacSpec>}
 */
export const ZODIAC_MAP = {
    Aries: { iconography: "ram horn crown motifs, horn-shaped golden filigree, ember-like sparks", bgFocus: "giant Aries glyph halo behind the head, Aries constellation glowing across the sky" },
    Taurus: { iconography: "bull horn tiara, earthy gemstone jewelry, engraved horn patterns", bgFocus: "large Taurus glyph etched into the background aura, Taurus constellation forming a ring" },
    Gemini: { iconography: "twin mirrored ornaments, dual-pattern embroidery, symmetrical motifs", bgFocus: "Gemini glyph repeated as faint luminous pattern in the background, Gemini constellation crown" },
    Cancer: { iconography: "moon-pearl jewelry, crab-inspired filigree, tidal shimmer accents", bgFocus: "Cancer glyph as glowing lunar halo in the background, Cancer constellation arcing overhead" },
    Leo: { iconography: "sunburst diadem, lion mane-like collar, regal golden radiance", bgFocus: "huge Leo glyph burning like a sun behind the subject, Leo constellation shining boldly" },
    Virgo: { iconography: "wheat and botanical embroidery, delicate gold vines, maiden icon motifs", bgFocus: "Virgo glyph glowing softly in the background haze, Virgo constellation drawn in starlight" },
    Libra: { iconography: "scales-shaped jewelry, balanced symmetrical patterns, polished gold accents", bgFocus: "Libra glyph as luminous emblem in the background, Libra constellation forming a balanced arc" },
    Scorpio: { iconography: "sharp stinger-shaped ornament, dark jeweled accents, subtle venom-green glow", bgFocus: "Scorpio glyph carved as radiant sigil in the background, Scorpio constellation like a hooked blade" },
    Sagittarius: { iconography: "ornate bow-and-arrow motifs, star-forged arrow charm, dynamic linework", bgFocus: "Sagittarius glyph projected in the background, Sagittarius constellation as a glowing arrow" },
    Capricorn: { iconography: "sea-goat crest motifs, antique gold clasps, mountain-and-wave patterns", bgFocus: "Capricorn glyph as a grand sigil behind the subject, Capricorn constellation spiraling" },
    Aquarius: { iconography: "water-vessel jewelry, flowing liquid-light ribbons, wave filigree", bgFocus: "Aquarius glyph pouring light in the background, Aquarius constellation like a stream" },
    Pisces: { iconography: "twin fish/koi motifs, swirling water embroidery, pearlescent shimmer", bgFocus: "Pisces glyph as luminous seal in the background, Pisces constellation as two linked arcs" }
};
