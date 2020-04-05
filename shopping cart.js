
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
let carrot = new Product(3, 2);
let potato = new Product(2,2);
let onion = new Product(1,3);
let garlic = new Product(0.5, 5);

shoppingCart.push(carrot.totalPrice());
shoppingCart.push(potato.totalPrice());
shoppingCart.push(onion.totalPrice());
shoppingCart.push(garlic.totalPrice());
let totalCart = shoppingCart.reduce((a,b)=> a+b);
console.log(totalCart);


