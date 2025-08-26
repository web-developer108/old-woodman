export function formatSize(value: number | number[] | undefined) {
    if (value === undefined) return '';
    if (Array.isArray(value)) {
        return value.map(v => `${v}см`).join(' / ');
    }
    return `${value}см`;
}
