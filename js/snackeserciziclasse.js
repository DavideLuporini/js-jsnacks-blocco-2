console.log('js ok')

// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

const number = [];
let sum = 0;

// for (i = 0; i <= 5; i++) {
//     let numbers = prompt('inserisci un numero');
//     sum += parseInt(numbers);
//     console.log(sum);
// }


let i = 0
while (i < 6) {
    let numbers = prompt('inserisci un numero');
    sum += parseInt(numbers);
    console.log(sum)


    i++
}



// metodo do while

// let i = 0
// do {


//     while (i < 6) {
//         let numbers = prompt('inserisci un numero');
//         sum += parseInt(numbers);
//         console.log(sum)


//         i++
//     }
// }

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
//  Gatsby vuole generare una falsa lista di 3 invitati.


const nomi = ['Giulio', 'Davide', 'Vasco', 'Federico']
const cognomi = ['Spugnini', 'Luporini', 'Rossi', 'Venturini']

let invitati = [];
let numeroCasuale1 = Math.floor(Math.random() * 4 + 0)
let numeroCasuale2 = Math.floor(Math.random() * 4 + 0)

for (i = 0; i <= nomi.length; i++) {
    invitati.push = nomi[numeroCasuale1] + ' ' + cognomi[numeroCasuale2]

    console.table(invitati)
}



let i = nomi.length
while (i < 6) {
    let numbers = prompt('inserisci un numero');
    sum += parseInt(numbers);
    console.log(sum)


    i++
}