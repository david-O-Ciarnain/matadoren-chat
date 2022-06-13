import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import Header from "./Header";

const LoginForm = () => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Header />
      <Text>
        Please sign in <Text style={styles.linethrough}>or register below</Text>
      </Text>
      <View style={styles.inputfields}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
        />
      </View>
      <Button title="Login" style={styles.loginbutton}>
        <Text>Login</Text>
      </Button>
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
  },
  loginbutton: {
    width: 200,
  },
  inputfields: {
    marginVertical: 20,
  },
  linethrough: {
    textDecorationLine: "line-through",
  },
});

export default LoginForm;
