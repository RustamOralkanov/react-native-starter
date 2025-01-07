import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../../../tamagui.config";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "../../../global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Inter-Light": require("@/shared/assets/fonts/Inter-Light.otf"),
        "Inter-Thin": require("@/shared/assets/fonts/Inter-Thin.otf"),
        "Inter-Regular": require("@/shared/assets/fonts/Inter-Regular.otf"),
        "Inter-Bold": require("@/shared/assets/fonts/Inter-Bold.otf"),
        "Inter-Medium": require("@/shared/assets/fonts/Inter-Medium.otf"),
        "Inter-SemiBold": require("@/shared/assets/fonts/Inter-SemiBold.otf"),
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded) return null;

    return (
        <SafeAreaProvider>
            <TamaguiProvider config={tamaguiConfig}>
                <Stack>
                    <Stack.Screen name="index" options={{ headerShown: false, title: "Home Screen" }} />
                </Stack>
            </TamaguiProvider>
        </SafeAreaProvider>
    );
};

export default RootLayout;
