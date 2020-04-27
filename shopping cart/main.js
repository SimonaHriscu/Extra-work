const Product = require('./models/product');
const CartItem = require('./models/cartItem');
const Cart = require('./models/cart');

const cart = new Cart();

const carrot = new Product("carrot", 5);
const apple = new Product("apple", 3);
const banana = new Product("banana", 7);


// Adding 2 carrots, 3 bananas and 4 apples

cart.add(new CartItem(carrot, 2));
cart.add(new CartItem(apple, 4));
cart.add(new CartItem(banana, 3));

console.log(cart.getTotalAmount());
