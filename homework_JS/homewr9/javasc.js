window.onload = () => {

    // //////////////////////// TASK 1///////////////////////////////////////////////////////////
    function deleteDivsAndHideButton() {
        let elements = document.querySelectorAll('.taskOneChild');
        elements.forEach(e => {
            e.remove();
        });

        let deleteButton = document.querySelector("#taskOneDeleteButtuon");
        deleteButton.remove();
    }

    function addDiv() {
        let taskOne = document.querySelector(".taskOne");

        let taskOneChildren = document.querySelectorAll(".taskOneChild");

        let div = document.createElement('div');
        div.className = 'taskOneChild';
        div.innerHTML = taskOneChildren.length + 1;

        taskOne.appendChild(div);

        let deleteButton = document.querySelector("#taskOneDeleteButtuon");

        let buttonsDiv = document.querySelector('.buttons');

        if (deleteButton == null && taskOneChildren.length >= 5) {
            let deleteButtonElement = document.createElement('button');
            deleteButtonElement.innerHTML = 'Delete divs';
            deleteButtonElement.setAttribute('id', 'taskOneDeleteButtuon');
            deleteButtonElement.addEventListener('click', deleteDivsAndHideButton)
            buttonsDiv.appendChild(deleteButtonElement);
        }
    }

    let btn = document.querySelector("#taskOneButton");

    btn.addEventListener('click', addDiv);



    // /////////////////////////// TASK 2 / TASK 3//////////////////////////////////////////////////

    let products = [];

    class ProductClass {
        constructor(nameProduct, amount) {
            this.nameProduct = nameProduct;
            this.amount = amount;
        }

    }

    let button = document.querySelector(".add");

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function showProducts() {
        let productsDiv = document.querySelector('#products');
        removeAllChildNodes(productsDiv);

        products.forEach(p => {
            let pEl = document.createElement('p');
            pEl.innerHTML = `${p.nameProduct} ${p.amount}`
            productsDiv.appendChild(pEl);
        });
    }

    function inputList() {
        let nameProduct = document.querySelector(".productChoose");
        let amount = document.querySelector(".amountChoose");

        if (amount == null || amount == '' || nameProduct == null || nameProduct == '') {
            alert('Name and amount cannot be empty');
            return;
        }

        let productValue = new ProductClass(nameProduct.value, amount.value);

        products.push(productValue);

        let taskTwoAndThree = document.querySelector(".taskTwoAndThree");

        let productsButton = document.querySelector('#productsButton');
        if (productsButton == null && products.length > 3) {
            let productsButtonElement = document.createElement('button');
            productsButtonElement.innerHTML = 'Show products';
            productsButtonElement.setAttribute('id', 'productsButton');
            productsButtonElement.addEventListener('dblclick', showProducts)
            taskTwoAndThree.appendChild(productsButtonElement);
        }
        nameProduct.value = '';
        amount.value = '';
        alert('Product added!');
    }
    button.addEventListener("click", inputList)

    // task 4 //////////////////////////////////////////////////////////////////

    let shoppingItems = [];

    class ShoppingItem {
        constructor(name, createdAt) {
            this.name = name;
            this.createdAt = createdAt;
        }

    }

    function disableAndChangeBackground(id) {
        let shopItemDiv = document.querySelector(`#shop-item-${id}`);
        shopItemDiv.setAttribute('style', 'background-color: gray;');

    }

    function addToBasket() {
        let shoppingList = document.querySelector("#shoppingList");
        let shoppingItemInput = document.querySelector(".shoppingItem");


        let shopItem = new ShoppingItem(shoppingItemInput.value, new Date())
        shoppingItems.push(shopItem);
        let currentIndex = shoppingItems.length;
        let shopItemDiv = document.createElement('div');
        shopItemDiv.setAttribute('id', `shop-item-${currentIndex}`);
        let pEl = document.createElement('li');
        pEl.innerHTML = `${shopItem.name} ${shopItem.createdAt}`;
        pEl.className = "list-group-item";
        let buttonEl = document.createElement('button');
        buttonEl.innerHTML = 'BUY';
        buttonEl.className = "btn btn-primary";
        buttonEl.setAttribute('id', `shop-item-button-${currentIndex}`);
        buttonEl.addEventListener('click', function () { disableAndChangeBackground(currentIndex) });
        shopItemDiv.append(pEl, buttonEl);
        shoppingList.appendChild(shopItemDiv);
    }

    let basketButton = document.querySelector("#addBasketButton");
    basketButton.addEventListener('click', addToBasket);

    let taskFour = document.querySelector(".taskFour");
    taskFour.className = "p-3";

}






