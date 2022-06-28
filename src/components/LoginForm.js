import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { AxiosContext } from "../context/AxiosContext";
import { save } from "./hooks/useSecureStore";

const LoginForm = () => {
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);
  const { publicAxios } = useContext(AxiosContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append("username", credentials.username);
    formData.append("password", credentials.password);

    try {
      const response = await publicAxios.post("/login", credentials, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { accessToken, refreshToken } = response.data;
      authContext.setAuthState({
        accessToken,
        refreshToken,
        authenticated: true,
      });

      await save("token", JSON.stringify({ accessToken, refreshToken }));
    } catch (error) {
      Alert.alert("Login Failed", error.response.data.message);
    }
  };

  const handleRegister = () => {
    console.log("Register Pressed!");
    navigation.navigate("RegisterScreen");
  };

  const handleForgot = () => {
    console.log("Forgot password Pressed!");
    navigation.navigate("ForgotPWScreen");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>Please sign in or register below</Text>
      <View style={styles.inputfields}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("username", text)}
          value={credentials.username}
          placeholder="Username"
          textContentType="username"
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
      <TouchableOpacity
        style={styles.btns}
        onPress={() => handleLogin(credentials)}
      >
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
