import { View, Text, StyleSheet, Pressable } from "react-native";

const MemoryButtons = ({ onDelete, wipeHistory }) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={[styles.buttons, styles.clearButton]}>
        <Pressable
          onPress={wipeHistory}
          android_ripple={{ color: "#915D5B", borderless: true }}
        >
          <Text style={styles.buttonsText}>CLEAR HISTORY</Text>
        </Pressable>
      </View>
      <View style={[styles.buttons, styles.deleteButton]}>
        <Pressable
          onPress={onDelete}
          android_ripple={{ color: "#AB898D", borderless: true }}
        >
          <Text style={styles.buttonsText}>DELETE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MemoryButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    width: "85%",
    height: 50,
    justifyContent: "space-between",
    marginBottom: 40,
  },
  buttons: {
    alignContent: "center",
    justifyContent: "center",
    elevation: 4,
    width: "47%",
    borderRadius: 10,
  },
  clearButton: {
    backgroundColor: "#913330",
  },
  deleteButton: {
    backgroundColor: "#AB676F",
  },

  buttonsText: { color: "white", textAlign: "center", fontSize: 18 },
});
