import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const renderButton = (label: string, type?: string) => (
  <TouchableOpacity
    style={[
      styles.button,
      type === "operator" && styles.operatorButton,
      type === "special" && styles.specialButton,
    ]}
  >
    <Text
      style={[
        styles.buttonText,
        type === "operator" && styles.operatorText,
        type === "special" && styles.specialText,
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.themeToggle}>☀️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.themeToggle}>🌙</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.calculationText}>308 × 42</Text>
        <Text style={styles.resultText}>12,936</Text>
      </View>
      <View style={styles.buttonGrid}>
        <View style={styles.row}>
          {renderButton("AC", "special")}
          {renderButton("+/-", "special")}
          {renderButton("%", "special")}
          {renderButton("÷", "operator")}
        </View>
        <View style={styles.row}>
          {renderButton("7")}
          {renderButton("8")}
          {renderButton("9")}
          {renderButton("×", "operator")}
        </View>
        <View style={styles.row}>
          {renderButton("4")}
          {renderButton("5")}
          {renderButton("6")}
          {renderButton("-", "operator")}
        </View>
        <View style={styles.row}>
          {renderButton("1")}
          {renderButton("2")}
          {renderButton("3")}
          {renderButton("+", "operator")}
        </View>
        <View style={styles.row}>
          {renderButton("↩", "special")}
          {renderButton("0")}
          {renderButton("=", "operator")}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    backgroundColor: "#ff0095",
  },
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
    backgroundColor: "#e9e9e9",
    borderRadius: 18,
    marginTop: 16,
  },
  themeToggle: {
    fontSize: 20,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    marginBottom: 24,
    backgroundColor: "red",
  },
  calculationText: {
    fontSize: 24,
    color: "#888",
  },
  resultText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
  },
  buttonGrid: {
    flex: 2,
    padding: 16,
    backgroundColor: "#0026ff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    borderRadius: 8,
    backgroundColor: "#e6e6e6",
  },
  operatorButton: {
    backgroundColor: "#fa8231",
  },
  specialButton: {
    backgroundColor: "#4cd137",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  operatorText: {
    color: "#fff",
  },
  specialText: {
    color: "#fff",
  },
});

export default App;
