import { View, Text, StyleSheet, Pressable } from "react-native";

const MemoryButtons = () => {
  return (
    <View style={styles.buttonsContainer}>
      <Pressable
        style={[styles.buttons, styles.clearButton]}
        onPress={() => {
          console.log("clear history pressed");
        }}
        android_ripple={{ color: "#915D5B" }}
      >
        <Text style={styles.buttonsText}>CLEAR HISTORY</Text>
      </Pressable>
      <Pressable
        style={[styles.buttons, styles.deleteButton]}
        onPress={() => {
          console.log("delete pressed");
        }}
        android_ripple={{ color: "#AB898D" }}
      >
        <Text style={styles.buttonsText}>DELETE</Text>
      </Pressable>
    </View>
  );
};

export default MemoryButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 4,
    width: "47%",
    borderRadius: 8,
  },
  clearButton: {
    backgroundColor: "#913330",
  },
  deleteButton: {
    backgroundColor: "#AB676F",
  },

  buttonsText: { color: "white", textAlign: "center", fontSize: 18 },
});
