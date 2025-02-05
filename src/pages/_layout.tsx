import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../../tamagui.config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import "../../reanimatedConfig";

import "../../global.css";

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
            <Provider store={store}>
                <TamaguiProvider config={tamaguiConfig}>
                    <Stack>
                        <Stack.Screen name="index" options={{ headerShown: false }} />
                        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    </Stack>
                </TamaguiProvider>
            </Provider>
        </SafeAreaProvider>
    );
};

export default RootLayout;
