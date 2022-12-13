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


let metai = 1982;
let menuo = 1;
let diena = 11;
let gmmd = 'Gimimo data: ' + diena + '-' + menuo + '-' + metai;
console.log(gmmd);
let liekanaMetai = metai % 10;
let liekanaMenuo = menuo % 10;
let liekanaDiena = diena % 10;
let ats = liekanaMetai + liekanaMenuo + liekanaDiena;
console.log('Skaitmenų suma: ' + ats );


const getLastNr = (nr) => parseInt((nr+'').slice(-1))

const count = (metai, menuo, diena) => getLastNr(metai) + getLastNr(menuo) + getLastNr(diena)

const suma = count(1982, 1, 11)

console.log(suma)