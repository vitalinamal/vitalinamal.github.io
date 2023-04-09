let figures = [
  {
    figure: "Square",
    sizeA: 4,
    sizeB: 4,
  },
  {
    figure: "Rectangle",
    sizeA: 4,
    sizeB: 8,
  },
];

function area(arrayOfObjects) {
  for (let object of arrayOfObjects) {
    object.areaValue = object.sizeA * object.sizeB;
  }
}

area(figures);

console.log(figures);

////////////////////////// remove

let array = ["Keep","Remove","Keep","Remove","Keep","Keep","Remove","Remove"];

console.log(array.filter((n) => n != "Remove"));

// ////////////////////////// catConstructor + Age

function CatsConstructor(age, nameCats, breed, color) {
  this.age = age;
  this.nameCats = nameCats;
  this.breed = breed;
  this.color = color;
}

let firstCat = new CatsConstructor(2, "Mario", "Bengal", "Red");
let secondCat = new CatsConstructor(1, "Tom", "Bombay", "Black");
let thirdCat = new CatsConstructor(3, "Cheeks", "Munchkin", "White");

let cats = [firstCat, secondCat, thirdCat];
cats.forEach((cat) => console.log(cat));

let youngestToOldestCats = cats.sort((a, b) => a.age - b.age);
console.log(youngestToOldestCats);

let oldestToYoungestCats = cats.sort((a, b) => b.age - a.age);
console.log(oldestToYoungestCats);

// //////////////////////////////////////// обмін валют

let userMoneyInHryivna = Number(prompt("Type amount of money: "));

let bank = [
  {
    currency: "usa",
    price: 38,
  },
  {
    currency: "eur",
    price: 39,
  },
  {
    currency: "zlt",
    price: 10,
  },
];

let userMoneyInAllValutes = []

bank.forEach((b) => {
  switch (b.currency) {
    case "usa":
      let usaAmount = userMoneyInHryivna / b.price;
      userMoneyInAllValutes.push(`For ${userMoneyInHryivna} UAH you can get ${usaAmount} USD`);
      break;
    case "eur":
      let eurAmount = userMoneyInHryivna / b.price;
      userMoneyInAllValutes.push(`For ${userMoneyInHryivna} UAH you can get ${eurAmount} EUR`);      
      break;
    case "zlt":
      let zltAmount = userMoneyInHryivna / b.price;
      userMoneyInAllValutes.push(`For ${userMoneyInHryivna} UAH you can get ${zltAmount} PLN`);      
      break;
    default:
      console.log("We don't have defined this currency");
  }
});

console.log(userMoneyInAllValutes);

// //////////////////////////////////////// камінь/ ночниці / папір

let userChoice;
let choices = ["камінь", "ножниці", "папір"];

function checkUserChoice(userChoice) {
  return userChoice.toLowerCase() == 'камінь' || userChoice.toLowerCase() == 'ножниці'  || userChoice.toLowerCase() == 'папір';
}

do {
  userChoice = String(prompt("Введіть слово (камінь/ножниці/папір)"));
} while (!checkUserChoice(userChoice));


let computerChoiceIndex =  Math.floor(Math.random() * choices.length);
let computerChoice = choices[computerChoiceIndex];

alert(`Computer chosed: ${computerChoice}`);

let gameResultMessage;

if (userChoice == computerChoice) {
  gameResultMessage = "It's a tie!";
} else if (userChoice == "камінь" && computerChoice == "ножниці") {
  gameResultMessage = "Player wins!";
} else if (userChoice == "папір" && computerChoice == "камінь") {
  gameResultMessage = "Player wins!";
} else if (userChoice == "ножниці" && computerChoice == "папір") {
  gameResultMessage = "Player wins!";
} else {
  gameResultMessage = "Computer wins!";
}

alert(gameResultMessage);

