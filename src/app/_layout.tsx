import { Text, View } from "react-native";
import React from "react";
import "../../global.css";

const RootLayout = () => {
    return (
        <View className="flex flex-row flex-1 bg-black">
            <Text className="text-3xl">RootLayout</Text>
            <Text className="text-3xl">RootLayout</Text>
            <Text className="text-3xl">RootLayout</Text>
        </View>
    );
};

export default RootLayout;
