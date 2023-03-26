
// порівняння значень

let numberFirstValue = 5;
let numberSecondValue = 5;

console.log(numberFirstValue == numberSecondValue);
console.log(numberFirstValue === numberSecondValue);


let yearFirstValue = 2010;
let yearLastValue = 2023;

console.log(yearFirstValue == yearLastValue);
console.log(yearFirstValue === yearLastValue);


let nameFirst = "Anna";
let nameSecond = "Anna";

console.log(nameFirst == nameSecond);
console.log(nameFirst === nameSecond);


let lineFirst = 20;
let lineSecond = "20";

console.log(lineFirst == lineSecond);
console.log(lineFirst === lineSecond);


//  середнє арифметичне 

let firstNumber = 10;
let secondNumder = 12;
let thirdNumber = 14;

let sumNumber = 3;

let resultValue = (firstNumber + secondNumder + thirdNumber) / sumNumber;

console.log(resultValue);
// console.log((firstNumber + secondNumder + thirdNumber) / sumNumber);



// розрахунок зі знижкою

let discountValue = prompt("Розмір знижки (%)", "10");
let priceValue = 12999;

let resulte = (Number(priceValue) * Number(discountValue)) / 100;

console.log(resulte);