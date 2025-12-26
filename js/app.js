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

    const prompt = BASE_TEMPLATE
        .replace("[Zodiac Sign]", zodiacSign)
        .replace("[gender_representation]", genderRep)
        .replace("[theme_clothes]", themeObj.clothes)
        .replace("[theme_background]", themeObj.background)
        .replace("[zodiac_in_background]", zodiacObj.bgFocus)
        .replace("[tone_atmosphere]", toneObj.atmosphere)
        .replace("[tone_expression]", toneObj.expression)
        .replace("[tone_lighting]", toneObj.lighting)
        .replace("[theme_elements]", themeObj.elements)
        .replace("[zodiac_iconography]", zodiacObj.iconography);

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
