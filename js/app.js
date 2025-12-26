/**
 * @file app.js
 * @description Generates one copyable prompt per zodiac sign based on shared settings.
 */

import { TONE_MAP } from "../data/toneMap.js";
import { THEME_MAP } from "../data/themeMap.js";
import { ZODIAC_MAP } from "../data/zodiacMap.js";

/**
 * Zodiac sign order for rendering.
 * @type {string[]}
 */
const SIGNS = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

/**
 * Prompt template used to generate prompts.
 * @type {string}
 */
export const BASE_TEMPLATE =
    "[theme_name], [tone_name]. " +
    "Cinematic mystical fantasy portrait (head-and-shoulders), centered composition, shallow depth of field. " +
    "Subject: beautiful [gender_representation] embodying [Zodiac Sign]; identity/persona: [zodiac_persona]. " +
    "Wardrobe: [theme_clothes] (materials: [theme_materials]). " +
    "Scene: [theme_location], [theme_time], [theme_weather]; background: [theme_background]. " +
    "Zodiac focus: [zodiac_in_background], glowing [Zodiac Sign] glyph halo behind the head, [zodiac_iconography], prop: [zodiac_prop]. " +
    "Mood: [tone_atmosphere], facial expression: [tone_expression], color palette: [tone_palette] + [theme_palette], FX: [tone_fx]. " +
    "Lighting: [tone_lighting]. Camera: [tone_camera]. " +
    "Extra thematic elements: [theme_elements]. " +
    "Keep the same distinct persona facial features: [zodiac_persona]. " +
    "Ultra-detailed, high fidelity, fantasy art, 4k.";


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
 * @param {Record<string, T>} map
 * @param {string} key
 * @param {string} fallbackKey
 * @returns {T}
 */
function safePick(map, key, fallbackKey) {
    return map[key] ?? map[fallbackKey];
}

/**
 * Cached DOM references.
 * @returns {Record<string, HTMLElement>}
 */
function getEls() {
    return {
        gender: document.getElementById("gender"),
        tone: document.getElementById("tone"),
        theme: document.getElementById("theme"),
        zodiacList: document.getElementById("zodiacList"),
        copyAllBtn: document.getElementById("copyAllBtn"),
        copyStatus: document.getElementById("copyStatus"),
    };
}

/**
 * Get current shared settings from UI.
 * @param {ReturnType<typeof getEls>} els
 * @returns {{genderKey: string, toneKey: string, themeKey: string}}
 */
function getSettings(els) {
    return {
        genderKey: els.gender.value,
        toneKey: els.tone.value,
        themeKey: els.theme.value,
    };
}

/**
 * Build a single prompt for a given zodiac sign.
 * @param {string} zodiacSign
 * @param {{genderKey: string, toneKey: string, themeKey: string}} settings
 * @returns {{ prompt: string }}
 */
function buildPromptForSign(zodiacSign, settings) {
    const genderRep = safePick(GENDER_MAP, settings.genderKey, "female");
    const toneObj = safePick(TONE_MAP, settings.toneKey, "neutral");
    const themeObj = safePick(THEME_MAP, settings.themeKey, "space");
    const zodiacObj = safePick(ZODIAC_MAP, zodiacSign, "Aries");

    const replacements = {
        "[Zodiac Sign]": zodiacSign,
        "[gender_representation]": genderRep,

        "[tone_name]": toneObj.name ?? settings.toneKey,
        "[tone_atmosphere]": toneObj.atmosphere,
        "[tone_expression]": toneObj.expression,
        "[tone_lighting]": toneObj.lighting,
        "[tone_palette]": toneObj.palette,
        "[tone_camera]": toneObj.camera,
        "[tone_fx]": toneObj.fx,

        "[theme_name]": themeObj.name ?? settings.themeKey,
        "[theme_location]": themeObj.location,
        "[theme_time]": themeObj.time,
        "[theme_weather]": themeObj.weather,
        "[theme_palette]": themeObj.palette,
        "[theme_clothes]": themeObj.clothes,
        "[theme_materials]": themeObj.materials,
        "[theme_background]": themeObj.background,
        "[theme_elements]": themeObj.elements,

        "[zodiac_persona]": zodiacObj.persona,
        "[zodiac_in_background]": zodiacObj.bgFocus,
        "[zodiac_iconography]": zodiacObj.iconography,
        "[zodiac_prop]": zodiacObj.prop,
    };

    let prompt = BASE_TEMPLATE;
    for (const [needle, value] of Object.entries(replacements)) {
        prompt = prompt.replaceAll(needle, value);
    }

    return { prompt };
}


