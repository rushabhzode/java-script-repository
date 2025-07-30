//concateniate string
const name = "Rushabh";
const repoCount = "50";

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


// Here are some of the most commonly used JavaScript string methods with examples to help you understand them easily:

// 🔹 1. length
// Returns the length of the string.

// js
// Copy
// Edit
// let str = "Hello";
// console.log(str.length); // 5
// 🔹 2. toUpperCase() / toLowerCase()
// Converts the string to upper or lower case.

// js
// Copy
// Edit
// let str = "Hello";
// console.log(str.toUpperCase()); // "HELLO"
// console.log(str.toLowerCase()); // "hello"
// 🔹 3. trim()
// Removes whitespace from both ends of the string.

// js
// Copy
// Edit
// let str = "  Hello World  ";
// console.log(str.trim()); // "Hello World"
// 🔹 4. includes()
// Checks if a string contains another string.

// js
// Copy
// Edit
// let str = "JavaScript is fun";
// console.log(str.includes("fun")); // true
// 🔹 5. indexOf() / lastIndexOf()
// Returns the index of the first (or last) occurrence of a substring.

// js
// Copy
// Edit
// let str = "banana";
// console.log(str.indexOf("a"));      // 1
// console.log(str.lastIndexOf("a"));  // 5
// 🔹 6. slice(start, end)
// Extracts part of a string and returns it.

// js
// Copy
// Edit
// let str = "JavaScript";
// console.log(str.slice(0, 4)); // "Java"
// 🔹 7. substring(start, end)
// Similar to slice() but doesn’t accept negative indexes.

// js
// Copy
// Edit
// let str = "JavaScript";
// console.log(str.substring(4, 10)); // "Script"
// 🔹 8. replace() / replaceAll()
// Replaces part of the string with another string.

// js
// Copy
// Edit
// let str = "I love JavaScript";
// console.log(str.replace("love", "like")); // "I like JavaScript"
// js
// Copy
// Edit
// let text = "apple, banana, apple";
// console.log(text.replaceAll("apple", "mango")); // "mango, banana, mango"
// 🔹 9. split(separator)
// Splits the string into an array based on a delimiter.

// js
// Copy
// Edit
// let str = "a,b,c";
// console.log(str.split(",")); // ["a", "b", "c"]
// 🔹 10. charAt(index)
// Returns the character at a specified index.

// js
// Copy
// Edit
// let str = "Hello";
// console.log(str.charAt(1)); // "e"
// 🔹 11. startsWith() / endsWith()
// Checks if a string starts or ends with a given substring.

// js
// Copy
// Edit
// let str = "JavaScript";
// console.log(str.startsWith("Java")); // true
// console.log(str.endsWith("Script")); // true
