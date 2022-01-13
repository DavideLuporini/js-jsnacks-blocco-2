console.log('js ok')

// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

const number = [];
let sum = 0;


// # EX WITH FOR
// for (i = 0; i < 5; i++) {
//     let numbers = prompt('inserisci un numero');
//     sum += parseInt(numbers);
//     console.log(sum);
// }


// # EX WITH WHILE
let i = 0
while (i < 5) {
    let numbers = prompt('inserisci un numero');
    sum += parseInt(numbers);
    console.log(sum)


    i++
}