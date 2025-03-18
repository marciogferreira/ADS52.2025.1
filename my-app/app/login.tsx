import { Link } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function ComponenteExemplo() {
    return (
        <Text>Teste Componente</Text>
    )
}

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={{ width: 100, height: 100 }}  
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <View style={{ marginTop: 10 }}></View>
                <ComponenteExemplo />
                <TextInput style={styles.input} placeholder="Login" />
                <TextInput style={styles.input} placeholder="Senha"/>
                <Button color={"blue"} title="Acessar"/>
                <Text>Esquece sua senha?</Text>
                <Link href={"/ajuda"}>Outra Página</Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008000'
    },
    card: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 10,
        width: '98%'
    }
})