import { Button, Text, View } from "react-native";

export default function ProdutosPage(props) {
    return (
        <View>
            <Text>ProdutosPage</Text>
            <Button
                title="Voltar" 
                onPress={() => props.navigation.goBack()} 
            />
        </View>
    )
}