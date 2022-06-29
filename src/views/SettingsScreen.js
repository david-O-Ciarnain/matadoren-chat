import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { BASE_URL } from "@env";
import { AuthContext } from "../context/AuthContext";
import DeleteUserForm from "../components/DeleteUserForm";
import jwtDecode from "jwt-decode";

const SettingsScreen = () => {
  const [username, setUsername] = useState();
  const authContext = useContext(AuthContext);

  const [role, setRole] = useState("USER");

  useEffect(() => {
    const token = authContext.authState.accessToken;
    const decodedToken = jwtDecode(token);
    setRole(decodedToken.roles.toString());
  }, []);

  const changeUsername = (data) => {
    fetch(BASE_URL + "/update/{username}", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success! Username changed to: ", data);
        authContext.logout();
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Change your username:</Text>
      <TextInput
        style={styles.input}
        onChange={(text) => setUsername(text)}
        value={username}
        placeholder="New username"
        textContentType="username"
      />
      <TouchableOpacity
        style={styles.btns}
        onPress={() => changeUsername(username)}
      >
        <Text style={styles.btnText}>OK</Text>
      </TouchableOpacity>
      {role === "ADMIN" ? (
        <>
          <DeleteUserForm />
          <Text style={styles.role}>Your role is {role}</Text>
        </>
      ) : (
        <>
          <Text style={styles.role}>Your role is {role}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  role: {
    fontSize: 20,
  },
});

export default SettingsScreen;