/**
 * Copy text to clipboard (Clipboard API with fallback).
 * @param {string} text
 * @returns {Promise<void>}
 */
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
    }
}

/**
 * Set a small transient status message.
 * @param {ReturnType<typeof getEls>} els
 * @param {string} msg
 */
function setStatus(els, msg) {
    els.copyStatus.textContent = msg;
    setTimeout(() => (els.copyStatus.textContent = ""), 1400);
}

/**
 * Render a simple list of zodiac signs with copy buttons.
 * Shows a per-row confirmation next to the clicked button.
 *
 * @param {ReturnType<typeof getEls>} els
 */
function renderList(els) {
    const settings = getSettings(els);
    els.zodiacList.innerHTML = "";

    for (const sign of SIGNS) {
        const row = makeListItem(sign, async (setRowStatus) => {
            // Optional immediate feedback while copying
            setRowStatus("Copying...");

            const { prompt } = buildPromptForSign(sign, settings);
            await copyText(prompt);

            setRowStatus("Copied!");
        });

        els.zodiacList.appendChild(row);
    }
}


/**
 * Copy all prompts (one per sign) as a single block.
 * @param {ReturnType<typeof getEls>} els
 */
async function copyAllPrompts(els) {
    const settings = getSettings(els);
    const all = SIGNS.map((sign) => {
        const { prompt } = buildPromptForSign(sign, settings);
        return `${sign}:\n${prompt}`;
    }).join("\n\n");

    await copyText(all);
    setStatus(els, "Copied all prompts!");
}

/**
 * Wire UI events.
 * @param {ReturnType<typeof getEls>} els
 */
function wireEvents(els) {
    ["change", "input"].forEach((evt) => {
        els.gender.addEventListener(evt, () => renderList(els));
        els.tone.addEventListener(evt, () => renderList(els));
        els.theme.addEventListener(evt, () => renderList(els));
    });

    els.copyAllBtn.addEventListener("click", () => copyAllPrompts(els));
}

/**
 * Create a Bootstrap list-group item with a label, a copy button,
 * and a per-row confirmation message next to the button.
 *
 * @param {string} label - Zodiac sign name.
 * @param {(setRowStatus: (msg: string) => void) => void} onCopy - Handler called on copy click.
 * @returns {HTMLDivElement}
 */
function makeListItem(label, onCopy) {
    const item = document.createElement("div");
    item.className =
        "list-group-item bg-dark text-light d-flex justify-content-between align-items-center gap-2";

    const left = document.createElement("div");
    left.className = "fw-semibold";
    left.textContent = label;

    const right = document.createElement("div");
    right.className = "d-flex align-items-center gap-2";

    const status = document.createElement("span");
    status.className = "text-secondary small";
    status.textContent = ""; // per-row confirmation appears here

    const btn = document.createElement("button");
    btn.className = "btn btn-sm btn-outline-light";
    btn.type = "button";
    btn.textContent = "Copy";

    /**
     * Set the confirmation text for this row and clear it shortly after.
     * @param {string} msg
     */
    function setRowStatus(msg) {
        status.textContent = msg;
        if (msg) setTimeout(() => (status.textContent = ""), 1200);
    }

    btn.addEventListener("click", () => onCopy(setRowStatus));

    right.appendChild(status);
    right.appendChild(btn);

    item.appendChild(left);
    item.appendChild(right);

    return item;
}


/**
 * App entry point.
 */
function main() {
    const els = getEls();

    // Defaults
    els.gender.value = "female";
    els.tone.value = "dark";
    els.theme.value = "winter";

    wireEvents(els);
    renderList(els);
}

main();
