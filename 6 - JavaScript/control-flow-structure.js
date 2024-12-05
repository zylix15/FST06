// Control Flow Structure

// 1. Conditional Statements
// Allow us to execute different blocks of code based on conditions.

// Conditional: if, else if, else statement

// () - Conditional Block
// {} - Code Block

let temperature = 31;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
  // rang 0 - 20
  console.log("It's cold outside!");
} else if (temperature > 20 && temperature < 30) {
  // rang 21 - 30
  console.log("It's warm outside");
  console.log("Let's go to the park.");
} else {
  console.log("It's hot outside");
}

// 2. Looping Statement
// Repeatedly execute a block of code until a condition is met.

// For loop
// Components
// 1. Variable Initialization
// 2. Condition Expression
// 3. Increment/Decrement

console.clear();
for (let i = 1; i < 3; i++) {
  console.log("For loop cound:", i);
}

// while loop
// Components
// 1. Condition Expression
// 2. Code Block
// 3. Increment/Decrement

let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}
