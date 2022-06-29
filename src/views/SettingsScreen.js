import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import DeleteUserForm from "../components/DeleteUserForm";
import jwtDecode from "jwt-decode";
import UpdateUserForm from "../components/UpdateUserForm";
import LogoutButton from "../components/LogoutButton";

const SettingsScreen = () => {
  const authContext = useContext(AuthContext);
  const [role, setRole] = useState("USER");

  useEffect(() => {
    const token = authContext.authState.accessToken;
    const decodedToken = jwtDecode(token);
    setRole(decodedToken.roles.toString());
  }, []);

  return (
    <>
      <View style={{ alignItems: "center" }}>
        <LogoutButton />
      </View>
      <ScrollView>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  role: {
    fontSize: 20,
  },
});

export default SettingsScreen;
