import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/views/LoginScreen";
import MainView from "./src/views/MainView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}} />
        <Stack.Screen name="MainView" component={MainView} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{
  /* <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" hidden={true} />
    </View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
