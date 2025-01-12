import AsyncStorage from "@react-native-async-storage/async-storage";

export async function put(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function get(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(error);
    return null;
  }
}
