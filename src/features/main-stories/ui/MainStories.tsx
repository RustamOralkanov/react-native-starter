import { useGetHomeQuery } from "@/shared/api/home";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "tamagui";
import Carousel from "react-native-reanimated-carousel";

export const MainStories = () => {
    const { data, isSuccess } = useGetHomeQuery();
    const banners = isSuccess ? data?.banners?.filter((banner) => banner.file_mobile) : [];

    return (
        <View className="h-[126px] -ml-[6px] -mr-[20px]">
            <Carousel
                loop
                style={{
                    width: "100%",
                    height: 125,
                }}
                width={124}
                data={banners}
                renderItem={({ item }) => (
                    <View className="w-[124px] px-[6px]">
                        <View className="relative rounded-[10px] border-[2px] border-primary-500 overflow-hidden">
                            <LinearGradient colors={["#00000000", "#00000080"]} style={styles.gradient} />
                            <Image
                                source={{
                                    uri: item.file_mobile,
                                    width: 124,
                                    height: 120,
                                }}
                                style={styles.image}
                            />
                            <Text className="absolute w-[104px] left-[8px] bottom-[8px] text-white font-inter-light z-[3]">{"Forem ipsum dolor sit amet"}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        width: 124,
        height: 124,
    },
    image: {
        borderRadius: 10,
        objectFit: "cover",
    },
});
