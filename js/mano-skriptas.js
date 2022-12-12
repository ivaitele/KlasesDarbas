// Pirmoji užduotis
let a = 1;
console.log('Kintamojo a reikšmė: ' + a);
a = 2;
console.log('Kintamojo a reikšmė: ' + a);

//naujas pakeitimasssss

// Antroji užduotis
let vardasPavarde = 'Irmantas Vaitele';
console.log('Mano vardas ir pavardė: ' + vardasPavarde);


// Trecioji uzduotis
const getLastNr = (nr) => parseInt((nr+'').slice(-1))

const count = (metai, menuo, diena) => getLastNr(metai) + getLastNr(menuo) + getLastNr(diena)

const suma = count(1982, 1, 11)

console.log(suma)