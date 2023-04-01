//  сума чисел між  А і В 

let A = Number(prompt("Введіть число A"));
let B = Number(prompt("Введіть число B (B>A)"));
let sum = 0;

while (A >= B) {
    alert("Ваші дані неправильні. Буква B має бути більшою за букву A.");
    A = Number(prompt("Введіть число A"));
    B = Number(prompt("Введіть число B (B>A)"));
}

for (let i = A; i <= B; i++) {
    sum = sum + i; // sum += i;
}

let exitMessage = `Sum of numbers between ${A} and ${B} is ${sum}`;
console.log(exitMessage);
alert(exitMessage);



// цикл від більшого до меншого

for (let i = 10; i >= 0; i--) {
    console.log(i);
}


// трикутник

let rows = Number(prompt("Put number of rows"));
let rowContent;
for (let i = 0; i < rows; i++) {
    rowContent = '';
    for (let j = 0; j <= i; j++) {
        rowContent += '*';
    }
    console.log(rowContent);
}


// прямокутник


let C = Number(prompt("Введіть число C"));
let D = Number(prompt("Введіть число D"));

let rowContent1 = '';

for (let i = 0; i < C; i++) {
    for (let j = 0; j < D; j++) {
        rowContent1 = rowContent1 + '*';
    }

    rowContent1 += '\n';
}
console.log(rowContent1);



// дні тижня


let weekDay = prompt("Введіть день тижня");

switch (weekDay.toUpperCase()) {
    case "ВІВТОРОК":
    case "ЧЕТВЕРГ":
        alert("У вас сьогодні заняття");
        console.log("У вас сьогодні заняття 1");
        break;
    case "ПОНЕДІЛОК":
    case "СЕРЕДА":
    case "П'ЯТНИЦЯ":
    case "СУБОТА":
    case "НЕДІЛЯ":
        alert("У вас сьогодні вільний день");
        console.log("У вас сьогодні вільний день 2");
        break;
    default:
        alert("Значення введено не правильно");
        console.log("Значення введено не правильно");

}




// планети 


let planetName = prompt("Введіть назву планети");

switch (planetName.toUpperCase()) {
    case "МЕРКУРІЙ":
    case "ВЕНЕРА":
    case "ЗЕМЛЯ":
    case "МАРС":
    case "ЮПІТЕР":
    case "САТУРН":
    case "УРАН":
    case "НЕПТУН":
        alert(`Планета ${planetName} знаходиться в Сонячній системі`);
        console.log(`Планета ${planetName} знаходиться в Сонячній системі`);
        break;

    default:
        alert(`Планета ${planetName} НЕ знаходиться в Сонячній системі`);
        console.log(`Планета ${planetName} НЕ знаходиться в Сонячній системі`);
}


// смайли


let smile = [':)', '=)', ':)', '=)', ':)', '=)'];

for (let i = 0; i < smile.length; i++) {
    if (smile[i] == '=)') {
        smile[i] = ';)';
    }
}

console.log(smile);