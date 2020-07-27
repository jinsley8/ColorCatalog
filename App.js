import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

import picBiscuit from "./assets/biscuit.jpg";
import picJungle from "./assets/jungle.jpg";

export default function App() {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={picBiscuit} />
      <Image style={styles.image} source={picJungle} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    borderRadius: 50,
    margin: 10,
    width: Dimensions.get("window").width - 10,
  },
});
