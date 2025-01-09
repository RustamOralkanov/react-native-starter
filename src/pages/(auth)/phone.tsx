import { ArrowLeftIcon } from "@/shared/icons";
import { CustomInput } from "@/shared/variants";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Form, YStack } from "tamagui";

const PhoneAuth = () => {
    const router = useRouter();

    const handleSubmit = () => {
        router.push({ pathname: "check-phone" });
    };

    return (
        <SafeAreaView className="flex-1 bg-white px-5 gap-10">
            <Pressable className="flex-row gap-[10px] items-center">
                <ArrowLeftIcon />
                <Text className="font-inter-medium text-[16px]">Авторизация</Text>
            </Pressable>
            <Form flex={1} onSubmit={() => handleSubmit()}>
                <YStack flex={1} justifyContent="space-between">
                    <View className="flex-col gap-6">
                        <Text className="font-inter-bold text-[32px]">Введите ваш номер телефона</Text>
                        <CustomInput placeholder="+7 (___) ___-__-__" keyboardType="numeric" />
                    </View>
                    <View className="flex-col gap-6">
                        <Form.Trigger asChild>
                            <Button fontFamily={"$body"} size="$3" fontSize="$3" borderRadius="$sm" backgroundColor={"$primary500"}>
                                Продолжить
                            </Button>
                        </Form.Trigger>
                        <Text className="text-center font-inter-light text-[10px] text-gray-400">
                            Используя приложение, вы подтверждаете своё согласие с нашей политикой конфиденциальности
                        </Text>
                    </View>
                </YStack>
            </Form>
        </SafeAreaView>
    );
};

export default PhoneAuth;
