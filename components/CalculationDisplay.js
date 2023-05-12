import { View, Text, StyleSheet } from "react-native";

const CalculationDisplay = () => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>1 + 1 = 2</Text>
    </View>
  );
};

export default CalculationDisplay;

const styles = StyleSheet.create({
  displayContainer: {
    width: "85%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    // temportary until spacing is correct
    backgroundColor: "red",
  },

  displayText: { color: "white", fontSize: 40 },
});
