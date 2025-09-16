import type { LanguageTextArray, ProductItem } from "../config/config.types.ts";

export function formatData(value: number | number[] | undefined) {
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

const defaultOtherMaterials: LanguageTextArray = {
    ru: ['бука', 'ясеня', 'дуба'],
    kk: ['шегіршін, қайың, кемен']
};


export function formatMaterialsText(product: ProductItem, lang: 'ru' | 'kk') {
    const mainMaterial = product.material?.[lang] || (lang === 'ru' ? 'сосны' : 'қарағай');

    const others = [...defaultOtherMaterials[lang]];

    const pine = lang === 'ru' ? 'сосны' : 'қарағай';

    const index = others.indexOf(mainMaterial);
    if (index >= 0) {
        others.splice(index, 1);
    }
    if (mainMaterial !== pine && !others.includes(pine)) {
        others.push(pine);
    }
    const othersText = others.length > 0 ? lang === 'ru' ? `, возможно производство из ${others.join(', ')} или других пород` : `, сондай-ақ ${others.join(', ')} немесе басқа ағаш түрлерінен жасауға болады` : '';

    return lang === 'ru' ? `Изделие на фото изготовлено из натурального массива ${mainMaterial}${othersText}.` : `Суреттегі бұйым табиғи ${mainMaterial}${othersText} массивінен жасалған,`;
}