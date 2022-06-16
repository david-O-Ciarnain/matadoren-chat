import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log(`Sign in Pressed! Email: ${email}, Password: ${password}`);
    navigation.navigate("MainView");
  };

  const handleRegister = () => {
    console.log("Register Pressed!");
  };

  const handleForgot = () => {
    console.log("Forgot password Pressed!");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>
        Please sign in <Text style={styles.linethrough}>or register below</Text>
      </Text>
      <View style={styles.inputfields}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <TouchableOpacity>
          <Text style={styles.forgotText} onPress={handleForgot}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btns} onPress={handleLogin}>
        <Text style={styles.btnText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns} onPress={handleRegister}>
        <Text style={styles.btnText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#777",
    padding: 10,
    width: 200,
    backgroundColor: "#fff",
  },
  inputfields: {
    marginTop: 20,
    alignItems: "center",
  },
  linethrough: {
    textDecorationLine: "line-through",
  },
  btns: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#2D232E",
  },
  btnText: {
    color: "#fff",
  },
  forgotText: {
    fontWeight: "600",
  },
});

export default LoginForm;
