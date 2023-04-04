
function evenNumberArrayFilter(arrayValue) {
    let evenNumberArray = [];
    for (let i = 0; i < arrayValue.length; i++) {
        if (arrayValue[i] % 2 == 0) {
            evenNumberArray.push(arrayValue[i]);

        }
    }
    return evenNumberArray;
}

console.log(evenNumberArrayFilter([1, 4, 7, 12, 15, 22, 23, 28]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function buyItems() {
    let itemsToBuy = [];

    for (let i = 0; i < 3; i++) {
        let item = prompt('Put what item you want to buy.');
        itemsToBuy.push(item);
    }

    return itemsToBuy;
}

console.log(buyItems());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sumOfValues(...arrayValues) {
    let sum = 0;
    for (let i = 0; i < arrayValues.length; i++) {
        sum = sum + arrayValues[i];
    }
    return sum;
}

console.log(sumOfValues(1, 2, 3, 4, 5, 6));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function congrat(currentYear, yearBorn) {
    let yearsOld = currentYear - yearBorn;
    return yearsOld;
}

console.log(congrat(2023, 2000));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateMultipleYears(years, yearBorn, callback) {
    let calculatedYears = [];
    for (let i = 0; i < years.length; i++) {
        calculatedYears.push(callback(years[i], yearBorn));
    }
    return calculatedYears;
}

console.log(calculateMultipleYears([2020, 2021, 2022], 2000, congrat));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let productDetail = {
    productName: null,
    price: 0,
    color: null,
    discount: false
};

productDetail.productName = String(prompt('Input product name'));
productDetail.price = Number(prompt('Input product price'));
productDetail.color = String(prompt('Input product color'))
productDetail.discount = String(prompt('Is product discount posible')).toUpperCase() == 'YES' ? true : false;

console.log(productDetail);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function assignCoordinates(object) {
    object.left = Math.random() * 1000;
    object.top = Math.random() * 100;
    return object;
}

let coordinateObject = new Object();

console.log(assignCoordinates(coordinateObject));
console.log(coordinateObject);
