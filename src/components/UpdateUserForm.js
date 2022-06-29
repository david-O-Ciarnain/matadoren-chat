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
      fetch(`${BASE_URL}/update/${user.username}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: {JSON.stringif},
      })
        .then((data) => JSON.parse(data))
        .then((data) => {
          Alert.alert(`Success! Username changed to: ${data.message}`);
          // authContext.logout();
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
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
      <TouchableOpacity
        style={styles.btns}
        onPress={() => changeUsername(user, username)}
      >
        <Text style={styles.btnText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateUserForm;
