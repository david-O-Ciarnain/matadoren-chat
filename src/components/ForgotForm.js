import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

const ForgotForm = () => {
  const [email, setEmail] = React.useState("");
  const navigation = useNavigation();

  const handleForgot = () => {
    console.log(`Forgot pressed! ${email}`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.paragraph}>
        Fill in your email adress below and we will send a new password to you.
      </Text>
      <View style={styles.inputfields}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          textContentType="emailAddress"
        />
      </View>
      <TouchableOpacity style={styles.btns} onPress={handleForgot}>
        <Text style={styles.btnText}>SEND LINK</Text>
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
  paragraph: {
    width: "80%",
    textAlign: "center",
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

export default ForgotForm;
