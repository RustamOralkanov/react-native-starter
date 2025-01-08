import { Input, styled } from "tamagui"; // or '@tamagui/core'

export const CustomInput = styled(Input, {
    borderRadius: "$sm",
    backgroundColor: "#F5F5F5",
    borderColor: "#E5E5E5",
    borderWidth: 0,
    focusVisibleStyle: {
        outlineColor: "unset",
        outlineWidth: 0,
        outlineStyle: "solid",
    },
    size: "$3",
    paddingHorizontal: 15,
    variants: {} as const,
});
