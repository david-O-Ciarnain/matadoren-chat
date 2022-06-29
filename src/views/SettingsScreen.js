import { Text, View, StyleSheet } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import DeleteUserForm from "../components/DeleteUserForm";
import jwtDecode from "jwt-decode";
import UpdateUserForm from "../components/UpdateUserForm";

const SettingsScreen = () => {
  const authContext = useContext(AuthContext);
  const [role, setRole] = useState("USER");

  useEffect(() => {
    const token = authContext.authState.accessToken;
    const decodedToken = jwtDecode(token);
    setRole(decodedToken.roles.toString());
  }, []);

  return (
    <View style={styles.container}>
      <UpdateUserForm />
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
