import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import App from "../App";

describe("all operators functional", () => {
  it("multiply operand button works", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("oneButton");
    const buttonTwo = getByTestId("multiplyButton");
    const buttonThree = getByTestId("oneButton");
    const buttonFour = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    expect(displayResult.children[0]).toBe("1 * 1 = 1");
  });

  it("subtract operand button works", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("nineButton");
    const buttonTwo = getByTestId("minusButton");
    const buttonThree = getByTestId("oneButton");
    const buttonFour = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    expect(displayResult.children[0]).toBe("9 - 1 = 8");
  });

  it("addition operand button works", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("sevenButton");
    const buttonTwo = getByTestId("plusButton");
    const buttonThree = getByTestId("threeButton");
    const buttonFour = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    expect(displayResult.children[0]).toBe("7 + 3 = 10");
  });

  it("divide operand button works", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("sixButton");
    const buttonTwo = getByTestId("divideButton");
    const buttonThree = getByTestId("threeButton");
    const buttonFour = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    expect(displayResult.children[0]).toBe("6 / 3 = 2");
  });
});

describe("decimal points are rounded and work as intended", () => {
  it("should only show up to 2 decimal points", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("oneButton");
    const buttonTwo = getByTestId("decimalButton");
    const buttonThree = getByTestId("fiveButton");
    const buttonFour = getByTestId("nineButton");
    const buttonFive = getByTestId("twoButton");
    const buttonSix = getByTestId("minusButton");
    const buttonSeven = getByTestId("oneButton");
    const buttonEight = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    fireEvent.press(buttonSix);
    fireEvent.press(buttonSeven);
    fireEvent.press(buttonEight);
    expect(displayResult.children[0]).toBe("1.592 - 1 = 0.59");
  });

  it("calculations can be performed on decimal numbers", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("oneButton");
    const buttonTwo = getByTestId("decimalButton");
    const buttonThree = getByTestId("fiveButton");
    const buttonFour = getByTestId("nineButton");
    const buttonFive = getByTestId("twoButton");
    const buttonSix = getByTestId("minusButton");
    const buttonSeven = getByTestId("oneButton");
    const buttonEight = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    fireEvent.press(buttonSix);
    fireEvent.press(buttonSeven);
    fireEvent.press(buttonEight);
    expect(displayResult.children[0]).toBe("1.592 - 1 = 0.59");
  });
});

describe("decimal points are rounded and work as intended", () => {
  it("should only show up to 2 decimal points", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("oneButton");
    const buttonTwo = getByTestId("decimalButton");
    const buttonThree = getByTestId("fiveButton");
    const buttonFour = getByTestId("nineButton");
    const buttonFive = getByTestId("twoButton");
    const buttonSix = getByTestId("minusButton");
    const buttonSeven = getByTestId("oneButton");
    const buttonEight = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    fireEvent.press(buttonSix);
    fireEvent.press(buttonSeven);
    fireEvent.press(buttonEight);
    expect(displayResult.children[0]).toBe("1.592 - 1 = 0.59");
  });

  it("calculations can be performed on decimal numbers", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("oneButton");
    const buttonTwo = getByTestId("decimalButton");
    const buttonThree = getByTestId("fiveButton");
    const buttonFour = getByTestId("nineButton");
    const buttonFive = getByTestId("twoButton");
    const buttonSix = getByTestId("minusButton");
    const buttonSeven = getByTestId("oneButton");
    const buttonEight = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    fireEvent.press(buttonSix);
    fireEvent.press(buttonSeven);
    fireEvent.press(buttonEight);
    expect(displayResult.children[0]).toBe("1.592 - 1 = 0.59");
  });

  it("can only use on decimal point per operand", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("oneButton");
    const buttonTwo = getByTestId("decimalButton");
    const buttonThree = getByTestId("decimalButton");
    const buttonFour = getByTestId("oneButton");
    const buttonFive = getByTestId("twoButton");
    const buttonSix = getByTestId("minusButton");
    const buttonSeven = getByTestId("oneButton");
    const buttonEight = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    fireEvent.press(buttonSix);
    fireEvent.press(buttonSeven);
    fireEvent.press(buttonEight);
    expect(displayResult.children[0]).toBe("1.12 - 1 = 0.59");
  });
});

describe("edge cases", () => {
  it("calculations can be performed on 0 operand", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("zeroButton");
    const buttonTwo = getByTestId("decimalButton");
    const buttonThree = getByTestId("fiveButton");
    const buttonFour = getByTestId("nineButton");
    const buttonFive = getByTestId("twoButton");
    const buttonSix = getByTestId("minusButton");
    const buttonSeven = getByTestId("zeroButton");
    const buttonEight = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    fireEvent.press(buttonSix);
    fireEvent.press(buttonSeven);
    fireEvent.press(buttonEight);
    expect(displayResult.children[0]).toBe("0.592 - 0 = 0.59");
  });

  it("calculations can output negative numbers", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("minusButton");
    const buttonTwo = getByTestId("fiveButton");
    const buttonThree = getByTestId("fiveButton");
    const buttonFour = getByTestId("nineButton");
    const buttonFive = getByTestId("twoButton");
    const buttonSix = getByTestId("minusButton");
    const buttonSeven = getByTestId("oneButton");
    const buttonEight = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    fireEvent.press(buttonSix);
    fireEvent.press(buttonSeven);
    fireEvent.press(buttonEight);
    expect(displayResult.children[0]).toBe("-592 - 1 =  -593");
    i;
  });

  it("can only use one operator per operation", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("nineButton");
    const buttonTwo = getByTestId("minusButton");
    const buttonThree = getByTestId("minusButton");
    const buttonFour = getByTestId("oneButton");
    const buttonFive = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    expect(displayResult.children[0]).toBe("9 - 1 = 8");
  });
  it("equals is disabled before the first and second operands is disabled", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("equalButton");
    const buttonTwo = getByTestId("oneButton");
    const buttonThree = getByTestId("minusButton");
    const buttonFour = getByTestId("fiveButton");
    const buttonFive = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    expect(displayResult.children[0]).toBe("1 - 5 = -4");
  });
  it("pressing the operator before the first operand is disabled", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("minusButton");
    const buttonTwo = getByTestId("oneButton");
    const buttonThree = getByTestId("minusButton");
    const buttonFour = getByTestId("fiveButton");
    const buttonFive = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    expect(displayResult.children[0]).toBe("1 - 5 = -4");
  });
  it("user can change the operator after it is entered", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("oneButton");
    const buttonTwo = getByTestId("multiplyButton");
    const buttonThree = getByTestId("fiveButton");
    const buttonFour = getByTestId("minusButton");
    const buttonFive = getByTestId("equalButton");
    const displayResult = getByTestId("displayText");
    fireEvent.press(button);
    fireEvent.press(buttonTwo);
    fireEvent.press(buttonThree);
    fireEvent.press(buttonFour);
    fireEvent.press(buttonFive);
    expect(displayResult.children[0]).toBe("1 - 5 = -4");
  });
});
