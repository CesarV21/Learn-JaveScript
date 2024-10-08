/**
 * Comparison Operators
 
When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==

Comparison operators compare the value on the left with the value on the right. For instance:
 */

10 < 12; // Evaluates to true

/**
 * It can be helpful to think of comparison statements as questions. When the answer is “yes”, the statement evaluates to true, and when the answer is “no”, the statement evaluates to false. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

We can also use comparison operators on different data types like strings:
 */

"apples" === "oranges";

/**
 * In the example above, we’re using the identity operator (===) to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false.

All comparison statements evaluate to either true or false and are made up of:

Two values that will be compared.
An operator that separates the values and compares them accordingly (>, <, <=,>=,===,!==).
Let’s practice using these comparison operators!
 */

// ------------------ Instructions  ------------------//

// Using let, create a variable named hungerLevel and set it equal to 7.

let hungerLevel = 7;

//Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.

//After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different operators such as <=,>=,>, and <.

// Greater than: >
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

// Less than: <
if (hungerLevel < 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

// Less than or equal to: <=
if (hungerLevel <= 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

// Greater than or equal to: >=
if (hungerLevel >= 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

// Is equal to: ===
if (hungerLevel === 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

// Is not equal to: !==
if (hungerLevel !== 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}
