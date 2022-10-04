// JavaSript

/* 
    Multi-line comment macOS: cmd - shift - a
    Multi-line comment Win: alt - shift - a
    
    JS was founded in 1996 by Brandon Eich
    - clint side language (runs in the browser)
    - interpreted, not compiled
    - first-class-cuntion - functions are treated like any other variable
    -prototype-based Object Oriented
    - ECMAScript is an organization setting language standards
*/

// Comments

/* 
    Blocks of code that are not being interpreted.
    Denoted by // for single line
    denoted by /* for multi line
    Comments get read but are not executed
    As students, it helps us take notes
    As devs, it documents our code making it more maintainable

*/

// Data Types

/* 
    JS Data Tyes:
        Primitive
            *String
            *Number
            *Boolean
            *Null
            *Undefined
            *notAnumber (NaN)
        Reference
            *Array
            *Object
*/

// String

/* 
    Primitive data type representing characters (text)
    Enclosed in '' "" or ``

    Examples
*/

console.log("This is a text")
console.log('This is also a text')
console.log(`This is a text as well 2 + 17`)

//  We can add (Concatenate) strings

console.log("Justin" + "Dorey")

// Strings are immutable but their characters are indexed, beginning at 0.
console.log("Justin" + "Dorey"[0])

// Typeof operator - returned data type

console.log(typeof "Text") // returns strin
console.log(typeof true) // returns boolean
console.log(typeof 25) // returns number

// Numbers

console.log(25)
console.log(3.14)

console.log (0.2 + 0.1) // See Discord for explanation

console.log(010)  // returns 8. Precluding zero is for octet numbering system

// Booleans

/* 
    Two values: true (on) or false (off)
    Examples of flase values:
        * empty string
        * 0
        * undefined
        * null
    Most common return statement for checking something, ex: using comparison operator
*/

console.log(2 ==2) // returns true
console.log(2 == "2") // returns true

// The above example is due to Type Coercion

/* 
    JS is a weakly typed programming language.
    It doesn't require data type definition.
    For that reason, if it quacks like a duck, it's a duck.

    The comparison ()==) operator does type coercion on the number and turns its data type into a string. Then it adds (concatenates) the two.
*/


console.log(2 == 2) // returns true

console.log(2 == "2") // returns true

// The above example is due to Type Coercion
/* 
    JS is a weakly typed programming language.
    It doesn't require data type definition.
    For that reason, if it quacks like a duck, it's a duck.
    The comparison (==) operator does type coercion on the number and turns its data type into a string. Then it adds (concatenates) the two. 
*/

// Operators

/* 
    * Addition (+)
    * Substraction (-)
    * Multiplication (*)
    * Division (/)
    * Exponent (**)
    * Dot (.)
    * Assignment(=)
    * Comparison (==)
    * Strict Comparison (===)
*/

// Assignment - assigns something to something (ex: value to a variable)
let myName = "Paul"
console.log(myName)
// Comparison - traditional equal sign. It checks if the left value is equal to right value. It does not care for data types.
console.log(5 == 7) // returns false
// Strict Comparison - checks for values and data type.
console.log(5 == "5") // returns true left value and right value are the same thanks to type coercion
console.log(5 === "5") // returns false. Values identical but data types different (int !== str)

// Expressions - unprocessed values within (). Covered in conditionals

// Modulo "%"
// Checks for the remainder of long division

console.log(12 % 5)  // returns 2