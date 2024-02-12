// Skapa ett program som genererar och skriver ut de första n Fibonacci-talen, där n är ett heltal som användaren anger.

// Fibonacci-talen är en sekvens av heltal där varje tal är summan av de två föregående talen. Sekvensen börjar oftast med 0 och 1. Så de första Fibonacci-talen är vanligtvis 0, 1, 1, 2, 3, 5, 8, 13, 21, och så vidare.

// Om användaren anger n = 7, då ska programmet generera och skriva ut de första 7 Fibonacci-talen:

// 0, 1, 1, 2, 3, 5, 8
import readline from "read-console-input"
const input = Number(readline("hur många fibonacci til vill du ha: "))
let sum = 0
let nmr1 = 0
let nmr2 = 1

for (let i = 0; i < input; i++) {
    console.log(sum)
    nmr1 = nmr2
    nmr2 = sum
    sum = nmr1 + nmr2
}


