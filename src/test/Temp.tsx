import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { getStyles } from "../config/styles";

export default function App() {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );

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
    <View style={styles.container}>
      <View style={styles.inputsRow}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>{screenWidth}</Text>
        <Text>{screenHeight}</Text>
      </View>
      <View style={styles.buttonsRow}>
        <View style={styles.buttonRow}>
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
        </View>
        <View style={styles.buttonRow}>
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
        </View>
        <View style={styles.buttonRow}>
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
        </View>
        <View style={styles.buttonRow}>
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
          <View style={dynamicStyles.button} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  inputsRow: {
    backgroundColor: "#0011ff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonsRow: {
    backgroundColor: "#d80e0e",
  },
  buttonRow: {
    backgroundColor: "#ffe600",
    flexDirection: "row",
  },
});
