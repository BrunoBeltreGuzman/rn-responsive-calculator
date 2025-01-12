import * as React from "react";
import { Text, View, Pressable, Dimensions } from "react-native";
import { getStyles, styles } from "../config/styles";
import { useState, useEffect } from "react";
import ThemeContext from "../store/ThemeContext";
import Theme from "../config/Theme";

interface ButtonProps {
  label: string;
  isBlue?: boolean;
  isRed?: boolean;
  onPress: () => void;
}

export default function Button({ label, isBlue, isRed, onPress }: ButtonProps) {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );
  const theme = (React.useContext(ThemeContext) as "light" | "dark") || "light";

  useEffect(() => {
    const onChange = ({
      window,
    }: {
      window: { width: number; height: number };
    }) => {
      setScreenWidth(window.width);
      setScreenHeight(window.height);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

  const dynamicStyles = getStyles(screenWidth, screenHeight);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        dynamicStyles.buttonHeight,
        {
          backgroundColor: pressed
            ? Theme[theme].buttonPressedBackgroundColor
            : Theme[theme].buttonBackgroundColor,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          { color: Theme[theme].formulaTextColor },
          isBlue && styles.blueButton,
          isRed && styles.redButton,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
