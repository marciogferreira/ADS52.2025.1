import { Text, View, TextInput, Button } from "react-native";
import GlobalStyles from "../styles/GlobaStyles";

export default function LoginPage(props: any) {

    function redirecionarPagina() {
        props.navigation.navigate('Home')
    }

    return (
        <View style={{ 
                backgroundColor: 'red', 
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ color: 'white' }}>Login Inicial</Text>
            <TextInput style={GlobalStyles.textInput} />
            <TextInput style={GlobalStyles.textInput} />
            <Button title="Acessar" color="pink" onPress={() => redirecionarPagina()} />
        </View>
    )
}