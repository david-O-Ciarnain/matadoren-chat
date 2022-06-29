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

export default SettingsScreen;
