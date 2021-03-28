
const addTheWordCool = function (array) {
    array.push('Cool');
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]


const amountOfElementsInArray = function (array) {
    return array.length
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// 3


const selectBelgiumFromBenelux = function (array) {
    return array[0]
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"


const lastElementInArray = function (array) {
    return array.slice(-1)[0]
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"


const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    return array.slice(1)
}
const impeachTrumpSplice = function (array) {
    return array.splice(1, 3);
}
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


const stringsTogether = function (array) {
    return array.join((" "))
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"


const array1 = (1, 2, 3)
const array2 = (4, 5, 6)


const combineArrays = function (array1, array2) {
    return array1.concat(array2)
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
  // resultaat: [1,2,3,4,5,6]