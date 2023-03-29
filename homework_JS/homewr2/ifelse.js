// калькулятор

let firstNumber = Number(prompt("Type number"));
let secondNumber = Number(prompt("Type one more number"));

let summ = firstNumber + secondNumber;

console.log(`Sum: ${summ}`);


let subtraction = firstNumber - secondNumber;

console.log(`Subtraction: ${subtraction}`);


let multiplication = firstNumber * secondNumber;

console.log(`Multiplication: ${multiplication}`);
let dividing = firstNumber / secondNumber;


if (secondNumber === 0) {
    alert("Operation dividing is not possible");
} else {
    console.log(`Dividing ${dividing}`)
}





// парні значення числа



let i = 0;
console.log('Even numbers till number 20');
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++; 
}




// пароль та логін

let loginValue = prompt("Введіть ваш логін");
let passwordValue = prompt("Введіть ваш пароль");

if (loginValue == 'admin' && passwordValue == 12345) {
    alert("Вітаємо в системі");
    console.log("Right");
}
else {
    alert("Логін та пароль не вірні");
    console.log("Wrong");
}





// тернарний оператор

let userAge = Number(prompt("Ваш вік"));
let resultValue = "";

let done = userAge >= 18 ? resultValue = true : resultValue = false;
console.log(resultValue);





// відсотки 


let numberValue = Number(prompt("Введіть число"));

while (numberValue <= 0) {
    if (numberValue <= 0) {
        alert("Не вірно введено число");
        numberValue = Number(prompt("Введіть число"));
    }
}

let sevenPercent = (numberValue * 7) / 100;
let fivePercent = (numberValue * 5) / 100;
let threePercent = (numberValue * 3) / 100;

if (numberValue >= 10000) {
    console.log(numberValue);
    console.log(`discount 7%: ${sevenPercent}`);
}

else if (numberValue >= 3000) {
    console.log(numberValue);
    console.log(`discount 5%: ${fivePercent}`);
}

else if (numberValue >= 100) {
    console.log(numberValue);
    console.log(`discount 3%: ${threePercent}`);
}

else {
    alert("У вас нема знижки до сплати число яке було введене");
}




