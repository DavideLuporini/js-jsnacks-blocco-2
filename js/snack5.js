// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro



let array1 = [10, 15, 22, 33, 73];
let array2 = [11, 23, 56, 78, 99, 40, 35, 26];


while (array1.length < array2.lenght) {
    let addNum = Math.floor(Math.random() * 10);
    array1.push(addNum);
}


console.log(array1)
console.log(array2)