import type { LanguageTextArray} from "../config/config.types.ts";

export function formatSize(value: number | number[] | undefined) {
    if (value === undefined) return '';
    if (Array.isArray(value)) {
        return value.map(v => `${v}см`).join(' / ');
    }
    return `${value}см`;
}
export function formatSet(set?: LanguageTextArray, lang: 'ru' | 'kk' = 'ru') {
    if (!set) return '';
    const arr = set[lang];
    if (!arr || arr.length === 0) return '';
    return arr.join(' / ');
}

