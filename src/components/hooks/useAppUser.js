export const handleLogin = (user) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: { user },
    credentials: "include",
  })
    .then((res) => console.log("Result 1: ", res))
    .then((res) => console.log("Result 2: ", res))
    .catch((err) => console.log("Error: ", err));
};
