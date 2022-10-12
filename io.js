//  IO & Callbacks

/* 
    * Process is an ecent that currently runs in the foreground or backgroundd on your local machine

    * Node.js allows access to its processes via a process object.

    * This allows us to process external input and internal output (io)

    * We do this by using process.stdin and process.stdout
*/


// import { stdin, stdout} from "node:process"

// Import statement
let process = require("process")

console.log(`This is an output. From Node process PID: ${process.pid}`)

// process.stdin.once("data", (input) => {
//     console.log("This is our input being repeated", input.toString())
// })

//  .on() method allows us to continually listen to a signal
//  (1)   (2) (3)   (4)                (5)
// process.stdin.on("data", (input) => console.log(input.toString()))

//  1. Node's Process Interface
//  2. Standard In Data Stream
//  3. Event Listener
//  4. Event we're listening for
//  5. Callback function that runs when the event occurs

// function callBackFn(input) {
//     console.log(input.toString())
// }

// process.stdin.once("data", callBackFn())

console.log("Code executed after")

/* 
    Let's setup a listen on a stdin so that when we type something, node will reply with wht we say + the word butts.
*/

// function handleInput(input) {
//     console.log(input.toString().trim() + " ...butts.")
//     process.stdin.once("date", thanksForPlaying)
// }

// function thanksForPlaying(input) {
//     console.log(input.toString().trim() + "... thanks for playing!")
//     process.exit()
// }

// process.stdin.once("date", handleInput)
// console.log("What is your name?")
// process.stdin.on("data", (input) => {
//     process.stdout.write(`The name is ${input.toString()}`)
// })

// process.stdin.once("data", handleInput)

const readline = require("readline")

let rl =readline.createInterface({input: process.stdin, output: process.stdout})

// let num1 = Math.floor((Math.random() * 10) + 1)
// let num2 = Math.floor((Math.random() * 10) + 1)
// let solution = num1 + num2

// rl.question(`What is the sum of ${num1} & ${num2}`, (input) => {
//     if (input.trim()  == solution) {
//         rl.setPrompt("Correct!")
//         rl.prompt()
//         rl.close()
//     }
// })

// // Readline Event Listeners
// rl.on("close", () => {console.log("Thanks for playing")})



let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor', 'bowser', 'dracula', 'eggman', 'shredder'];


rl.question("Who are you? ", (input) => {
    if (enemyList.includes(input.toLowerCase().trim())) {   
      rl.setPrompt("Be gone you Villian!!")
      rl.prompt()
      rl.close()
    } 
    else if (input.toLowerCase().trim() == "luke skywalker") {
        rl.setPrompt(`Hello ${input}, may the force be with you!`)
        rl.prompt()
        rl.close()
    }
    else {
      rl.setPrompt(`Hello ${input}, you are a wonderful friend.`)
      rl.prompt()
      rl.close()
    }
  })