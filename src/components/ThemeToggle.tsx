import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import ThemeContext from "../store/ThemeContext";
import Theme from "../config/Theme";

interface ThemeToggleProps {
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggle }) => {
  const theme = (React.useContext(ThemeContext) as "light" | "dark") || "light";

  return (
    <View style={styles.containerHeader}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: Theme[theme].buttonsBackgroundColor,
          },
        ]}
      >
        <Pressable onPress={toggle}>
          <Text
            style={[styles.themeToggle, theme == "light" && { opacity: 0.5 }]}
          >
            🌙
          </Text>
        </Pressable>
        <Pressable onPress={toggle}>
          <Text
            style={[styles.themeToggle, theme == "dark" && { opacity: 0.5 }]}
          >
            ☀️
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ThemeToggle;

const styles = StyleSheet.create({
  containerHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 120,
    backgroundColor: "#F9F9F9",
    borderRadius: 18,
    marginTop: 30,
  },
  themeToggle: {
    fontSize: 20,
  },
});
