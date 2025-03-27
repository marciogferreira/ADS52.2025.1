import { Text } from "react-native";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function MainRoutes() {

    const isLogged = true;

    if(isLogged) {
        return <PrivateRoutes />
    }

    return <PublicRoutes />
}