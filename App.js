import React from "react";
import {
  Alert,
  Button,
  View,
  ActivityIndicator,
  ProgressViewIOS,
} from "react-native";

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <View style={{ padding: 50 }}>
      <ProgressViewIOS progress={0.5} />
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="Click Me" onPress={onButtonPress} />
    </View>
  );
}
