import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
  static async put(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async get(key: string) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default Storage;
