# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion in arithmetic operations.  JavaScript's loose typing can lead to unexpected behavior when mixing numbers and strings in calculations.

## Bug Description
The `bug.js` file contains functions that perform addition, subtraction, multiplication, and division. When passed a number and a string, the results are not always intuitive due to JavaScript's implicit type coercion.

## Solution
The `bugSolution.js` file shows how to mitigate this by explicitly converting strings to numbers using `parseInt()` or `parseFloat()` before performing arithmetic operations. This ensures that the calculations are performed with numerical values, leading to predictable results.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., Node.js or a browser's developer console).
3. Observe the unexpected outputs.
4. Open `bugSolution.js` and run it to see the corrected behavior.