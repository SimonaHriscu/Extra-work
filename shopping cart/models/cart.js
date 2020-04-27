module.exports = class Cart {
    constructor() {
        this.items = [];
    }

    add(product) {
        this.items.push(product);
    }

    getTotalAmount() {
        let sum = 0;

        this.items.forEach(i => {
            sum += i.getPrice();
        });

        return sum;
    }
}