// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const fakeInvites = []
const lista1 = ['Vasco', 'Davide', 'Giulio', 'Federico']
const lista2 = ['Rossi', 'Luporini', 'Spugnini', 'Venturini']

console.log(lista1)
console.log(lista2)

while (fakeInvites.length < 3) {
    const ranNum1 = Math.floor(Math.random() * lista1.length);
    const ranNum2 = Math.floor(Math.random() * lista2.length)

    const name = lista1[ranNum1];
    const surname = lista2[ranNum2];

    const fakePerson = `${name} ${surname}`;

    fakeInvites.push(fakePerson)

}

console.table(fakeInvites)