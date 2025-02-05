import { View, YStack, SizableText, Separator, XStack, Image, Square } from "tamagui";
import { StyleSheet } from "react-native";
import DashedLine from "react-native-dashed-line";
import { HeartIcon, ParkingsIcon, StorageIcon } from "@/shared/icons";
import { IPropertyProps } from "../types";

export const PropertyCard = (props: IPropertyProps) => {
    return (
        <View bg={"$white1"} borderRadius={10} mb={12}>
            <YStack>
                <YStack px={16} pt={16} gap={12}>
                    <XStack justifyContent="space-between">
                        <XStack gap={5}>
                            <SizableText fontSize={12} bg={"$gray100"} px={6} py={4} borderRadius={4}>
                                000
                            </SizableText>
                            <SizableText fontSize={12} bg={"$gray100"} px={6} py={4} borderRadius={4}>
                                Aqtolqyn Grand
                            </SizableText>
                        </XStack>
                        <HeartIcon />
                    </XStack>
                    <XStack gap={12} alignItems="center">
                        <YStack gap={4} flex={1}>
                            <SizableText fontSize={24} fontWeight={600}>
                                00 000 000 ₸
                            </SizableText>
                            <SizableText fontSize={12} fontWeight={400} color={"$gray500"}>
                                Цена за м2 000 000 ₸
                            </SizableText>
                        </YStack>
                        <Square
                            bg={"#D6ED1714"}
                            size={60}
                            borderRadius={10}
                            children={props.type === "parking" ? <ParkingsIcon /> : props.type === "storage" ? <StorageIcon /> : null}
                        />
                    </XStack>
                </YStack>
                <Separator marginVertical={12} borderColor={"$gray100"} />

                <YStack justifyContent="space-between" px={16} pb={16} gap={8}>
                    <XStack justifyContent="space-between" alignItems="baseline">
                        <SizableText fontSize={14}>Площадь</SizableText>
                        <DashedLine dashLength={4} dashThickness={1} dashColor="#B8B8B8" style={styles.dashed} />
                        <SizableText fontSize={14}>000,00</SizableText>
                    </XStack>
                    <XStack justifyContent="space-between" alignItems="baseline">
                        <SizableText fontSize={14}>Блок</SizableText>
                        <DashedLine dashLength={4} dashThickness={1} dashColor="#B8B8B8" style={styles.dashed} />
                        <SizableText fontSize={14}>12</SizableText>
                    </XStack>
                </YStack>
            </YStack>
        </View>
    );
};

const styles = StyleSheet.create({
    dashed: {
        flex: 1,
        marginHorizontal: 8,
    },
});
