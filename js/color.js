function hexToRgb(hex) {
    hex = hex.replace("#", "");
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
    return `${red}, ${green}, ${blue}`;
}

const paletteColor1Hex = getComputedStyle(document.documentElement).getPropertyValue('--paletteColor1').trim();
const paletteColor2Hex = getComputedStyle(document.documentElement).getPropertyValue('--paletteColor2').trim();
const paletteColor3Hex = getComputedStyle(document.documentElement).getPropertyValue('--paletteColor3').trim();
const paletteColor4Hex = getComputedStyle(document.documentElement).getPropertyValue('--paletteColor4').trim();

const brzGlobalColor1 = hexToRgb(paletteColor1Hex);
const brzGlobalColor2 = hexToRgb(paletteColor2Hex);
const brzGlobalColor3 = hexToRgb(paletteColor3Hex);
const brzGlobalColor4 = hexToRgb(paletteColor4Hex);

document.documentElement.style.setProperty('--global-color1', brzGlobalColor1);
document.documentElement.style.setProperty('--global-color2', brzGlobalColor2);
document.documentElement.style.setProperty('--global-color3', brzGlobalColor3);
document.documentElement.style.setProperty('--global-color4', brzGlobalColor4);
