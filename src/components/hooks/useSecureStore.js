import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    Alert.alert(`No Value Found With That Key: ${key}`);
  }
  return result;
}

export async function deleteValueFor(key) {
  await SecureStore.deleteItemAsync(key);
}
