export const reformatText = (text:string) => {
    if (text.includes('&quot;')) {
        return text.replace(/&quot;/g, '"');
    } else if (text.includes('#039;')) {
        return text.replace(/#039;/g, "'");
    } else {
        return text;
    }
}