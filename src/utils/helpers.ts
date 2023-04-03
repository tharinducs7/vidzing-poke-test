export const padWithLeadingZeros: (num: number, totalLength: number) => string = (num, totalLength) => {
    return String(num).padStart(totalLength, '0');
};