function hexToRgb(hex) {
    hex = hex.replace("#", "");
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
    return `${red}, ${green}, ${blue}`;
}

const paletteColor1Hex = "#a8977b";
const paletteColor2Hex = "#7f715c";
const paletteColor3Hex = "#3f4245";
const paletteColor4Hex = "#111518";

const brzGlobalColor1 = hexToRgb(paletteColor1Hex);
const brzGlobalColor2 = hexToRgb(paletteColor2Hex);
const brzGlobalColor3 = hexToRgb(paletteColor3Hex);
const brzGlobalColor4 = hexToRgb(paletteColor4Hex);
