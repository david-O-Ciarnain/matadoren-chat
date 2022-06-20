export const handleRegister = (user) => {
  JSON.stringify(user);

  fetch("localhost:8080/register/user/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { user },
    credentials: "include",
  })
    .then((res) => console.log("Result 1: ", res))
    .then((res) => console.log("Result 2: ", res))
    .catch((err) => console.log("Error: ", err));
};
