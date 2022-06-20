import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = () => {
    console.log(
      `Sign in Pressed! Email: ${credentials.email}, Password: ${credentials.password}`
    );
    navigation.navigate("MainView");
  };

  const handleRegister = () => {
    console.log("Register Pressed!");
    navigation.navigate("RegisterScreen");
  };

  const handleForgot = () => {
    console.log("Forgot password Pressed!");
    navigation.navigate("ForgotPWScreen");
  };

  const goToMessages = () => {
    navigation.navigate("BottomTabStack");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>Please sign in or register below</Text>
      <View style={styles.inputfields}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("email", text)}
          value={credentials.email}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("password", text)}
          value={credentials.password}
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
      <TouchableOpacity style={styles.btns} onPress={goToMessages}>
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
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#777",
    padding: 15,
    width: 250,
    backgroundColor: "#fff",
  },
  inputfields: {
    marginTop: 20,
    alignItems: "center",
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
