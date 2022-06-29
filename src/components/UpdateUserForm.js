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
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");

  const authContext = useContext(AuthContext);
  const { authAxios } = useContext(AxiosContext);
  const [token, setToken] = useState(authContext.authState.accessToken);

  useEffect(() => {
    const decodedToken = jwtDecode(token);
    setUsername(decodedToken.sub.toString());
  }, []);

  const changeUsername = async () => {
    const body = {
      firstName: newFirstname,
      lastName: newLastname,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: token ? `team7 ${token}` : "",
    };
    await authAxios.put(`/register/user/update/${username}`, body, { headers });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Userdetails</Text>
      <Text>Username: {username}</Text>
      <Text>Change your firstname:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNewFirstname(text)}
        value={newFirstname}
        placeholder="New firstname"
        textContentType="name"
      />
      <Text>Change your lastname:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNewLastname(text)}
        value={newLastname}
        placeholder="New lastname"
        textContentType="familyName"
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
