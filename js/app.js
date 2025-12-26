/**
 * @file app.js
 * @description Main application logic for the Zodiac Prompt Generator.
 */

import { TONE_MAP } from "../data/toneMap.js";
import { THEME_MAP } from "../data/themeMap.js";
import { ZODIAC_MAP } from "../data/zodiacMap.js";

/**
 * @typedef {Object} Parts
 * @property {string} gender_representation
 * @property {string} theme_clothes
 * @property {string} theme_background
 * @property {string} theme_elements
 * @property {string} tone_atmosphere
 * @property {string} tone_lighting
 * @property {string} tone_expression
 * @property {string} zodiac_in_background
 * @property {string} zodiac_iconography
 */

/**
 * Prompt template used to generate the final prompt text.
 * @type {string}
 */
const BASE_TEMPLATE =
    "mystical fantasy portrait of a beautiful [gender_representation] representing [Zodiac Sign], " +
    "[theme_clothes], [theme_background] background, [zodiac_in_background], glowing zodiac symbol, " +
    "[tone_atmosphere] atmosphere, [tone_expression] facial expression, highly detailed digital illustration, " +
    "[tone_lighting] lighting, [theme_elements] elements, [zodiac_iconography], ethereal, fantasy art, 4k, ultra detailed";

/**
 * Gender -> prompt-ready representation.
 * @type {Record<string, string>}
 */
const GENDER_MAP = {
    female: "woman",
    male: "man",
    "non-binary": "androgynous deity",
};

/**
 * Safe map lookup with a fallback key.
 * @template T
 * @param {Record<string, T>} map - The map object.
 * @param {string} key - Desired key.
 * @param {string} fallbackKey - Fallback key if missing.
 * @returns {T} - The value from the map.
 */
function safePick(map, key, fallbackKey) {
    return map[key] ?? map[fallbackKey];
}

/**
 * Cache DOM references once.
 * @returns {Record<string, HTMLElement>}
 */
function getEls() {
    return {
        zodiac: document.getElementById("zodiac"),
        gender: document.getElementById("gender"),
        tone: document.getElementById("tone"),
        theme: document.getElementById("theme"),
        finalPrompt: document.getElementById("finalPrompt"),
        copyBtn: document.getElementById("copyBtn"),
        copyStatus: document.getElementById("copyStatus"),

        pGender: document.getElementById("pGender"),
        pClothes: document.getElementById("pClothes"),
        pBg: document.getElementById("pBg"),
        pAtmos: document.getElementById("pAtmos"),
        pExpr: document.getElementById("pExpr"),
        pLight: document.getElementById("pLight"),
        pZBg: document.getElementById("pZBg"),
        pZIcon: document.getElementById("pZIcon"),
        pElems: document.getElementById("pElems"),
    };
}

/**
 * Build prompt parts + final prompt text based on current UI state.
 * @param {ReturnType<typeof getEls>} els - DOM element references.
 * @returns {{ prompt: string, parts: Parts }}
 */
function buildPromptAndParts(els) {
    const zodiac = els.zodiac.value.trim();
    const genderKey = els.gender.value;
    const toneKey = els.tone.value;
    const themeKey = els.theme.value;
    // const extras = els.extras.value.trim();

    const genderRep = safePick(GENDER_MAP, genderKey, "female");
    const toneObj = safePick(TONE_MAP, toneKey, "neutral");
    const themeObj = safePick(THEME_MAP, themeKey, "space");
    const zodiacObj = safePick(ZODIAC_MAP, zodiac, "Aries");

    /** @type {Parts} */
    const parts = {
        gender_representation: genderRep,
        theme_clothes: themeObj.clothes,
        theme_background: themeObj.background,
        theme_elements: themeObj.elements,
        tone_atmosphere: toneObj.atmosphere,
        tone_lighting: toneObj.lighting,
        tone_expression: toneObj.expression,
        zodiac_in_background: zodiacObj.bgFocus,
        zodiac_iconography: zodiacObj.iconography,
    };

    let prompt = BASE_TEMPLATE
        .replace("[Zodiac Sign]", zodiac)
        .replace("[gender_representation]", parts.gender_representation)
        .replace("[theme_clothes]", parts.theme_clothes)
        .replace("[theme_background]", parts.theme_background)
        .replace("[zodiac_in_background]", parts.zodiac_in_background)
        .replace("[tone_atmosphere]", parts.tone_atmosphere)
        .replace("[tone_expression]", parts.tone_expression)
        .replace("[tone_lighting]", parts.tone_lighting)
        .replace("[theme_elements]", parts.theme_elements)
        .replace("[zodiac_iconography]", parts.zodiac_iconography);
    return { prompt, parts };
}

/**
 * Render the prompt + part previews into the UI.
 * @param {ReturnType<typeof getEls>} els - DOM element references.
 */
function render(els) {
    const { prompt, parts } = buildPromptAndParts(els);
    els.finalPrompt.textContent = prompt;

    els.pGender.textContent = parts.gender_representation;
    els.pClothes.textContent = parts.theme_clothes;
    els.pBg.textContent = parts.theme_background;
    els.pAtmos.textContent = parts.tone_atmosphere;
    els.pExpr.textContent = parts.tone_expression;
    els.pLight.textContent = parts.tone_lighting;
    els.pZBg.textContent = parts.zodiac_in_background;
    els.pZIcon.textContent = parts.zodiac_iconography;
    els.pElems.textContent = parts.theme_elements;

    els.copyStatus.textContent = "";
}

/**
 * Copy the final prompt to the clipboard.
 * Uses Clipboard API when available; falls back to execCommand for older browsers.
 * @param {ReturnType<typeof getEls>} els - DOM element references.
 */
async function copyPrompt(els) {
    const { prompt } = buildPromptAndParts(els);

    try {
        await navigator.clipboard.writeText(prompt);
        els.copyStatus.textContent = "Copied!";
    } catch {
        const ta = document.createElement("textarea");
        ta.value = prompt;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        els.copyStatus.textContent = "Copied!";
    }

    setTimeout(() => (els.copyStatus.textContent = ""), 1500);
}

/**
 * Attach all event listeners for live updates and buttons.
 * @param {ReturnType<typeof getEls>} els - DOM element references.
 */
function wireEvents(els) {
    ["change", "input"].forEach((evt) => {
        els.zodiac.addEventListener(evt, () => render(els));
        els.gender.addEventListener(evt, () => render(els));
        els.tone.addEventListener(evt, () => render(els));
        els.theme.addEventListener(evt, () => render(els));
    });

    els.copyBtn.addEventListener("click", () => copyPrompt(els));
}

/**
 * App entry point.
 */
function main() {
    const els = getEls();

    // Sensible defaults
    els.gender.value = "female";
    els.tone.value = "happy";
    els.theme.value = "summer";

    wireEvents(els);
    render(els);
}

main();
