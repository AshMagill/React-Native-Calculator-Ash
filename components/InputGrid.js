import { View, Text, StyleSheet, Pressable } from "react-native";

const Inputgrid = ({ onButton }) => {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.rowContainer}>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(1)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(2)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(3)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.redButton]}>
          <Pressable
            onPress={() => onButton("+")}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(4)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(5)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(6)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.redButton]}>
          <Pressable
            onPress={() => onButton("-")}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(7)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(8)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(9)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.redButton]}>
          <Pressable
            onPress={() => onButton("*")}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>*</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(0)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.yellowButton]}>
          <Pressable
            onPress={() => onButton(".")}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>.</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.pinkButton]}>
          <Pressable
            onPress={() => onButton("=")}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>=</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.redButton]}>
          <Pressable
            onPress={() => onButton(6)}
            android_ripple={{ color: "#F8F0E3", borderless: true }}
          >
            <Text style={styles.buttonText}>/</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Inputgrid;

const styles = StyleSheet.create({
  gridContainer: {
    // temportary until spacing is correct
    //backgroundColor: "blue",
    height: 300,
    width: "75%",
    justifyContent: "space-between",
    marginBottom: 40,
    //margin: 40,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: 65,
    width: 65,
    justifyContent: "center",
    borderRadius: 10,
  },
  yellowButton: { backgroundColor: "#DBD8AE" },
  pinkButton: { backgroundColor: "#B59E9F" },
  redButton: { backgroundColor: "#C19281" },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 22,
  },
});
