import * as SecureStore from "expo-secure-store";

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("Access_Token: " + result);
  } else {
    alert("Not found.");
  }
}

export async function deleteValueFor(key) {
  await SecureStore.deleteItemAsync(key);
}