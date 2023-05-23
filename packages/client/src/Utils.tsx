export function truncateMiddle(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }

    const ellipsis = '...';
    const truncatedLength = maxLength - ellipsis.length;
    const startLength = Math.ceil(truncatedLength / 2);
    const endLength = Math.floor(truncatedLength / 2);

    const truncatedText =
        text.substr(0, startLength) + ellipsis + text.substr(-endLength);

    return truncatedText;
}