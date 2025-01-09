import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

interface SkeletonProps {
    width?: number | string;
    height?: number;
    borderRadius?: number;
    style?: object;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = 20, borderRadius = 4, style = {} }) => {
    const shimmerAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const loop = Animated.loop(
            Animated.sequence([
                Animated.timing(shimmerAnimation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(shimmerAnimation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        loop.start();
        return () => loop.stop();
    }, [shimmerAnimation]);

    const shimmerOpacity = shimmerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.2, 1],
    });

    return (
        <Animated.View
            style={[
                styles.skeleton,
                {
                    width,
                    height,
                    borderRadius,
                    opacity: shimmerOpacity,
                },
                style,
            ]}
        />
    );
};

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: "#e0e0e0",
        overflow: "hidden",
    },
});
