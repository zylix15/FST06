// Array
let fruits = ["Apple", "Pineapple", "Banana", "Pear", "Avocado"];
console.log("Fruits: ", fruits);

// Check the length of an Array
console.log("Fruits lenght: ", fruits.length);

// Update element/s
fruits[3] = "Dates";
console.log("Fruits after update: ", fruits);

// Accessing elements
console.log("3rd fruit: ", fruits[2]);

// Method - function thats is associate with an object or a class

// Adding elements
// .push () - adds to the end of the array
fruits.push("Dewberries");
console.log("Updated fruits: ", fruits);

// Deleting elements
// .pop() - removes the last element of the array
fruits.pop();
console.log("Updated fruits: ", fruits);

// Searching elements
// .include() - check if an element is exist
console.log("Is Banana included?", fruits.includes("Banana"));

// .indexOf() - find the index of an element
let index = fruits.indexOf("Banana");
console.log("Index of Banana: ", index);

// .forEach() - receives a function as an argument and executes it for each element of the array
// Return: undefined
fruits.forEach(function (fruit) {
  console.log("Fruits: ", fruit);
});
