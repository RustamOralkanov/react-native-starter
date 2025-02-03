import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image } from "tamagui";

const WelcomePage = () => {
    const router = useRouter();

    const handleLanguageSelect = (lang: string) => {
        console.log(lang);
        router.push({ pathname: "main-page", params: { lang } });
    };

    return (
        <SafeAreaView className="flex-1 bg-primary-500 justify-between items-center px-5 py-3">
            <View className="mt-[123px]">
                <Image src={require("@/shared/assets/images/logo.png")} width={100} height={100} />
            </View>
            <View className="flex-col gap-[24px] w-full">
                <Text className="font-inter-light text-center">Тілді таңдаңыз / Выберите язык</Text>
                <View className="flex-col gap-3">
                    <Button fontFamily={"$body"} size={"$3"} fontSize={"$3"} borderRadius={"$sm"} onPress={() => handleLanguageSelect("kk")}>
                        Қазақша
                    </Button>
                    <Button fontFamily={"$body"} size={"$3"} fontSize={"$3"} borderRadius={"$sm"} onPress={() => handleLanguageSelect("ru")}>
                        Русский
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default WelcomePage;
