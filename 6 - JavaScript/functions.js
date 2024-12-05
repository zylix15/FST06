// Functions
// Reusable block of code that can be executed whenever needed.

// 1. Function Definition
function greet() {
  console.log("Hello! Welcome to the world of functions.");
  console.log("Let's go!");
}
greet();
greet();
greet();

// 2. Function with Parameters
// Parameters = placeholder
// Atguments - values passed to a functions parameters
function sum(num1, num2) {
  return num1 + num2; // This is the end statement.
  console.log("Unreachable");
}
console.log("Sum: ", sum(10, 5));
