import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [currentCalculation, setCurrentCalculation] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [finishedOperation, setFinishedOperation] = useState(false);
  const [history, setHistory] = useState([]);

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

  // TODO make this a switch statement
  // takes the operator, the first operand and the second operand and returns the calculation
  // also rounds the decimals to 2 places and removes trailing zeros
  // the calculation is saved in state
  //TODO setHistory needs to concatinate calculation strings not replace them
  const calculateResult = () => {
    if (operator === "+") {
      setResult(
        (parseFloat(firstOperand) + parseFloat(secondOperand)).toFixed(2) * 1
      );
      setHistory(
        `${firstOperand}  ${operator} ${secondOperand} : ${
          (parseFloat(firstOperand) + parseFloat(secondOperand)).toFixed(2) * 1
        }`
      );
    } else if (operator === "-") {
      setResult(
        (parseFloat(firstOperand) - parseFloat(secondOperand)).toFixed(2) * 1
      );
      setHistory(
        `${firstOperand}  ${operator} ${secondOperand} : ${
          (parseFloat(firstOperand) - parseFloat(secondOperand)).toFixed(2) * 1
        }`
      );
    } else if (operator === "/") {
      setResult(
        (parseFloat(firstOperand) / parseFloat(secondOperand)).toFixed(2) * 1
      );
      setHistory(
        `${firstOperand}  ${operator} ${secondOperand} : ${
          (parseFloat(firstOperand) / parseFloat(secondOperand)).toFixed(2) * 1
        }`
      );
    } else if (operator === "*") {
      setResult(
        (parseFloat(firstOperand) * parseFloat(secondOperand)).toFixed(2) * 1
      );
      setHistory(
        `${firstOperand}  ${operator} ${secondOperand} : ${
          (parseFloat(firstOperand) * parseFloat(secondOperand)).toFixed(2) * 1
        }`
      );
    }
  };

  // sets the current calculation every time the dependancies are altered
  // the ':' character is not shown unless the result is truthy
  useEffect(() => {
    let equalSign = "";
    if (result) {
      equalSign = ":";
    }
    setCurrentCalculation(
      `${firstOperand} ${operator} ${secondOperand} ${equalSign} ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);

  return (
    <View style={styles.container}>
      <Text>Im a calculator</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
