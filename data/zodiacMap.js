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
    Aries: {
        persona: "athletic angular face, strong brow ridge, sharp cheekbones, intense forward gaze, short windswept hair, subtle cheek scar, bold geometric warpaint accent",
        iconography: "ram-horn crown, horn-etched gold filigree, ember accents",
        bgFocus: "oversized Aries glyph halo behind the head; repeating Aries sigil pattern faintly across the background; Aries constellation blazing in starlight",
        prop: "a flaming ram-horn scepter"
    },
    Taurus: {
        persona: "broad soft jawline, calm heavy-lidded eyes, full eyebrows, thick wavy hair, warm grounded expression, faint freckles across nose, earthy gemstone ear-cuffs",
        iconography: "bull-horn tiara, earthy gemstones, engraved horn motifs",
        bgFocus: "large Taurus glyph carved in luminous aura; repeating Taurus sigils; Taurus constellation forming a glowing ring",
        prop: "a jade bull medallion emitting light"
    },
    Gemini: {
        persona: "symmetrical face, bright playful eyes, expressive brows, two-tone hair streak or split hairstyle, subtle beauty mark near lip, quick mischievous half-smile",
        iconography: "twin mirrored ornaments, dual-pattern embroidery, perfect symmetry",
        bgFocus: "Gemini glyph mirrored twice as a halo motif; repeating twin-glyph pattern; Gemini constellation forming a crown",
        prop: "a pair of identical crystal mirrors"
    },
    Cancer: {
        persona: "soft rounded features, luminous watery eyes, gentle smile, long flowing hair like tide waves, pearly highlight on cheeks, delicate moon-shaped face jewelry",
        iconography: "moon-pearl jewelry, crab-like filigree, tidal shimmer",
        bgFocus: "Cancer glyph as glowing lunar halo; repeating Cancer sigils; Cancer constellation arcing overhead",
        prop: "a pearl moon-chalice with glowing water"
    },
    Leo: {
        persona: "regal high cheekbones, confident chin, fierce catlike eyes, thick voluminous hair like a mane, radiant grin, sun-kissed glow, bold gold eyeliner",
        iconography: "sunburst diadem, lion-mane collar, regal radiance",
        bgFocus: "huge Leo glyph burning like a sun behind the subject; repeating Leo glyphs as faint pattern; Leo constellation shining boldly",
        prop: "a radiant sun-disc staff"
    },
    Virgo: {
        persona: "fine delicate features, focused observant eyes, neat brows, smooth braided hair crown, subtle freckle cluster on cheek, calm composed expression, minimal elegant makeup",
        iconography: "wheat-and-vine embroidery, delicate gold vines, maiden motifs",
        bgFocus: "Virgo glyph softly glowing in the background haze; repeating Virgo sigils; Virgo constellation drawn in fine starlight",
        prop: "a golden wheat-sheaf pendant"
    },
    Libra: {
        persona: "harmonious oval face, balanced proportions, serene gaze, glossy mid-length hair, symmetrical earrings, subtle dimple when smiling, refined soft makeup",
        iconography: "scales-shaped jewelry, perfectly balanced symmetry, polished gold",
        bgFocus: "Libra glyph as luminous emblem behind the head; repeating Libra glyph patterns; Libra constellation forming a balanced arc",
        prop: "a hovering pair of golden scales"
    },
    Scorpio: {
        persona: "sharp sculpted cheekbones, piercing narrowed eyes, intense arched brows, sleek dark hair, small tattoo-like sigil near temple, subtle smirk, dramatic eyeliner",
        iconography: "stinger-shaped ornament, dark jeweled accents, subtle venom glow",
        bgFocus: "Scorpio glyph carved as radiant sigil behind the subject; repeating Scorpio sigils; Scorpio constellation like a hooked blade",
        prop: "a jeweled stinger dagger"
    },
    Sagittarius: {
        persona: "bright adventurous eyes, confident open expression, slightly sun-touched skin glow, tousled hair tied back, small nose bridge bandage or mark, playful grin",
        iconography: "bow-and-arrow motifs, star-forged arrow charm, dynamic linework",
        bgFocus: "Sagittarius glyph projected across the background; repeating Sagittarius glyphs; constellation shaped like a glowing arrow",
        prop: "a star-bow with a luminous arrow"
    },
    Capricorn: {
        persona: "mature stoic features, strong nose bridge, steady calculating gaze, neatly pulled-back hair, faint forehead crease, minimal smile, polished antique jewelry near face",
        iconography: "sea-goat crest motifs, antique gold clasps, mountain-wave patterns",
        bgFocus: "Capricorn glyph as a grand sigil halo; repeating Capricorn sigils; Capricorn constellation spiraling behind",
        prop: "a sea-goat crest banner glowing"
    },
    Aquarius: {
        persona: "unique angular features, curious far-looking eyes, slightly raised brows, flowing hair with airy strands, subtle iridescent cheek highlight, asymmetrical ear jewelry",
        iconography: "water-vessel jewelry, flowing liquid-light ribbons, wave filigree",
        bgFocus: "Aquarius glyph pouring light in the background; repeating Aquarius sigils; Aquarius constellation like a streaming river",
        prop: "a glowing amphora spilling starlight-water"
    },
    Pisces: {
        persona: "dreamy soft gaze, gentle rounded face, glossy wet-look eyes, long flowing hair like underwater ribbons, tiny beauty mark under eye, serene wistful smile",
        iconography: "twin fish motifs, swirling water embroidery, pearlescent shimmer",
        bgFocus: "Pisces glyph as luminous seal behind the head; repeating Pisces sigils; Pisces constellation as two linked arcs",
        prop: "a floating twin-fish orb of light"
    }
};

