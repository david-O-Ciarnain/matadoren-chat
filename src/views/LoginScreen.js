import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/loginscreen2.jpg")}
          resizeMode="cover"
          style={styles.backgroundimage}
        >
          <LoginForm></LoginForm>
          <StatusBar style="auto" hidden={true} />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundimage: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default LoginScreen;
