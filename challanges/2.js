// Skapa ett program som beräknar och visar fakulteten av ett heltal n, där n är ett positivt heltal, större än 0, som användaren anger. Fakulteten av ett heltal n, betecknat som n!, är produkten av alla positiva heltal från 1 till n. Programmet bör låta användaren ange värdet på n och sedan visa resultatet av beräkningen.

// Om användaren anger n = 5, då är fakulteten av 5, betecknad som 5!, lika med produkten av alla positiva heltal från 1 till 5:

// 5! = 5 * 4 * 3 * 2 * 1 = 120
import readline from "read-console-input"
const userinput = Number(readline("skriv in ett index: "))
let useroutput = 1

function calc(number) {
    for (let i = 2; i <= number; i++) {
        useroutput *= i
    }
}
calc(userinput)
console.log("number " + userinput + " is: " + useroutput)