// 1. Importa la tua funzione da names.js

const NameSurname = require("./names");

// 2. Importa la tua funzione da hobbies.js

const hobby = require("./hobbies");

/* 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto */

function newObject() {
    const NameFull = NameSurname("Matteo", "Ventura");
    const hobbys = hobby("Cucinare","Sport","Programmazione");

    return {
        fullName: NameFull,
        hobbies: hobbys
    };
}

console.log(newObject());