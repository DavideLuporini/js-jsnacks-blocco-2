// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro



let firstGroup = [20, 13, 19]
let secondGroup = [100, 15, 81, 97];

while (firstGroup.length < secondGroup.length) {
    const number = Math.floor(Math.random() * 100);
    firstGroup.push(number);
}

console.log(firstGroup)
console.log(secondGroup)
console.log(firstGroup.lenght)
console.log(secondGroup.lenght)