import { FlatCard } from "@/entities/flat";
import { PropertyCard } from "@/entities/property";
import { FilterIcon } from "@/shared/icons";
import { useState } from "react";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Circle, H6, ScrollView, SizableText, View, XStack, YStack } from "tamagui";

const properties = [
    {
        label: "Квартиры",
        name: "flats",
    },
    {
        label: "Машино-места",
        name: "parkings",
    },
    {
        label: "Кладовые",
        name: "storages",
    },
    {
        label: "Коммерческие помещения",
        name: "commerces",
    },
];

const BuyPage = () => {
    const [activeProperty, setActiveProperty] = useState<string>("flats");

    return (
        <>
            <SafeAreaView className="flex-1 px-5">
                <YStack flex={1} gap={24}>
                    <YStack gap={12}>
                        <XStack justifyContent="space-between" paddingBlock={14}>
                            <H6 size={24} fontWeight={600}>
                                Недвижимость
                            </H6>
                            <Circle size={32} backgroundColor="$white1">
                                <FilterIcon />
                            </Circle>
                        </XStack>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {properties.map((property, index) => (
                                <Pressable
                                    key={index}
                                    className={"p-[12px] rounded-[5px] mr-1"}
                                    style={{ backgroundColor: property.name === activeProperty ? "white" : "" }}
                                    onPress={() => setActiveProperty(property.name)}
                                >
                                    <SizableText fontWeight={500}>{property.label}</SizableText>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </YStack>
                    <ScrollView marginBottom={-20}>
                        {activeProperty === "flats" && [...Array(20)].map((_, index) => <FlatCard key={index} />)}
                        {activeProperty === "parkings" && [...Array(20)].map((_, index) => <PropertyCard key={index} type="parking" />)}
                        {activeProperty === "storages" && [...Array(20)].map((_, index) => <PropertyCard key={index} type="storage" />)}
                    </ScrollView>
                </YStack>
            </SafeAreaView>
            <View bg={"$white1"} style={{ position: "fixed", paddingInline: 20, paddingBlock: 10, bottom: 0 }}>
                <Button fontFamily={"$body"} size={"$3"} fontSize={"$3"} borderRadius={"$sm"} backgroundColor={"$primary500"}>
                    Смотреть все помещения
                </Button>
            </View>
        </>
    );
};

export default BuyPage;
