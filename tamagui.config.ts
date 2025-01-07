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
        },
    },
    fonts: {
        body: createFont({
            family: "Inter-Light, sans-serif",
            size: {
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
