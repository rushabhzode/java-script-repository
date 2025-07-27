
       //PRIMITIVE DATA TYPES//



// In simple words, **primitive data types** in JavaScript
//  are the **basic building blocks of data** — 
// they hold **single values** (not objects) 
// and are **not changeable** (immutable).

// Here are the **7 primitive data types** in JavaScript:

// ---

// ### 1. **String**

// * Represents **text**.
// * Example: `"hello"`, `'world'`

// ```js
// let name = "Rushabh";
// ```

// ---

// ### 2. **Number**

// * Represents **numbers**, both whole and decimal.
// * Example: `10`, `3.14`

// ```js
// let age = 25;
// ```

// ---

// ### 3. **Boolean**

// * Represents **true** or **false**.
// * Often used in conditions.
// * Example: `true`, `false`

// ```js
// let isLoggedIn = true;
// ```

// ---

// ### 4. **Undefined**

// * A variable that has been declared but **not given a value**.
// * Example: `undefined`

// ```js
// let city;
// console.log(city); // undefined
// ```

// ---

// ### 5. **Null**

// * Represents **nothing** or **empty value** (manually set).
// * Example: `null`

// ```js
// let car = null;
// ```

// ---

// ### 6. **Symbol** (ES6)

// * Represents a **unique value**, often used as object keys.
// * Mostly used in advanced JavaScript.

// ```js
// let id = Symbol("id");
// ```

// ---

// ### 7. **BigInt** (ES2020)

// * Used for **very large numbers** beyond `Number.MAX_SAFE_INTEGER`.

// ```js
// let bigNumber = 1234567890123456789012345678901234567890n;
// ```

// ---

// ### Summary Table:

// | Type      | Example        | Description                |
// | --------- | -------------- | -------------------------- |
// | String    | `"hello"`      | Text                       |
// | Number    | `42`           | Numbers                    |
// | Boolean   | `true`         | True or False              |
// | Undefined | `undefined`    | No value assigned          |
// | Null      | `null`         | Empty / nothing            |
// | Symbol    | `Symbol("id")` | Unique and immutable value |
// | BigInt    | `123n`         | Very large integers        |

// Let me know if you want examples of each with `typeof` too!
//************************************************************ 

          // NON-PRIMITIVE DATA TYPES//

// In **simple words**, **non-primitive data types** in JavaScript are used to **store collections of values** or **more complex data**. They are **changeable (mutable)** and are **objects by nature**.

// ---

// ### ✅ **What makes them different from primitive types?**

// * They **can hold multiple values**.
// * They are **reference types** (stored by reference, not by value).
// * All non-primitive types are **objects** in JavaScript.

// ---

// ### 🧱 Main Non-Primitive Data Types:

// ---

// ### 1. **Object**

// * Used to store data in **key-value pairs**.
// * Very flexible and commonly used.

// ```js
// let person = {
//   name: "Rushabh",
//   age: 25
// };
// ```

// ---

// ### 2. **Array**

// * A **special type of object** for storing **ordered list** of values.

// ```js
// let fruits = ["apple", "banana", "mango"];
// ```

// ---

// ### 3. **Function**

// * A **block of code** that performs a task when called.
// * In JavaScript, functions are also objects.

// ```js
// function greet() {
//   console.log("Hello!");
// }
// ```

// ---

// ### 4. **Date, RegExp, Map, Set, WeakMap, WeakSet, etc.**

// * These are **built-in object types** for specific purposes.

// Examples:

// ```js
// let date = new Date();        // Date object
// let map = new Map();          // Map object
// let regex = /abc/;            // RegExp object
// ```

// ---

// ### 📦 Summary Table:

// | Type     | Example                   | Description             |
// | -------- | ------------------------- | ----------------------- |
// | Object   | `{name: "Tom", age: 30}`  | Stores key-value pairs  |
// | Array    | `["a", "b", "c"]`         | Ordered list of items   |
// | Function | `function() {}`           | Reusable block of code  |
// | Others   | `new Date()`, `new Map()` | Special-purpose objects |

// ---

// ### 🔑 Important Note:

// * When you copy a **primitive** value, you get a **copy**.
// * When you copy a **non-primitive**, you're copying the **reference (link)**, not the actual data.

// ---

// Let me know if you want a visual example of reference vs value!



// COMPARISON OPERATORS


// Absolutely! Here's a helpful **table of types of values** and what you get when you use the `typeof` operator in JavaScript:

// ---

// ### ✅ **JavaScript `typeof` Table**

// | Value                    | Type (using `typeof`) | Description                                  |
// | ------------------------ | --------------------- | -------------------------------------------- |
// | `"hello"`                | `string`              | Text (string of characters)                  |
// | `42`                     | `number`              | Number (integer or float)                    |
// | `3.14`                   | `number`              | Decimal number                               |
// | `true` / `false`         | `boolean`             | Logical true or false                        |
// | `undefined`              | `undefined`           | Variable declared but not assigned           |
// | `null`                   | `object` ❗            | Special object value (this is a known quirk) |
// | `{}`                     | `object`              | Plain object                                 |
// | `[]`                     | `object`              | Array (also an object)                       |
// | `function() {}`          | `function`            | A function                                   |
// | `Symbol("id")`           | `symbol`              | Unique value (ES6)                           |
// | `12345678901234567890n`  | `bigint`              | BigInt (for very large integers)             |
// | `NaN`                    | `number`              | Not a Number, but still of type number       |
// | `Infinity` / `-Infinity` | `number`              | Positive or negative infinity                |
// | `boolean(true)`         | `boolean`             | Boolean value                                |

// ---

// ### 🧪 Example Code:

// ```js
// console.log(typeof "hello");     // "string"
// console.log(typeof 42);          // "number"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"
// console.log(typeof null);        // "object"  <-- JS bug
// console.log(typeof {});          // "object"
// console.log(typeof []);          // "object"
// console.log(typeof function(){});// "function"
// console.log(typeof Symbol());    // "symbol"
// console.log(typeof 123n);        // "bigint"
// ```

// ---

// Let me know if you want a printable cheat sheet version too!
