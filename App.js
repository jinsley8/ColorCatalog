import React from "react";
import {
  Alert,
  Button,
  View,
  ActivityIndicator,
  ProgressViewIOS,
  ProgressBarAndroid,
  Dimensions,
  Text,
  Platform,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <View style={{ padding: 50 }}>
      {Platform.OS === "ios" && <ProgressViewIOS progress={0.5} />}
      {Platform.OS === "android" && (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="blue"
          progress={0.3}
        />
      )}
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="Click Me" onPress={onButtonPress} />
      <Text>OS: {Platform.OS}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
    </View>
  );
}
