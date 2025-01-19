import { config } from "@tamagui/config/v3";
import { createFont, createTamagui } from "tamagui";

export const tamaguiConfig = createTamagui({
    ...config,
    tokens: {
        ...config.tokens,
        size: {
            ...config.tokens.size,
            $3: 55,
        },
        radius: {
            ...config.tokens.radius,
            $sm: 5,
            $xl: 30,
        },
        color: {
            ...config.tokens.color,
            $primary500: "#D6ED17",
            $gray100: "#F5F5F5",
            $gray500: "#6C6C6C",
            $info500: "#3B82F6",
        },
    },
    fonts: {
        body: createFont({
            family: "Inter-Light, sans-serif",
            size: {
                2: 16,
                3: 14,
            },
        }),
    },
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
    interface TamaguiCustomConfig extends Conf {}
}
