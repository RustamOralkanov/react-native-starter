import { View, YStack, SizableText, Separator, XStack, Image } from "tamagui";

export const FlatCard = () => {
    return (
        <View bg={"$white1"} borderRadius={10} mb={12}>
            <YStack>
                <YStack px={16} pt={16} gap={12}>
                    <XStack gap={5}>
                        <SizableText fontSize={12} bg={"$gray100"} px={6} py={4} borderRadius={4}>
                            115
                        </SizableText>
                        <SizableText fontSize={12} bg={"$gray100"} px={6} py={4} borderRadius={4}>
                            Aqtolqyn Grand
                        </SizableText>
                    </XStack>
                    <XStack gap={12} alignItems="center">
                        <YStack gap={4} flex={1}>
                            <SizableText fontSize={16} fontWeight={500}>
                                3-комнатная, 104,5 м2
                            </SizableText>
                            <SizableText fontSize={16} fontWeight={500} color={"$gray500"}>
                                000 000 000 ₸
                            </SizableText>
                            <SizableText fontSize={12} color={"$gray500"}>
                                В рассрочку 000 000 ₸
                            </SizableText>
                        </YStack>
                        <Image
                            source={{
                                uri: "https://api.ab-capital.kz/storage/plans/669a92b915981.png",
                                width: 78,
                                height: 78,
                            }}
                            style={{ objectFit: "contain" }}
                        />
                    </XStack>
                </YStack>

                <Separator marginVertical={12} borderColor={"$gray100"} />
                <View px={16} pb={16}></View>
            </YStack>
        </View>
    );
};
