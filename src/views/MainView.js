import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Chat from "../components/Chat";

const MainView = () => {
  return (
    <View>
      <Text>MainView</Text>
      <Chat />
    </View>
  );
};

export default MainView;
