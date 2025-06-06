import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

function FirstScreen() {
  return (
    <ScrollView style={{ paddingRight: 16 }}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default function HomeScreen() {
  return <FirstScreen />;
}
