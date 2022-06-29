import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import { AxiosContext } from "../context/AxiosContext";

const DeleteUserForm = () => {
  const [username, setUsername] = useState("");
  const authContext = useContext(AuthContext);
  const { authAxios } = useContext(AxiosContext);

  const [role, setRole] = useState("USER");
  const [token, setToken] = useState(authContext.authState.accessToken);

  useEffect(() => {
    const decodedToken = jwtDecode(token);
    setRole(decodedToken.roles.toString());
  }, []);

  const removeUser = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token ? `team7 ${token}` : "",
    };

    try {
      await authAxios
        .delete(`/register/user/delete/${username}`, { headers })
        .then(() => Alert.alert(`${username} was removed successfully.`))
        .catch((err) => console.log(err));
    } catch (error) {
      Alert.alert(`Remove Failed`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remove User</Text>
      <Text>Enter username to remove (not admins):</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Username"
        textContentType="username"
      />
      <TouchableOpacity style={styles.btns} onPress={removeUser}>
        <Text style={styles.btnText}>REMOVE USER</Text>
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
    backgroundColor: "#991010",
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

export default DeleteUserForm;
