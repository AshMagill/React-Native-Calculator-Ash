import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const HistoryButton = ({ toggleDropDownHandler, historyData }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.buttonContainer}>
      <DropDownPicker
        textStyle={{ textAlign: "center" }}
        open={open}
        items={historyData}
        setOpen={setOpen}
        placeholder="       HISTORY"
        placeholderStyle={{ fontSize: 18 }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownDirection="BOTTOM"
        containerStyle={{
          height: 410,
          borderRadius: 10,
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
  },
});
