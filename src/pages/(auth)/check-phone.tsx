import { ArrowLeftIcon } from "@/shared/icons";
import { CustomInput } from "@/shared/variants";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Form, XStack, YStack } from "tamagui";

const CheckPhone = () => {
    return (
        <SafeAreaView className="flex-1 bg-white px-5 gap-10">
            <Pressable onPress={() => console.log("onPress")} className="flex-row gap-[10px] items-center">
                <ArrowLeftIcon />
                <Text className="font-inter-medium text-[16px]">Авторизация</Text>
            </Pressable>
            <Form flex={1}>
                <YStack flex={1} justifyContent="space-between">
                    <YStack gap={24}>
                        <YStack gap={12}>
                            <Text className="font-inter-bold text-[32px]">Потвердите номер телефона</Text>
                            <Text className="font-inter-light text-[14px]">Код отправлен на номер +7 (747) 271-40-92</Text>
                            <Text className="font-inter-light text-[14px] text-info-500">Изменить номер</Text>
                        </YStack>
                        <YStack gap={12}>
                            <CustomInput value="+7 (747) 271-40-92" disabled />
                            <XStack gap={12} width={"100%"}>
                                <CustomInput flex={1} keyboardType="numeric" />
                                <CustomInput flex={1} keyboardType="numeric" />
                                <CustomInput flex={1} keyboardType="numeric" />
                                <CustomInput flex={1} keyboardType="numeric" />
                            </XStack>
                        </YStack>
                    </YStack>
                    <Form.Trigger asChild>
                        <Button fontFamily={"$body"} size="$3" fontSize="$3" borderRadius="$sm" backgroundColor={"$primary500"}>
                            Продолжить
                        </Button>
                    </Form.Trigger>
                </YStack>
            </Form>
        </SafeAreaView>
    );
};

export default CheckPhone;
