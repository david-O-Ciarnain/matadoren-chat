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

export const loginUser = (user) => {
  let formData = new FormData();
  formData.append("username", user.username);
  formData.append("password", user.password);

  fetch(BASE_URL + "/login", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((responseData) => {
      Alert.alert(`Login Success!, ${responseData.access_token}`);
      console.log(responseData.access_token);
      save("access_token", responseData.access_token);
    })
    .catch((err) => Alert.alert(`Something went wrong, ${err}`));
};
