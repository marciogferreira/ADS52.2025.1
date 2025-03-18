import { Text, View, StyleSheet, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {

  function chamarBtn() {
    alert("Ola")
  }

  return (
    <View style={styles.container}>
      <Text>Olá, Admin</Text>

      <ScrollView horizontal style={styles.cards}>
        <View style={styles.card}>
          <Text>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
      </ScrollView>

      <ScrollView horizontal style={styles.cards}>
        <View style={styles.card}>
          <Text>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
      </ScrollView>

      <Button 
        title="Acessar"
        color={"red"}
        onPress={chamarBtn}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 10
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    height: 200
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})