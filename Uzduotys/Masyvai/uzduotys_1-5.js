//------Uzduotis 1

let masyvas = ["A", "B", "1", 1, 2, "Vardas", "", [], null];

for(let i = 0; i < masyvas.length; i+=2) {
    let item = masyvas[i];
    console.log(item);
}

//-------Uzduotis 2

let masyvas = ["A", "B", "1", 1, 2, "Vardas", "", [], null];
let kuris_el = 3;
for(let i = 0; i < masyvas.length; i+=kuris_el) {
    let item = masyvas[i];
    console.log(item);
}

//-------Uzduotis 3

const masyvas = ["A", "B", "1", 1, 2, "Vardas", "", [], null];

let TikSkaiciai = (val) => {
    if (typeof(val) === 'number') {
        return val;
    }
}
let skaiciai = masyvas.filter(TikSkaiciai);
console.log(skaiciai);

//--------Uzduotis 4

let masyvas1 = ["A", "B", "1", 1, 2, "Vardas", "", [], null];

let sk_objektu = masyvas1.filter((val) => {
    if ( typeof (val) === 'object' ) {
        return val;
    }
});
console.log(sk_objektu.length);

//-------Uzduotis 5

let masyvas = ["A", "B", "1", 1, 2, "Vardas", "", [], null];

let stringai = masyvas.filter((val) => {
    if ( typeof (val) === 'string' ) {
        return val;
    }
});
let sujungimas = "'"+stringai.join("','")+"'";
console.log(sujungimas);