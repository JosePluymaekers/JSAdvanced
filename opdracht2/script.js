const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    //hier moeten console.logs komen

    // dit is de hele persoon
    //console.log("Dit is de gehele persoon:", person)

    //dit is de naam
    //console.log("Dit is de naam:", person.name)

    //dit is het geboortejaar
    //console.log("Dit is het geboortejaar:", 2021 - person.age)

    //namen + beroep
    //console.log(person.name, "is van beroep", person.profession)

    // ouder dan 50 jaar
    if (person.age >= 50) {
        console.log(person.name, "is best oud")
    }
}




