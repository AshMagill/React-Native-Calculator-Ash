import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

// jest.useFakeTimers();

describe('<App />', () => {
  it('is not broken', () => {
    expect(true).toBe(true);
  });
});

//TODO

// test all the operators:
// subtraction
// addition
// multiplication
// division

// output should only show up to 2 decimal points

// calculations can be performed on decimal numbers

// calculations can be performed on 0 operand

// can only use one decimal point per operand

// calculations can output negative numbers

// calculations can only contain 2 x operands

// handle edge cases:
// pressing equals before the first and second operands is disabled
// pressing the operator before the first operand is disabled
// user can change the operator after it is entered

// clear button should reset the stored history
