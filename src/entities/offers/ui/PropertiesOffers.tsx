import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { Image, SizableText, View, XStack } from "tamagui";

export const PropertiesOffers = () => {
    return (
        <LinearGradient colors={["#D4EB1A", "#A9BD06"]} start={[0.9, 0.9]} end={[1, 1]} style={styles.gradient}>
            <XStack alignItems="center" gap={5}>
                <SizableText size={"$3"}>Показать</SizableText>
                <SizableText style={styles.offers}>0 000</SizableText>
                <SizableText>предложении</SizableText>
            </XStack>
            <View className="top-2/4 -translate-y-2/4" style={styles.image}>
                <Image src={require("@/shared/assets/images/offers.png")} width={215} height={74} className="object-cover" />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        borderRadius: 10,
        position: "relative",
        height: 70,
        paddingLeft: 16,
        overflow: "hidden",
        alignItems: "center",
        flexDirection: "row",
    },
    image: {
        width: 215,
        position: "absolute",
        right: 0,
    },
    offers: {
        backgroundColor: "#FFFFFF80",
        paddingBlock: 4,
        paddingLeft: 8,
        paddingRight: 8,
        fontWeight: 600,
        borderRadius: 5,
    },
});
