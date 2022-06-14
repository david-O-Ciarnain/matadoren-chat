import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import MainView from "../views/MainView";
import Header from "./Header";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log(username, password);
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
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          textContentType="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <View style={styles.btngroup}>
        <Button title="Sign in" style={styles.button} onPress={handleLogin} />
        <Button title="Register" style={styles.button} disabled={true} />
      </View>
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
    padding: 10,
    width: 200,
    backgroundColor: "#fff",
  },
  inputfields: {
    marginVertical: 20,
  },
  linethrough: {
    textDecorationLine: "line-through",
  },
  btngroup: {
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    width: 200,
  },
});

export default LoginForm;
