import type { TFunction } from 'i18next';

export const getDescriptionLines = (prefix: string, t: TFunction): string[] => {
  const lines: string[] = [];
  let index = 1;

  while (true) {
    const key = `${prefix}.description-${index}`;
    const translated = t(key);
    if (translated === key) break;
    lines.push(translated);
    index++;
  }

  return lines;
};

export const getFurnitureDescriptionLines = (id: string, t: TFunction): string[] => {
  const lines: string[] = [];
  let index = 1;
  while (true) {
    const key = `description-${id}-${index}`;
    const translation = t(key);
    if (translation === key) break; // строка не найдена
    lines.push(translation);
    index++;
  }
  return lines;
};
