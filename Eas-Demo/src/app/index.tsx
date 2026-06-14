import { View, Text, Button, Alert } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        Hello Abhishek 
      </Text>

      <Text style={{ marginTop: 10, fontSize: 18 }}>
        React Native Development Build Working!
      </Text>

      <Button
        title="Click Me"
        onPress={() => Alert.alert("Success", "App is working perfectly!")}
      />
    </View>
  );
}