import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import { AxiosContext } from "../context/AxiosContext";

const UpdateUserForm = () => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const authContext = useContext(AuthContext);
  const { authAxios } = useContext(AxiosContext);
  const [token, setToken] = useState(authContext.authState.accessToken);

  useEffect(() => {
    console.log(username);
    console.log(newUsername);
    console.log(token);
    const decodedToken = jwtDecode(token);
    setUsername(decodedToken.sub.toString());
  }, []);

  const changeUsername = async () => {
    const body = {
      username: newUsername,
      firstName: "user",
      lastName: "user",
      password: "321",
      email: "demo951@live.se",
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: token ? `team7 ${token}` : "",
    };
    await authAxios.put(`/register/user/update/${username}`, body, { headers });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Username</Text>
      <Text>Current username: {username}</Text>
      <Text>Change your username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNewUsername(text)}
        value={newUsername}
        placeholder="New username"
        textContentType="username"
      />
      <TouchableOpacity style={styles.btns} onPress={changeUsername}>
        <Text style={styles.btnText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: "100%",
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
    textAlign: "center",
  },
  btns: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#2D232E",
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
  },
  title: {
    fontSize: 36,
    marginBottom: 15,
  },
});

export default UpdateUserForm;
