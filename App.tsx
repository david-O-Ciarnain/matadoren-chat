import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegisterForm from "./src/components/RegisterForm";
import LoginScreen from "./src/views/LoginScreen";
import RegisterScreen from "./src/views/RegisterScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterScreen />
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
