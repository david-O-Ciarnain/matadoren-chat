import { StyleSheet } from "react-native";
import LoginScreen from "./src/views/LoginScreen";
import MainView from "./src/views/MainView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./src/views/RegisterScreen";
import ForgotPWScreen from "./src/views/ForgotPWScreen";
import ChatScreen from "./src/views/ChatScreen";
import MessageScreen from "./src/views/MessageScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const MainStack = () => {
    return (
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
          name="Messages"
          component={MessageScreen}
          options={{
            headerShown: false,
            title: "Messages",
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ route }) => ({
            // this works don't know why it gives me a red line, mabey typeScript?
            title: route.params.userName,
            headerBackTitleVisible: false,
          })}
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
    );
  };
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen name="MainStack" component={MainStack} />
        <BottomTab.Screen name="MessageScreen" component={MessageScreen} />
      </BottomTab.Navigator>
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
