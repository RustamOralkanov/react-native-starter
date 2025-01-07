// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withTamagui } = require("@tamagui/metro-plugin");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
    // [Web-only]: Enables CSS support in Metro.
    isCSSEnabled: true,
});

// Объединяем плагины
module.exports = withNativeWind(
    withTamagui(config, {
        components: ["tamagui"],
        config: "./tamagui.config.ts",
        outputCSS: "./tamagui-web.css",
    }),
    { input: "./global.css" }
);
