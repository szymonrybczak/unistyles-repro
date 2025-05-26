import { Button, SafeAreaView, Text, View } from "react-native";

import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useState } from "react";
import { ScopedTheme, StyleSheet } from "react-native-unistyles";

function FirstScreen() {
  return (
    <View style={styles.firstScreen}>
      <ScopedTheme name="other">
        <Button title="Say hello" onPress={() => {}} />
        <Text style={styles.firstScreenText}>First Screen</Text>
      </ScopedTheme>
    </View>
  );
}

function SecondScreen() {
  return (
    <View style={styles.secondScreen}>
      <ScopedTheme name="light">
        <Text style={styles.secondScreenText}>Second Screen</Text>
      </ScopedTheme>
    </View>
  );
}

export default function HomeScreen() {
  const [tab, setTab] = useState("a");
  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        onValueChange={(value) => {
          setTab(value);
        }}
        values={["a", "b"]}
        selectedIndex={tab === "a" ? 0 : 1}
      />
      {tab === "a" && <FirstScreen />}
      {tab === "b" && <SecondScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  firstScreen: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  firstScreenText: {
    color: theme.colors.secondary,
  },
  secondScreen: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  secondScreenText: {
    color: theme.colors.secondary,
  },
}));
