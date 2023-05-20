const app = Vue.createApp({
    data() {
        return {
            basket: {
                totalOrder: 0,
                products: new Map(),
                visible: false
            },
            products: [
                {
                    name: 'Milk',
                    quantity: 10,
                    price: '40uah',
                    order: 0,
                    disableButton: false
                },
                {
                    name: 'Bread',
                    quantity: 5,
                    price: '24uah',
                    order: 0,
                    disableButton: false
                },
                {
                    name: 'Candy',
                    quantity: 50,
                    price: '20uah',
                    order: 0,
                    disableButton: false
                },
                {
                    name: 'Cola',
                    quantity: 3,
                    price: '18uah',
                    order: 0,
                    disableButton: false
                }
            ]
        }
    },

    methods: {
        addToOrderAndReduceQuantity(index) {
            this.products[index].order++;
            this.products[index].quantity--;
            if (this.products[index].quantity == 0) {
                this.products[index].disableButton = true;
            }
            const productName = this.products[index].name;
            if (this.basket.products.has(productName)) {
                const currentProduct = this.basket.products.get(productName);
                currentProduct.quantity++;
                currentProduct.price += parseInt(this.products[index].price)
            } else {
                const basketProduct = {
                    quantity: 1,
                    price: parseInt(this.products[index].price)
                }
                this.basket.products.set(productName, basketProduct);
            }
            this.basket.totalOrder += parseInt(this.products[index].price);
        },
        showHideBasket() {
            this.basket.visible = !this.basket.visible;
        }

    },

    computed: {

    }
})

app.mount("#app");