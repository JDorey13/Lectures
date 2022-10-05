// ? Loops

/* 
    Allow us to execute a block of code repeatedly until an exit condition has been met.
*/

// ? For loop

/* 
    We set our loop in a way where we can:
        * see where we are in a loop
        * consider the condition we run it against
        * note when we are done with the condition
*/

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

/* 
    Loop Syntax
    for (start; stop; step) {
        code block to execute over each iteration
    }
*/

// Infinite Loop

/* 
    A lack of stop condition causes our loop to never cease
*/

// for (let i = 0;; i++) {
//     console.log(i)
// }
console.log("-----------LOOK HERE----------")
let longWord = "supercalifragilisticexpialidocious"

for (i = 0; i < longWord.length; i++) {
    console.log(longWord[i])
}

let longWordDE = "kraftfahrzeug-haftplifchtversicherung"

// ? for-in loop

/* 
    Allow us to seek an index value of an interable(something that can be looped over) against a condition. For in loops don't require an index number.

    Syntax

    for (item in iterable)
        code block to execute
*/

console.log("-----------LOOK HERE----------")
for (i in longWordDE) {
    console.log(i)
}

// i is a placeholder for information at the time of execution

//  ? for-of loop

let longWordPL = "konstantynopolitanczykowianeczka"

console.log("-----------LOOK HERE----------")
for (i of longWordPL) {
    console.log(i)
}

/* 
    Difference between for-in and for-of in terms of use?
    * for-of only works if an item is indexed like an array or a str
    *for-in allows us to loop over items that are not an array (ex: object)
*/

console.log("-----------LOOK HERE----------")

// Challenge 1

/* 
    Using a for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and console.log each iteration.
*/

for (let i = 2; i > -10; i -= 4) {
    console.log(i)
}

// Challenge 2

/* 
    Loop over the array with a non-traditional array. Console log each animal's respective "sound". (ex: meow for a cat)
*/

console.log("-----------LOOK HERE----------")
let animalArray = ["mouse", "cat", "dog", "bird", "pig"]

for (i of animalArray) {
    if (i === "mouse") {
        console.log("Squeek")
    }
    else if (i === "cat") {
        console.log("meow")
    }
    else if (i === "dog") {
        console.log("bark")
    }
    else if (i === "bird") {
        console.log("tweet")
    }
    else if (i === "pig") {
        console.log("oink")
    }
    
}

// ? While loops

/* 
    Executes a statement inside of a code block provided that the while condition continues to evaluate to true.

    The condition is evaluated before executing the statement.

    Syntax

    while(true) {
        code block executed
    }
*/

let num = 0

while (num <= 100) {
    console.log(num)
    num = num + 1
}

// How to use while to iterate over an

let j = 0

while(j < animalArray.length) {
    console.log(animalArray[j])
    j++

}

// ? Do While

/* 
    Executes code in the do section while a condtion remains true
*/

let k = 0

do {
    console.log(animalArray[k])
    k++
} while (k < animalArray.length)