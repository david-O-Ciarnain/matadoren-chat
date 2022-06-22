import { BASE_URL } from "@env";

export const fetchUser = () => {
  console.log(BASE_URL + "/register/user/save");

  fetch(BASE_URL + "/register/user/save", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: "Douglas",
      lastName: "Alexandersson",
      username: "Redhawks",
      password: "abc123",
      roles: "USER",
    }),
  }).catch((err) => console.log(err));
};
