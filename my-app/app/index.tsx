import 'react-native-gesture-handler';
import MainRoutes from "@/src/routes/MainRoutes";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <MainRoutes />
    </View>
  );
}