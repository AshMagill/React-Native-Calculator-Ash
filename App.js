import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

// main components
import CalculationDisplay from "./components/CalculationDisplay";
import MemoryButtons from "./components/MemoryButtons";
import InputGrid from "./components/InputGrid";
import HistoryButton from "./components/HistoryButton";

export default function App() {
  // STATE
  const [currentCalculation, setCurrentCalculation] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [finishedOperation, setFinishedOperation] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [historyData, setHistoryData] = useState([]);

  // PERSISTING MEMORY WITH ASYNC STORAGE
  // wipe data

  useEffect(() => {
    getHistory();
  }, [wipeHistory]);

  const wipeHistory = async () => {
    try {
      await AsyncStorage.removeItem("history");
      console.log("history is wiped");
    } catch (error) {
      console.log("wipe history: " + error.message);
    }
  };

  // get data
  const getHistory = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem("history"));
      if (value !== null) {
        // we have data!!
        setHistoryData(value);
        console.log("get history");
      } else if (value === null) {
        await AsyncStorage.setItem("history", "[]");
      }
    } catch (error) {
      console.log("get history: " + error.message);
    }
  };

  // storing data
  const storeHistory = async (value) => {
    // if an array already exists, push new value to it
    const oldHistory = await AsyncStorage.getItem("history");
    if (oldHistory === null) {
      console.log("no history database, creating one..");
      // initialsie the database as an empty array
      await AsyncStorage.setItem("history", "[]");
    }
    console.log("persisting data exists, fetching now..");
    //creates an object based on the value and current time
    try {
      const valueObject = {
        label: value,
        value: moment().valueOf(),
        key: moment().valueOf(),
      };
      // fetches the old history
      let oldHistoy = await AsyncStorage.getItem("history");
      // parses old history
      const parsedOldHistory = JSON.parse(oldHistoy);
      // updates the old history by adding new value
      const updatedHistory = [...parsedOldHistory, valueObject];
      // save updated history
      await AsyncStorage.setItem("history", JSON.stringify(updatedHistory));
      console.log("store history");
    } catch (error) {
      console.log("store history: " + error.message);
    }
  };

  // CALCULATIONS
  // this function is sent to the onCick prop in the buttons
  const buttonClickedHandler = (char) => {
    if (finishedOperation === true) {
      deletecurrrentCalculation();
    }
    // if the result aready exist it exits the function
    if (result) {
      return;
    }
    if (
      // checks if if function isFirstOperand returns true and if the character is either a type on number or a decimal
      // if true sets first operand
      (isFirstOperand(char) && typeof char == "number") ||
      (isFirstOperand(char) && char === ".")
    ) {
      setFirstOperand((number) => number + char);
      // checks if function isSecondOperand returns true and if the character is a '=' symbol
      // if true executes calculate result callback function
    } else if (isSecondOperand(char)) {
      if (char === "=" && secondOperand) {
        setFinishedOperation(true);
        calculateResult();
      } else {
        // if function isSecondOperand returns true and character is not '='
        // if true sets second operand
        setSecondOperand((number) => number + char);
      }
      // if none of the above requirements are fufilled, the character must be an operator and is assigned as such
    } else if (firstOperand && isOperator(char)) {
      setOperator(char);
    }
  };

  // sequentially wipes the most recent inputs
  const deleteRecentInputHandler = () => {
    setResult("");
    if (secondOperand) {
      setSecondOperand("");
    } else if (operator) {
      setOperator("");
    } else if (firstOperand) {
      setFirstOperand("");
    }
  };

  // deletes current calculation in display when a new one is entered
  const deletecurrrentCalculation = () => {
    setResult("");
    setOperator("");
    setFirstOperand("");
    setSecondOperand("");
    setFinishedOperation(false);
  };

  // returns a boolean of true if there is not already an operator first input + the input is a number
  const isFirstOperand = (char) => {
    return !operator && !isOperator(char);
  };

  // returns a boolean of true if there is already a first input + the input is a number
  const isSecondOperand = (char) => {
    return operator && !isOperator(char);
  };

  // retrurns a boolean of true if the input is an operator
  const isOperator = (char) => {
    return char === "+" || char === "-" || char === "*" || char === "/";
  };

  // takes the operator, the first operand and the second operand and returns the calculation
  // also rounds the decimals to 2 places and removes trailing zeros
  // the calculation is saved in state for display and then its added to history with AsyncStorage
  const calculateResult = () => {
    if (operator === "-") {
      setResult(
        (parseFloat(firstOperand) - parseFloat(secondOperand)).toFixed(2) * 1
      );
      storeHistory(
        `${firstOperand} ${operator} ${secondOperand} = ${
          (parseFloat(firstOperand) - parseFloat(secondOperand)).toFixed(2) * 1
        }`
      );
    } else if (operator === "+") {
      setResult(
        (parseFloat(firstOperand) + parseFloat(secondOperand)).toFixed(2) * 1
      );
      storeHistory(
        `${firstOperand}  ${operator} ${secondOperand} = ${
          (parseFloat(firstOperand) + parseFloat(secondOperand)).toFixed(2) * 1
        }`
      );
    } else if (operator === "/") {
      setResult(
        (parseFloat(firstOperand) / parseFloat(secondOperand)).toFixed(2) * 1
      );
      storeHistory(
        `${firstOperand}  ${operator} ${secondOperand} = ${
          (parseFloat(firstOperand) / parseFloat(secondOperand)).toFixed(2) * 1
        }`
      );
    } else if (operator === "*") {
      setResult(
        (parseFloat(firstOperand) * parseFloat(secondOperand)).toFixed(2) * 1
      );
      storeHistory(
        `${firstOperand}  ${operator} ${secondOperand} = ${
          (parseFloat(firstOperand) * parseFloat(secondOperand)).toFixed(2) * 1
        }`
      );
    }
  };

  // if the result exists, dispaly an equalSign in the calculation, otherwise wait to add it
  useEffect(() => {
    let equalSign = "";
    if (result) {
      equalSign = "=";
    }

    // sets the current calculation to string
    setCurrentCalculation(
      `${firstOperand} ${operator} ${secondOperand} ${equalSign} ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);

  const toggleDropDownHandler = (open) => {
    open ? setIsDropdownOpen(true) : setIsDropdownOpen(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <CalculationDisplay calculationText={currentCalculation} />
        <MemoryButtons
          wipeHistory={wipeHistory}
          onDelete={deleteRecentInputHandler}
        />
        {!isDropdownOpen && <InputGrid onButton={buttonClickedHandler} />}
        <HistoryButton
          getHistory={getHistory}
          historyData={historyData}
          toggleDropDownHandler={toggleDropDownHandler}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 950,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollview: {
    backgroundColor: "black",
  },
  dropdown: {
    alignItems: "center",
    height: "auto",
  },
});
