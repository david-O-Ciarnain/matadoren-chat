import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import RegisterForm from "../components/RegisterForm";

const RegisterScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/loginscreen2.jpg")}
          resizeMode="cover"
          style={styles.backgroundimage}
        >
          <RegisterForm></RegisterForm>
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

export default RegisterScreen;
