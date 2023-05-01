window.onload = () => {
    let formEl = document.querySelector('.first');

    let validUsername = 'user';
    let validPassword = '123456';
    let totalPrice = {
        priceSize: 0,
        extrasPrice: [],
        deliveryPrice: 0
    };

    let loginInputEl = document.querySelector("[name='login']");
    let passwordInputEl = document.querySelector("[name='password-data']");
    let submitButtonEl = document.getElementById('submitButton');

    let pizzaFormDiv = document.querySelector('.pizzaForm');
    let loginDiv = document.querySelector('.loginDiv');


    function checkInputs() {
        if (loginInputEl.value.length > 0 && passwordInputEl.value.length > 0) {
            submitButtonEl.removeAttribute('disabled');
        } else {
            submitButtonEl.setAttribute('disabled', true);
        }
    }

    loginInputEl.addEventListener('keyup', checkInputs)
    passwordInputEl.addEventListener('keyup', checkInputs)

    formEl.onsubmit = function (e) {
        let loginName = document.querySelector("[name='login']").value;
        let loginPassword = document.querySelector("[name='password-data']").value;
        e.preventDefault();

        if (loginName == validUsername && loginPassword == validPassword) {
            loginDiv.style.display = 'none';
            pizzaFormDiv.style.display = 'block';
        } else {
            alert('Username or password not valid!');
            loginInputEl.value = "";
            passwordInputEl.value = "";

        }
    }


    let pizzaOne = document.getElementById('pizzaOne');
    let pizzaTwo = document.getElementById('pizzaTwo');
    let pizzaThree = document.getElementById('pizzaThree');
    let pizzaFour = document.getElementById('pizzaFour');
    let pizzaOnePrices = [150, 200, 225];
    let pizzaTwoPrices = [170, 200, 225];
    let pizzaThreePrices = [180, 220, 250];
    let pizzaFourPrices = [210, 270, 300];

    pizzaOne.addEventListener('click', () => { populateSizes(pizzaOnePrices) });
    pizzaTwo.addEventListener('click', () => { populateSizes(pizzaTwoPrices) });
    pizzaThree.addEventListener('click', () => { populateSizes(pizzaThreePrices) });
    pizzaFour.addEventListener('click', () => { populateSizes(pizzaFourPrices) });

    function populateSizes(prices) {
        let selectEl = document.getElementById('price');
        let pricePizzaDiv = document.querySelector('.price-pizza');
        while (selectEl.options.length > 0) {
            selectEl.remove(0);
        }

        function getSize(elem) {
            switch (elem) {
                case 0:
                    return 'S';
                case 1:
                    return 'M';
                case 2:
                    return 'L';
            }
        }

        for (let i = 0; i < prices.length; i++) {
            let opt = document.createElement('option');
            opt.value = prices[i];
            opt.innerHTML = `Size ${getSize(i)}, price: ${prices[i]} $`;
            selectEl.appendChild(opt);
        }


        pricePizzaDiv.style.display = 'block';
        totalPrice.priceSize = prices[0];
        updateTotalPrice();
    }


    let selectEl = document.getElementById('price');
    selectEl.addEventListener('change', addSizePriceToTotal);

    function addSizePriceToTotal() {
        totalPrice.priceSize = parseInt(selectEl.value);
        updateTotalPrice();
    }

    let onionEl = document.getElementById('onion');
    let pineappleEl = document.getElementById('pineapple');
    let cheeseEl = document.getElementById('cheese');
    let olivesEl = document.getElementById('olives');

    onionEl.addEventListener('click', (e) => calculateExtraPrice(e));
    pineappleEl.addEventListener('click', (e) => calculateExtraPrice(e));
    cheeseEl.addEventListener('click', (e) => calculateExtraPrice(e));
    olivesEl.addEventListener('click', (e) => calculateExtraPrice(e));

    function calculateExtraPrice(event) {
        let extraPrice = parseInt(event.target.defaultValue);
        if (event.target.checked) {
            totalPrice.extrasPrice.push(extraPrice);
        } else {
            let index = totalPrice.extrasPrice.indexOf(extraPrice);
            if (index > -1) {
                totalPrice.extrasPrice.splice(index, 1);
            }
        }
        updateTotalPrice();
    }

    function updateTotalPrice() {
        let totalPriceEl = document.querySelector('.total h2');
        let priceInTotal = totalPriceWithoutDelivery();
        totalPriceEl.innerHTML = `Total price: ${priceInTotal} $`;
    }

    let buttonNext = document.getElementById('next');
    buttonNext.addEventListener('click', showDeliveryPage);

    let deliveryFormDiv = document.querySelector('.deliveryForm');
    let deliveryEl = document.getElementById('delivery');
    let selfPickupEl = document.getElementById('self-pickup');
    deliveryEl.addEventListener('click', (e) => calculateDeliveryPrice(e));
    selfPickupEl.addEventListener('click', (e) => calculateDeliveryPrice(e));

    let finalFormDiv = document.getElementById('finalForm');
    finalFormDiv.onsubmit = function (e) {
        alert('Your order is on the way');
        e.preventDefault();
        loginDiv.style.display = 'none';
        pizzaFormDiv.style.display = 'block';
        deliveryFormDiv.style.display = 'none';
    }

    function calculateDeliveryPrice(event) {
        totalPrice.deliveryPrice = parseInt(event.target.defaultValue);
        updateFinalPrice();
    }

    function showDeliveryPage() {
        pizzaFormDiv.style.display = 'none';
        deliveryFormDiv.style.display = 'block';
        updateFinalPrice();
        let priceWithoutDelivery = totalPriceWithoutDelivery();
        if (priceWithoutDelivery >= 250) {
            deliveryEl.setAttribute('value', '0');
            let deliverySpanEl = document.getElementById('deliverySpan');
            deliverySpanEl.innerHTML = 'Delivery 0 $';
        }
    }

    function updateFinalPrice() {
        let finalPriceEl = document.querySelector('.totalFinal h2');
        let priceInTotal = totalPriceWithoutDelivery();
        finalPriceEl.innerHTML = `Total price: ${priceInTotal} $`;
    }

    function totalPriceWithoutDelivery() {
        let totalPriceExtras = 0;
        totalPrice.extrasPrice.forEach(exp => totalPriceExtras += exp);
        let priceInTotal = totalPrice.priceSize + totalPriceExtras + totalPrice.deliveryPrice;
        return priceInTotal;
    }

}