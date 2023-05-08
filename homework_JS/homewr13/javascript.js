window.onload = () => {

    // ///////////////// task 1 ////////////////////////////////////////////

    let writeBtn = document.querySelector(".write");

    writeBtn.onclick = function () {
        window.localStorage.setItem('width', screen.width + "px");
        window.localStorage.height = screen.height + "px";
    }

    // ///////////////// task 2 ////////////////////////////////////////////

    // try {
    //     let a = parseInt(prompt('Put a number'));
    //     if (isNaN(a)) {
    //         throw new TypeError('a is not a number');
    //     }
    //     console.log(a);
    // }
    // catch (e) {
    //     console.log('Processing error: ' + e);
    //     alert('Error processed!');
    // }


    // ///////////////// task 3 ////////////////////////////////////////////

    // let radius = Number(prompt("Write the size of the radius of the circle (must be less than 250)"));


    // while (radius > 250) {
    //     alert("The radius of the circle must be less than 250");
    //     radius = Number(prompt("Write the size of the radius of the circle (must be less than 250)"));

    // }

    // function createSvgCircle(width, height, r) {
    //     let svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //     svgEl.setAttribute('width', width);
    //     svgEl.setAttribute('height', height);
    //     svgEl.setAttribute('style', 'border: 2px solid red');
    //     let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    //     circle.setAttribute('cx', r);
    //     circle.setAttribute('cy', r);
    //     circle.setAttribute('r', r);
    //     circle.setAttribute('style', 'fill: none; stroke: blue; stroke-width: 1px;');

    //     svgEl.appendChild(circle);
    //     document.body.appendChild(svgEl);
    // }
    // createSvgCircle(500, 500, radius);

    // ///////////////// task 4 ////////////////////////////////////////////


    let inputValue = document.querySelector(".shopping");
    let btnAdd = document.querySelector(".add");
    let divEl = document.querySelector(".list");

    let shoppingItems = [];

    class ShoppingItem {

        constructor(name) {
            this.name = name;
            this.checked = false;
        }

    }

    function saveToLocalStorage() {
        window.localStorage.setItem('list', JSON.stringify(shoppingItems));
    }

    function getFromLocalStorage() {
        let array = JSON.parse(window.localStorage.getItem('list'));
        return array != null ? array : [];
    }

    function removeItem(id) {
        shoppingItems.splice(id, 1);
        document.getElementById(`shop-item-${id}`).remove();

        saveToLocalStorage();
    }

    function changeStatusOfItem(event, index) {
        if (event.target.checked) {
            shoppingItems[index].checked = true;
        } else {
            shoppingItems[index].checked = false;
        }
        saveToLocalStorage();
    }

    function populateOnLoad() {
        let array = getFromLocalStorage();
        array.forEach(function (element, index) {
            createItemList(element, index);
            shoppingItems.push(element);
        });
    }

    populateOnLoad();

    function createItemList(e, index) {
        let shopItemDiv = document.createElement('div');
        shopItemDiv.setAttribute('id', `shop-item-${index}`);
        shopItemDiv.className = 'form-check';

        let checkBoxEl = document.createElement('input');
        checkBoxEl.className = 'form-check-input';
        checkBoxEl.type = 'checkbox';
        checkBoxEl.checked = e.checked;
        checkBoxEl.id = `list-item-${index}`;
        checkBoxEl.addEventListener('click', (e) => { changeStatusOfItem(e, index) });

        let labelEl = document.createElement('label');
        labelEl.className = 'form-check-label ms-2 me-3';
        labelEl.appendChild(document.createTextNode(e.name));
        labelEl.setAttribute('for', `list-item-${index}`);

        let buttonEl = document.createElement('button');
        buttonEl.innerHTML = 'Remove';
        buttonEl.className = "btn btn-danger btn-sm";
        buttonEl.setAttribute('id', `shop-item-button-${index}`);
        buttonEl.addEventListener('click', function () { removeItem(index) });
        shopItemDiv.append(checkBoxEl, labelEl, buttonEl);
        divEl.className = "p-3 m-0 border-0 bd-example";
        divEl.appendChild(shopItemDiv);
    }

    function addToBasket() {
        let shopItem = new ShoppingItem(inputValue.value);
        let currentIndex = shoppingItems.length;
        shoppingItems.push(shopItem);
        let shopItemDiv = document.createElement('div');
        shopItemDiv.setAttribute('id', `shop-item-${currentIndex}`);
        shopItemDiv.className = 'form-check';

        let checkBoxEl = document.createElement('input');
        checkBoxEl.className = 'form-check-input';
        checkBoxEl.type = 'checkbox';
        checkBoxEl.id = `list-item-${currentIndex}`;
        checkBoxEl.addEventListener('click', (e) => { changeStatusOfItem(e, currentIndex) });

        let labelEl = document.createElement('label');
        labelEl.className = 'form-check-label ms-2 me-3';
        labelEl.appendChild(document.createTextNode(inputValue.value));
        labelEl.setAttribute('for', `list-item-${currentIndex}`);

        let buttonEl = document.createElement('button');
        buttonEl.innerHTML = 'Remove';
        buttonEl.className = "btn btn-danger btn-sm";
        buttonEl.setAttribute('id', `shop-item-button-${currentIndex}`);
        buttonEl.addEventListener('click', function () { removeItem(currentIndex) });
        shopItemDiv.append(checkBoxEl, labelEl, buttonEl);
        divEl.className = "p-3 m-0 border-0 bd-example";
        divEl.appendChild(shopItemDiv);
        inputValue.value = '';
        saveToLocalStorage();
    }

    btnAdd.addEventListener('click', addToBasket);
    btnAdd.className = "btn btn-primary";

    let taskFour = document.querySelector(".taskFour");
    taskFour.className = "p-3";

    inputValue.classList.add('pb-2', 'pt-1', 'bg-info', 'bg-opacity-10', 'border', 'border-info', 'border-start', 'rounded-end', 'rounded-start');
}