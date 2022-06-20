import { StyleSheet } from "react-native";
import LoginScreen from "./src/views/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./src/views/RegisterScreen";
import ForgotPWScreen from "./src/views/ForgotPWScreen";
import ChatScreen from "./src/views/ChatScreen";
import MessageScreen from "./src/views/MessageScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const isSignedIn = true;

  const BottomTabStack = () => {
    return (
      <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="message-bulleted"
                size={24}
                color="black"
              />
            ),
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="BottomTabStack"
              component={BottomTabStack}
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
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
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
          </>
        )}
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
