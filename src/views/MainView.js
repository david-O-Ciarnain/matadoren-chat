import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
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
