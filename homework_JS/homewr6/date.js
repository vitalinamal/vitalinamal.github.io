// констуруктор / заміна віку

function UserConstructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

UserConstructor.prototype.info = function () {
    console.log(`Your name is ${this.name} and surname is ${this.surname}, your age is ${this.age}`);

}

UserConstructor.prototype.changeField = function (fieldName, newFieldValue) {
    this[fieldName] = newFieldValue;
}

UserConstructor.prototype.changeName = function (name) {
    this.name = name;
}

UserConstructor.prototype.changeSurname = function (surname) {
    this.surname = surname;
}

UserConstructor.prototype.changeAge = function (age) {
    this.age = age;
}

let firstUser = new UserConstructor("Igor", "Kos", 30);
let secondUser = new UserConstructor("Tom", "Williams", 19);
let thirdUser = new UserConstructor("Max", "Miller", 35);

firstUser.info();
firstUser.changeField('age', 32);
firstUser.changeField('name', 'Ivan');
firstUser.info();


// сортування 

let users = [firstUser, secondUser, thirdUser]

let youngestToOldestUsers = users.sort((a, b) => a.age - b.age);
console.log(youngestToOldestUsers);


// значення "name"

let nameValue = String(prompt("Type your name"));

if (nameValue.length > 0) {
    // console.log(nameValue.slice(1, -1));
    console.log(nameValue.slice(0, 1) + nameValue.slice(-1));
}

//  обрізання стрінга 

let nameOfGame = String(prompt('Type name of your favorite game'));

console.log(nameOfGame);

let trimNameOfGame = nameOfGame.trim();
console.log(trimNameOfGame);

let dots = "...";

let shortTrimNameOfGame;

if (trimNameOfGame.length > 10) {
    shortTrimNameOfGame = trimNameOfGame.slice(0, 10);
    shortTrimNameOfGame = shortTrimNameOfGame + dots;
}

console.log(shortTrimNameOfGame);





//  роки ///////////////////////////////////////////////////////////////////////////////////////
let year = Number(prompt("Type year"));

let century = Math.ceil(year / 100);

console.log(`${year}year is ${century} century`);



// дата

function getDayInfo() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dateObj = new Date();
    let month = dateObj.getMonth();
    let day = dateObj.getDay();
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();
    return `Today is ${dayNames[day]},${monthNames[month]} ${date},${year}`;
}

console.log(getDayInfo());


