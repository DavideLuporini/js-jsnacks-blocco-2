// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro



const array1 = [10, 15, 22, 33, 73];
const array2 = [11, 23, 56, 78, 99, 40, 35, 26];

let difference = array1.length - array2.length

console.log(array1.length)
console.log(array2.length)

while (array1.length < array2.lenght) {
    let num = Math.floor(Math.random() * 100);


    array1.push(num);
}


console.log(array1)
console.log(array2)