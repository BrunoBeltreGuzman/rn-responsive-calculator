import { StyleSheet } from "react-native";

export const getStyles = (screenWidth: number, screenHeight: number) =>
  StyleSheet.create({
    buttonHeight: {
      height: screenHeight / 3 / 4,
    },
  });

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
  },
  header: {
    flex: 1,
  },
  main: {
    flex: 3,
    justifyContent: "flex-end",
  },
  input: {
    alignItems: "flex-end",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttoms: {
    paddingTop: 30,
    backgroundColor: "#F9F9F9",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#f0f0f049",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 600,
  },
  formulaText: {
    fontSize: 30,
    color: "#2B2E3B",
  },
  resultText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#2B2E3B",
  },
  blueButton: {
    color: "#5de4cd",
  },
  redButton: {
    color: "#db6565",
  },
  defaultButton: {
    color: "#2B2E3B",
  },
});
