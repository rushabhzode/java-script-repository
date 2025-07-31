//Array

// const myArr = [0,1,2,3,4,5]
// console.log(myArr);

// const myHeroes = ["batman", "superman", "spiderman",];
// console.log(myHeroes);

// const myarr2 = new Array(1,2,3,4,5);
// console.log(myarr2[3]);


//Array Methods


//const myArr = [1,2,3,4,5,6,7,8,9,10];
// myArr.push(11); // Adds an element to the end of the array
// myArr.pop(); // Removes the last element from the array
//myArr.unshift(7); // Adds an element to the beginning of the array
//myArr.shift(); // Removes the first element from the array
// console.log(myArr.includes(5)); // Checks if an element is in the array
// console.log(myArr.indexOf(3)); // Returns the index of an element in the array 
// const newArr = myArr.join(); // Joins all elements of the array into a string
//console.log(newArr); 

// ✅ slice(): Copy without changing the original
// Purpose: To extract a portion of an array.

// Does it change the original array? ❌ No (it returns a new array).

// Syntax: array.slice(start, end)

// start: index to start (inclusive)

// end: index to end (exclusive)

// 🔸 Example:
// js
// Copy
// Edit
// let fruits = ["apple", "banana", "mango", "orange"];
// let sliced = fruits.slice(1, 3); // copy items from index 1 to 2 (3 is exclusive)

// console.log(sliced);     // ["banana", "mango"]
// console.log(fruits);     // ["apple", "banana", "mango", "orange"]


// ✅ splice(): Change the original array
// Purpose: To add, remove, or replace elements in the array.

// Does it change the original array? ✅ Yes

// Syntax: array.splice(start, deleteCount, item1, item2, ...)

// start: index to begin at

// deleteCount: number of items to remove

// item1, item2...: items to add


// let fruits = ["apple", "banana", "mango", "orange"];
// let splice = fruits.splice(1, 2);   // remove 2 items starting at index 1

// console.log(fruits);   // ["apple", "orange"]
// console.log(splice);     // ["banana", "mango"]



//************************************
//[concat,spread operator] works same but push adds the entire array as a single element
//let marvelHeroes = ["ironman", "thor", "hulk", "spiderman"];
//let dcHeroes = ["batman", "superman", "flash", "aquaman"];
// marvelHeroes.push(dcHeroes); // Adds the entire dcHeroes array as a single element
// console.log(marvelHeroes);
// marvelHeroes = marvelHeroes.concat(dcHeroes); // Combines both arrays into one
//marvelHeroes = [...marvelHeroes, ...dcHeroes]; // Using spread operator to combine arrays
//console.log(marvelHeroes); // ["ironman", "thor", "hulk", "spiderman", "batman", "superman", "flash", "aquaman"]

//array.of() method creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments.
// let score1= 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // Creates an array with the given scores