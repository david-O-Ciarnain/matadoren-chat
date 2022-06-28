import { StyleSheet } from "react-native";
import LoginScreen from "./src/views/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./src/views/RegisterScreen";
import ForgotPWScreen from "./src/views/ForgotPWScreen";
import ChatScreen from "./src/views/ChatScreen";
import MessageScreen from "./src/views/MessageScreen";
import SearchScreen from "./src/views/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "./src/components/hooks/UserContext";
import { useEffect, useState } from "react";
import { User } from "./src/models/User";
import { getValueFor } from "./src/components/hooks/useSecureStore";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const [user, setUser] = useState(new User());

  // Change this variabel to false to see sign in, register and forgot pw screens.
  const isSignedIn = getValueFor("access_token") !== null || undefined || "";

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
        <BottomTab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarIcon: () => (
              <Entypo name="magnifying-glass" size={24} color="black" />
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
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{ headerShown: false }}
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
