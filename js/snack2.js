// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

const number = parseInt(prompt('Inserisci un numero'));
let solution = 0;
let i = 0;

while (i < 1) {
    if (number % 2 == 0) {
        console.log(number);
        solution = number;
    } else {
        console.log(number + 1);
        solution = number + 1;
    }
    i++;

}

console.log(solution);