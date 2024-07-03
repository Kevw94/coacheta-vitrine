export function getUrl(file: string): string {
    return new URL(`/src/assets/imgs/${file}`, import.meta.url).href;
}