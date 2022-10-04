//  ? Conditionals

let ourVariable;
console.log(ourVariable)

let bestFriendName = null

//  ? Falsey Values

/* 
    False value is one that is considered false in Boolean context

    Whenever JS expects a false Boolean it can return one of these six values:

    * false
    * 0
    * "", '', ``
    * undefined
    * null
    * NaN
*/

/* 
    ? If Statement

    We can utilize comparison operators to check if something is true.
*/

let lightSwitch = "on"

if (lightSwitch == "on") {
    console.log("The light is on.")
}

// Conditional () always checks if the value or expression within is truthy.
// If it's truthy, the code in {} will execute. Else, it will skip it.

/* 
    ? Else If Statement

    Allows us to add additional condition if the prior one has not ebeen satisfied.
*/

let temp = 50

if (temp <= 32) {
    console.log("Freezing")
}
// else if (temp){
//     console.log("Logic Error: temp is true but line 52 is also true but won't execute")
// } 
else if (temp  <= 50) {
    console.log("Fall weather")
} 
else if (temp < 60) {
    console.log("Spring weather")
}

/* 
    ? Else Statement
    If all else fails, execute this code.
*/

let season = 6

if (season == 1) {
    console.log("It's spring")
}
else if (season == 2) {
    console.log("It's summer")
}
else if (season == 3) {
    console.log("It's fall")
}
else if (season == 4) {
    console.log("It's winter")
}
else {
    console.log("Supplied value is not one of required ones.")
}

/* 
    ? SYNTAX:

    if (conditionalIsTrue) {
        execute this code block
    }
*/

/* 
    ? Logical Operators NOT AND OR
    * OR Operator (||)
        * true if one of the values is true
    * AND Operator (&&)
        * true if both conditions are true
    * NOT Operator (!)
        * flips the logical operation
*/

// ? OR Operator

season = "spring"

if (season === 1 || season === "spring") {
    console.log("It'spring. Wear a light jacket.")
}
else if (season === 2 || season === "summer") {
    console.log("It's summer. Shorts and a t-shirt")
}
else if (season === 3 || season=== "fall") {
    console.log("It's fall. Back to jeans.")
}
else if (season === 4 || season === "winter") {
    console.log("It's winter. Down jacket mode.")
}

// ? AND Operator

temp = 64.3

if (season === "spring" && temp >= 65) {
    console.log("A nice spring day.")
}
else if (season === "spring" && temp < 65) {
    console.log("It's a chilly spring")
}

// ? NOT Operator

console.log(typeof lightSwitch, lightSwitch, Boolean(lightSwitch))

// if (lightSwitch) {
//     console.log("lighSwitch variable has something truthy in it")
// }

lightSwitch = ""
console.log(typeof lightSwitch, lightSwitch, Boolean(lightSwitch))

// if lightSwitch is not equal to true
// another way to write it
// if (!lightSwitch)
// equivalant of false evaluating to true

if (lightSwitch != true) {
    console.log("Light switch has falsey value")
}

/* 
    Challenge:

    Create a conditional that will check users age and health status
    If they're 17 or younger, they're too young to do anything. But if they're sick, they should see a doctor.
    If they're over 18, they can vote. But if they're sick, they should see a doctor before voting.
    If they're over 21 they can drink. If they're sick, they will not be able to drink
    If they're over 25, they can rent a car. If they're sick they should have someone else drive.
    If neither of these satisfy, state so.
*/

age = 
health = ""

if (age <= 17 && health === "healthy") {
    console.log("You're to young to do anything")
}
else if (age <= 17 && health === "sick") {
    console.log("You should see a doctor")
}
else if (age > 17 && age < 21 && health === "healthy") {
    console.log("You can vote")
}
else if (age > 17 && age < 21 && health === "sick") {
    console.log("You should see a doctor before voting")
}
else if(age >= 21 && age < 25 && health === "healthy") {
    console.log("You can drink")
}
else if(age >= 21 && age < 25 && health === "sick") {
    console.log("You can drink")
}
else if(age >= 25 && health === "healthy") {
    console.log("You can rent a car")
}
else if(age >= 25 && health === "sick") {
    console.log("You should have someone else drive.")
}
else {
    console.log("Does not satisfy all peramiters")
}
