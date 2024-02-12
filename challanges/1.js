// import readline from "read-console-input"
// const name = readline("vad heter du:")
// console.log("hej" + name)

// const a = Number(readline("tal 1: "))
// const b = Number(readline("tal 2: "))
// console.log(a + b)

import readline from "read-console-input"
let array = [1, 2, 3, 4]
console.log("start värde: " + array)

const a = Number(readline("skriv in första index: "))
const b = Number(readline("skriv in andra index: "))

if (a >= 0 && a < array.length && b >= 0 && b < array.length) {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
    console.log("slutvärde efter att ha bytt plats på index " + a + " och " + b + ": " + array)
}






