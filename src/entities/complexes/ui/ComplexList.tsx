import { Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SizableText, XStack, YStack } from "tamagui";

export const ComplexList = () => {
    return (
        <YStack gap={12}>
            <XStack justifyContent="space-between" alignItems="center">
                <SizableText fontWeight={600} size={"$2"}>
                    Проекты
                </SizableText>
                <SizableText fontWeight={600} size={"$3"} color={"$info500"}>
                    Все
                </SizableText>
            </XStack>
            <View className="h-[150px] -ml-[6px]">
                <Carousel
                    loop
                    style={{
                        width: "100%",
                        height: 150,
                    }}
                    width={250}
                    data={[...new Array(6).keys()]}
                    onSnapToItem={(index) => console.log("current index:", index)}
                    renderItem={({ index }) => (
                        <View className="w-[250px] px-[6px]">
                            <View className="bg-gray-100 h-[150px] rounded-[10px] border-primary-500 border">
                                <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </YStack>
    );
};
