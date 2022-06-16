import { StyleSheet } from "react-native";
import LoginScreen from "./src/views/LoginScreen";
import MainView from "./src/views/MainView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./src/views/RegisterScreen";
import ForgotPWScreen from "./src/views/ForgotPWScreen";
import { BlurView } from "expo-blur";

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
          options={{
            title: "Register at Matadoren",
            headerTransparent: true,
            headerTintColor: "#eee",
            headerStyle: { backgroundColor: "rgba(0,0,0,0.55)" },
          }}
        />
        <Stack.Screen
          name="ForgotPWScreen"
          component={ForgotPWScreen}
          options={{
            title: "Forgot your password?",
            headerTransparent: true,
            headerTintColor: "#eee",
            headerStyle: { backgroundColor: "rgba(0,0,0,0.55)" },
          }}
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
