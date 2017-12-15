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

    var cartContents = [];

    for (let i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])[0];
      let price = cart[i][item];
      cartContents.push(`${item} at $${price}`);
    }


    if (cartContents.length == 1) {
      cartContents;
    } else if (cartContents.length == 2) {
      cartContents = cartContents.join(' and ');
    } else {
      cartContents[cartContents.length - 1] = ', and '.concat(cartContents[cartContents.length - 1]);
      cartContents = cartContents.splice(0, cartContents.length - 1).join(', ') + cartContents[cartContents.length - 1];
    }
  }
  console.log(`In your cart, you have ${cartContents}.`)
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
