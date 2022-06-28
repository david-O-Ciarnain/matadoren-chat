import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "./Header";
import { User } from "../models/User";
import { BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";

const RegisterForm = () => {
  const [register, setRegister] = useState(new User());
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleRegister = () => {
    fetch(BASE_URL + "/register/user/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: register.firstname,
        lastName: register.lastname,
        username: register.username,
        email: register.email,
        password: register.password,
      }),
    })
      .then((res) => {
        let statusCode = res.status,
          success = res.ok;
        res.json().then((res) => {
          if (!success) {
            Alert.alert(
              `Registration Failed`,
              `New user could not be registered, ${res.message}`
            );
            return;
          }
          Alert.alert(
            `Registration Succeded`,
            `User '${res.username}'\nwas registered successfully!\nPlease sign in for access to Matadoren.`
          );
          navigation.navigate("LoginScreen");
        });
      })
      .catch((err) => Alert.alert(`Error`, `Something went wrong, ${err}`));
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>Fill in the form below to become a Matador user</Text>
      <View style={styles.inputfields}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("email", text)}
          value={register.email}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("password", text)}
          value={register.password}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("username", text)}
          value={register.username}
          placeholder="Username"
          textContentType="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("firstname", text)}
          value={register.firstname}
          placeholder="Firstname"
          textContentType="name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("lastname", text)}
          value={register.lastname}
          placeholder="Lastname"
          textContentType="familyName"
        />
      </View>
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
    paddingBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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
});

export default RegisterForm;
