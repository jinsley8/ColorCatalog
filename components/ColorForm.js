import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function ColorForm({ onNewColor = (f) => f }) {
  const [inputValue, setInputValue] = useState("");
  console.log(" -> ", inputValue);
  const input = useRef();
  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.textInput}
        value={inputValue}
        onChangeText={setInputValue}
        autoCapitalize="none"
        placeholder="Enter a color..."
      />
      <Button
        title="add"
        onPress={() => {
          input.current.blur();
          onNewColor(inputValue);
          setInputValue("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
});
