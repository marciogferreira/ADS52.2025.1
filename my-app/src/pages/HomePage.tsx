import { Button, Text, View } from "react-native";

export default function HomePage(props) {

    return (
        <View>
            <Text>Página Inicial</Text>
            <Button 
                title="Ver Produtos" 
                onPress={() => props.navigation.navigate('Produto')} 
            />
        </View>
    )
}