import React, { useEffect, useState } from "react";
import { Text, useColorScheme, View } from "react-native";
import { styles } from "./config/styles";
import Button from "./components/Button";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContext from "./store/ThemeContext";
import Theme from "./config/Theme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const initColorTheme = useColorScheme() || "light";
  const [theme, setTheme] = useState(initColorTheme);
  const [formula, setFormula] = useState("308 + 42");
  const [result, setResult] = useState(eval(formula));

  useEffect(() => {
    if (formula == "") {
      setFormula("0");
    }
    setResult(eval(formula));
  }, [formula]);

  return (
    <ThemeContext.Provider value={theme}>
      <StatusBar style={theme == "light" ? "dark" : "light"} />
      <View
        style={[
          styles.container,
          { backgroundColor: Theme[theme].screenBackgroundColor },
        ]}
      >
        <View style={styles.header}>
          <ThemeToggle
            toggle={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </View>
        <View style={styles.main}>
          <View style={styles.input}>
            <Text
              style={[
                styles.formulaText,
                { color: Theme[theme].formulaTextColor },
                { fontSize: result != "" && result != "0" ? 30 : 60 },
              ]}
            >
              {formula.slice(0, 50)}
            </Text>
            <Text
              style={[
                styles.resultText,
                { color: Theme[theme].formulaTextColor },
                { display: result != "" && result != "0" ? "flex" : "none" },
              ]}
            >
              {result}
            </Text>
          </View>
          <View
            style={[
              styles.buttoms,
              { backgroundColor: Theme[theme].buttonsBackgroundColor },
            ]}
          >
            <View style={styles.row}>
              <Button
                label="1"
                onPress={() => {
                  setFormula(formula + " + " + 1);
                }}
              />
              <Button
                label="2"
                onPress={() => {
                  setFormula(formula + " + " + 2);
                }}
              />
              <Button
                label="3"
                onPress={() => {
                  setFormula(formula + " + " + 3);
                }}
              />
            </View>
            <View style={styles.row}>
              <Button
                label="4"
                onPress={() => {
                  setFormula(formula + " + " + 4);
                }}
              />
              <Button
                label="5"
                onPress={() => {
                  setFormula(formula + " + " + 5);
                }}
              />
              <Button
                label="6"
                onPress={() => {
                  setFormula(formula + " + " + 6);
                }}
              />
            </View>
            <View style={styles.row}>
              <Button
                label="7"
                onPress={() => {
                  setFormula(formula + " + " + 7);
                }}
              />
              <Button
                label="8"
                onPress={() => {
                  setFormula(formula + " + " + 8);
                }}
              />
              <Button
                label="9"
                onPress={() => {
                  setFormula(formula + " + " + 9);
                }}
              />
            </View>
            <View style={styles.row}>
              <Button
                label="0"
                isBlue={true}
                onPress={() => {
                  setFormula(formula + " + " + 0);
                }}
              />
              <Button
                label="C"
                isRed={true}
                onPress={() => {
                  setFormula(formula.slice(0, -4));
                }}
              />
              <Button
                label="AC"
                isRed={true}
                onPress={() => {
                  setFormula("");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ThemeContext.Provider>
  );
}
