import { ComplexList } from "@/entities/complexes";
import { MainStories } from "@/features/main-stories";
import { ABIcon, ChevronRightIcon } from "@/shared/icons";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle, H6, SizableText, XStack, YStack } from "tamagui";

const MainPage = () => {
    return (
        <SafeAreaView className="flex-1 px-5 bg-white">
            <YStack flex={1} gap={12}>
                <XStack alignItems="center" justifyContent="space-between" paddingBlock={14}>
                    <Pressable>
                        <XStack alignItems="center" gap={10}>
                            <H6 size={24} fontWeight={600}>
                                Cameron
                            </H6>
                            <Circle size={32} backgroundColor="$gray100">
                                <ChevronRightIcon />
                            </Circle>
                        </XStack>
                    </Pressable>
                    <XStack alignItems="center" gap={6} bg={"$primary500"} paddingBlock={7} paddingHorizontal={12} borderRadius={"$xl"}>
                        <ABIcon />
                        <SizableText fontWeight={600}>999 999 999 ₸</SizableText>
                    </XStack>
                </XStack>
                <YStack gap={24}>
                    <MainStories />
                    <ComplexList />
                    <SizableText>sdfsdf</SizableText>
                </YStack>
            </YStack>
        </SafeAreaView>
    );
};

export default MainPage;
