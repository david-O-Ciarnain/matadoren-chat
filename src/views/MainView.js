import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const MainView = () => {
  return (
    <View>
      <Text>MainView</Text>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
};

export default MainView;
