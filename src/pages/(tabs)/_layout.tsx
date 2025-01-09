import { BuildingIcon, ChairIcon, HomeIcon, MenuIcon, MessagesIcon } from "@/shared/icons";
import { Tabs } from "expo-router";

const MainLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#1D1D1D",
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: "Inter-Regular",
                    fontWeight: 300,
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    boxShadow: "0px 0px 50px -25px #1D1D1D4D",
                },
            }}
        >
            <Tabs.Screen
                name="main-page"
                options={{
                    title: "Главная",
                    tabBarIcon: () => <HomeIcon />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="buy-page"
                options={{
                    title: "Купить",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <ChairIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="complexes-page"
                options={{
                    title: "Проекты",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <BuildingIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="messages-page"
                options={{
                    title: "Сообщения",
                    headerShown: false,
                    tabBarIcon: () => <MessagesIcon />,
                }}
            />
            <Tabs.Screen
                name="menu-page"
                options={{
                    title: "Меню",
                    headerShown: false,
                    tabBarIcon: () => <MenuIcon />,
                }}
            />
        </Tabs>
    );
};

export default MainLayout;
