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
import UpdateUserForm from "../components/UpdateUserForm";

const SettingsScreen = () => {

  return (
    <View style={styles.container}>
     <UpdateUserForm></UpdateUserForm>
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

export default SettingsScreen;
