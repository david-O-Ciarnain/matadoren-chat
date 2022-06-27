import { BASE_URL } from "@env";

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
  }).catch((err) => console.log(err));
};

export const getUser = user => {
  fetch(`${BASE_URL}/register/user/get`,{
    method:"GET",
    headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      firstName:user.firstName,
      lastName:user.lastName,
      username:user.username,
    }),
  }).catch(err => console.log(err))
}
