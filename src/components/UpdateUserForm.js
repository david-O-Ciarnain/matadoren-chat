import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { BASE_URL } from "@env";
import { AuthContext } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import { User } from "../models/User";
import axios from "axios";

const UpdateUserForm = () => {
  const [username, setUsername] = useState("");
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState(User);

  useEffect(() => {
    const token = authContext.authState.accessToken;
    const decodedToken = jwtDecode(token);
    setUser(decodedToken.sub.toString());
  }, []);

  //   const getCurrentUsername = () => {
  //     fetch(BASE_URL + "/get")
  //       .then((res) => res.stringify)
  //       .then((res) => {
  //         setCurrentUsername(res);
  //         console.log("Username retrieved", res);
  //       })
  //       .catch((err) => console.log("Something went wrong ", err));
  //   };

  const changeUsername = () => {
    const body = { username: { username } };
    const headers = {};
    axios.put(`${BASE_URL}/update/${user.username}`, body, headers);
  };

  return (
    <View>
      <Text>Current username: {user}</Text>
      <Text>Change your username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="New username"
        textContentType="username"
      />
      <TouchableOpacity style={styles.btns} onPress={() => changeUsername()}>
        <Text style={styles.btnText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
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

export default UpdateUserForm;
