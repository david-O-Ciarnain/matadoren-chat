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

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log(
      `Register pressed! ${email}, ${password}, ${username}, ${firstname}, ${lastname}`
    );
    navigation.navigate("MainView");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>Fill in the form below to become a Matador user</Text>
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
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          textContentType="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setFirstname}
          value={firstname}
          placeholder="Firstname"
          textContentType="name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setLastname}
          value={lastname}
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
  },
  input: {
    height: 40,
    margin: 6,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#777",
    padding: 10,
    width: 300,
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
