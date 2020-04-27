
let shoppingCart = [];
class Product {
  constructor(pricePerPiece, amount) {
    // this.name = name;
    this.pricePerPiece = pricePerPiece;
    this.amount = amount;
    this.totalPrice = function () {
      let productsCost = this.pricePerPiece * this.amount;
      return productsCost;
    };
  }
}
let carrot = new Product(5, 2);
let apple = new Product(3, 4);
let banana = new Product(7,3);


shoppingCart.push(carrot.totalPrice());
shoppingCart.push(apple.totalPrice());
shoppingCart.push(banana.totalPrice());

let totalCart = shoppingCart.reduce((a,b)=> a+b);
console.log(totalCart);


//OR WITH CLASSES

// class Cart {
//   constructor() {
//       this.items = [];
//   }

//   add(product) {
//       this.items.push(product);
//   }

//   getTotalAmount() {
//       let sum = 0;

//       this.items.forEach(i => {
//           sum += i.getPrice();
//       });

//       return sum;
//   }
// }

// const cart = new Cart();

// class Product {
//   constructor(name, price) {
//       this.name = name;
//       this.price = price;
//   }
// }
// const carrot = new Product("carrot", 5);
// const apple = new Product("apple", 3);
// const banana = new Product("banana", 7);

// class CartItem {
//   constructor(product, quantity) {
//       this.product = product;
//       this.quantity = quantity;
//   }

//   getPrice() {
//       return this.product.price * this.quantity;
//   }
// }
// // Adding 2 carrots, 3 bananas and 4 apples

// cart.add(new CartItem(carrot, 2));
// cart.add(new CartItem(apple, 4));
// cart.add(new CartItem(banana, 3));

// console.log(cart.getTotalAmount());
