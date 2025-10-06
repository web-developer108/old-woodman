import type { LanguageTextArray, ProductItem } from "../config/config.types.ts";

export function formatData(value?: number | string | (number | string)[]): string {
    if (!value) return '';
    const values = Array.isArray(value) ? value : [value];

    const formatted = values
        .filter(Boolean)
        .map((v) => `${v}см`);

    return formatted.join(' / ');
}


export function formatSet(
    set: { ru: string[]; kk: string[] },
    lang: 'ru' | 'kk'
): string {
    if (!set || !set[lang]) return '';
    const values = set[lang].filter((v) => v.trim() !== '');
    return values.join(' / ');
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