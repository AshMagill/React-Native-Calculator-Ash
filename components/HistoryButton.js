import React, { useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const HistoryButton = ({ toggleDropDownHandler }) => {
  const [open, setOpen] = useState(false);
  //const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Banana", value: "banana" },
    { label: "Apple", value: "apple" },
    { label: "fApple", value: "fapple" },
    { label: "Apple", value: "capple" },
    { label: "dApple", value: "dapple" },
    { label: "dBanana", value: "dbanana" },
    { label: "dBanana", value: "daffnana" },
    //{ label: "anana", value: "nana" },
    //{ label: "pple", value: "ple" },
    //{ label: "ple", value: "ple" },
    //{ label: "pple", value: "fapple" },
    //{ label: "pple", value: "le" },
    //{ label: "dBanana", value: "nana" },
    //{ label: "dBanana", value: "fnana" },
  ]);
  // pass a fucntion in from appjs that makes the whole page scrollable
  return (
    <View style={styles.buttonContainer}>
      {/*<Text style={styles.buttonText}>HISTORY</Text>*/}
      <DropDownPicker
        textStyle={{ textAlign: "center" }}
        open={open}
        items={items}
        setOpen={setOpen}
        setItems={setItems}
        placeholder="       HISTORY"
        placeholderStyle={{ fontSize: 18 }}
        alwaysBounceVertical={false}
        //disabled={true}
        //itemStyle={{ alignItems: "flex-start|flex-end|center" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownDirection="BOTTOM"
        containerStyle={{
          height: 410,
          //backgroundColor: "white",
          //borderColor: "white",
          //position: "absolute",
          //top: 30,
          //top: 100,
          //backgroundColor: "white",
          //borderColor: "white",
          //position: "absolute",
          //justifyContent: "flex-end",
          //paddingBottom: "3",
          borderRadius: 10,
          //opacity: 0.5,
          //display: "block",
        }}
        labelStyle={{
          fontSize: 18,
          color: "#000",
        }}
        onPress={(open) =>
          open ? toggleDropDownHandler(true) : toggleDropDownHandler(false)
        }
      />
    </View>
  );
};

export default HistoryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "85%",
    height: 410,
    borderRadius: 10,
    marginBottom: 500,
    position: "relative",
    //paddingBottom: 600,
    //paddingBottom: 600,
    //backgroundColor: "white",
  },
});
