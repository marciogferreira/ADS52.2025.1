import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomePage from "../pages/HomePage";
import ProdutosPage from "../pages/ProdutosPage";

const Drawer = createDrawerNavigator();
export default function PrivateRoutes() {
    
    return (
        <NavigationIndependentTree>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePage} options={{ headerShown: true }} />
                <Drawer.Screen name="Produto" component={ProdutosPage} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationIndependentTree>    
    )
}