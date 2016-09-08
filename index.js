var cart = [];

function getCart () {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  var itemObjects = [];

  for (let i = 0; i < cart.length; i++) {
    let itemObject = cart[i];
    let item = Object.keys(itemObject)[0];
    let price = itemObject[item];

    itemObjects.push(`${item} at \$${price}`);
  }

  console.log(`In your cart, you have ${itemObjects.join(', ')}.`);
}

/*
var cart = [
  { socks: 5 },
  { iPhone: 100 },
  { puppy: 200 }
]
*/

function removeFromCart (item) {

  let inCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      inCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }

  if (!inCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder (cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  }

  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)

  cart = [];
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
