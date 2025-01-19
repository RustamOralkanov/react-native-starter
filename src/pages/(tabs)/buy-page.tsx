import { ComplexList } from "@/entities/complexes";
import { FlatCard } from "@/entities/flat";
import { PropertiesOffers } from "@/entities/offers";
import { MainStories } from "@/features/main-stories";
import { ABIcon, ChevronRightIcon, FilterIcon } from "@/shared/icons";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle, H6, ScrollView, SizableText, XStack, YStack } from "tamagui";

const properties = [
    {
        label: "Квартиры",
    },
    {
        label: "Машино-места",
    },
    {
        label: "Кладовые",
    },
    {
        label: "Коммерческие помещения",
    },
];

const BuyPage = () => {
    return (
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
                            <Pressable key={index} className="p-[12px] bg-white rounded-[5px] mr-1">
                                <SizableText fontWeight={500}>{property.label}</SizableText>
                            </Pressable>
                        ))}
                    </ScrollView>
                </YStack>
                <ScrollView>
                    {[...Array(20)].map((_, index) => (
                        <FlatCard key={index} />
                    ))}
                </ScrollView>
            </YStack>
        </SafeAreaView>
    );
};

export default BuyPage;
