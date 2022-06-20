import React, { useState } from "react";
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
import { User } from "../models/User";

const RegisterForm = () => {
  const navigation = useNavigation();
  const [register, setRegister] = useState(new User());

  const handleChange = (name, value) => {
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleRegister = () => {
    const newUser = register;
    console.log(`Register pressed!`);
    console.log(newUser);
    navigation.navigate("MainView");
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
