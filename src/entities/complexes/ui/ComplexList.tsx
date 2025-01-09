import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image, SizableText, Spinner, XStack, YStack } from "tamagui";
import { useGetComplexesQuery } from "../api";
import { Skeleton } from "@/shared/variants";

export const ComplexList = () => {
    const { data, isLoading, isFetching, isSuccess } = useGetComplexesQuery();

    if (!isSuccess || isLoading || isFetching) return <Skeleton height={186} />;

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
            <View className="h-[150px] -ml-[6px] -mr-[20px] justify-center">
                {isLoading && isFetching ? (
                    <Spinner size="large" color="$primary500" />
                ) : (
                    <Carousel
                        loop
                        style={{
                            width: "100%",
                            height: 150,
                        }}
                        width={250}
                        data={isSuccess ? data : []}
                        renderItem={({ item }) => (
                            <View className="w-[250px] px-[6px]">
                                <View className="relative rounded-[10px] overflow-hidden">
                                    <LinearGradient colors={["#00000000", "#00000080"]} style={styles.gradient} />
                                    <Image
                                        source={{
                                            uri: item.images[0].image,
                                            width: 238,
                                            height: 150,
                                        }}
                                        style={styles.image}
                                    />
                                    <Text className="absolute w-[206px] left-[16px] bottom-[12px] text-white font-inter-semibold z-[3]">{item.title}</Text>
                                </View>
                            </View>
                        )}
                    />
                )}
            </View>
        </YStack>
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        width: 238,
        height: 150,
    },
    image: {
        borderRadius: 10,
    },
});
