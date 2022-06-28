import { BASE_URL } from "@env";
import { Alert } from "react-native";
import { save } from "../hooks/useSecureStore";

export const registerUser = (user) => {
  fetch(BASE_URL + "/register/user/save", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: user.firstname,
      lastName: user.lastname,
      username: user.username,
      email: user.email,
      password: user.password,
    }),
  })
    .then((res) => {
      let statusCode = res.status,
        success = res.ok;
      res.json().then((res) => {
        if (!success) {
          Alert.alert(
            JSON.stringify(`New user could not be registered, ${res.error}`)
          );
          return;
        }
        Alert.alert(
          JSON.stringify(`User ${res.username} was registered successfully!`)
        );
      });
    })
    .catch((err) =>
      Alert.alert(JSON.stringify(`Something went wrong, ${err}`))
    );
};
