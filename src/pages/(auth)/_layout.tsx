import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="phone"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="check-phone"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};

export default AuthLayout;
