import { StyleSheet } from "react-native";
import LoginScreen from "./src/views/LoginScreen";
import MainView from "./src/views/MainView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./src/views/RegisterScreen";
import ForgotPWScreen from "./src/views/ForgotPWScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainView"
          component={MainView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: "Register at Matadoren" }}
        />
        <Stack.Screen
          name="ForgotPWScreen"
          component={ForgotPWScreen}
          options={{ title: "Forgot your password?" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
