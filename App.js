import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>red</Text>
      <Text style={[styles.text, styles.selectedText]}>green</Text>
      <Text style={styles.text}>blue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 40,
    backgroundColor: "#DDD",
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5,
  },
  selectedText: {
    alignSelf: "flex-end",
    color: "yellow",
    backgroundColor: "red",
  },
});
