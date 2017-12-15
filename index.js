var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
var newObject = {};
newObject[item] = price;
cart.push(newObject);
console.log(`${item} has been added to your cart.`)
return cart;
}
addToCart(eggs);

function viewCart() {
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  } else {

    var products = [];

    for (let i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])[0];
      let price = cart[i][item];
      products.push(`${item} at $${price}`);
    }


    if (products.length == 1) {
      products;
    } else if (products.length == 2) {
      products = products.join(' and ');
    } else {
      products[products.length - 1] = ', and '.concat(products[products.length - 1]);
      products = products.splice(0, products.length - 1).join(', ') + products[products.length - 1];
    }
  }
  console.log(`In your cart, you have ${products}.`)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here

}
