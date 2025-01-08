import { Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export const MainStories = () => {
    return (
        <View className="h-[124px] -ml-[6px]">
            <Carousel
                loop
                style={{
                    width: "100%",
                    height: 124,
                }}
                width={130}
                data={[...new Array(6).keys()]}
                onSnapToItem={(index) => console.log("current index:", index)}
                renderItem={({ index }) => (
                    <View className="w-[130px] px-[6px]">
                        <View className="bg-gray-100 h-[124px] rounded-[10px] border-primary-500 border">
                            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};
