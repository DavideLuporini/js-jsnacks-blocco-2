// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari


const lista1 = [1, 2, 7, 9, 22, 37, 48, 100]

let sum = 0

console.log(lista1)

let i = 0
while (i < lista1.length) {

    if (i % 2 != 0) {
        sum += lista1[i];
    }
    i++;
}
console.log(sum);