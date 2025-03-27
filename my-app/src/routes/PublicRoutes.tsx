import { NavigationIndependentTree } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginPage from "../pages/LoginPage";

const Stack = createNativeStackNavigator();
export default function PublicRoutes() {
    return (
        <NavigationIndependentTree>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationIndependentTree>
    )
}