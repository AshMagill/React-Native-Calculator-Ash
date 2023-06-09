import { View, Text, StyleSheet } from "react-native";

const CalculationDisplay = ({ calculationText }) => {
  return (
    <View style={styles.displayContainer}>
      <Text testID="displayText" style={styles.displayText}>
        {calculationText}
      </Text>
    </View>
  );
};

export default CalculationDisplay;

const styles = StyleSheet.create({
  displayContainer: {
    width: "85%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },

  displayText: { color: "white", fontSize: 40 },
});
