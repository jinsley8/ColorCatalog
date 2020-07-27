import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setBackgroundColor("yellow")}
        underlyingColor="orange"
      >
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor: "yellow" }]} />
          <Text style={styles.buttonText}>Yellow</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
