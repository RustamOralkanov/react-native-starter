const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { withTamagui } = require("@tamagui/metro-plugin");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
    // [Web-only]: Enables CSS support in Metro.
    isCSSEnabled: true,
});

// Оборачиваем конфиг в плагины
const tamaguiConfig = withTamagui(config, {
    components: ["tamagui"],
    config: "./tamagui.config.ts",
    outputCSS: "./tamagui-web.css",
});

// Добавляем Reanimated
const reanimatedConfig = wrapWithReanimatedMetroConfig(tamaguiConfig);

// Добавляем NativeWind
const finalConfig = withNativeWind(reanimatedConfig, { input: "./global.css" });

module.exports = finalConfig;
