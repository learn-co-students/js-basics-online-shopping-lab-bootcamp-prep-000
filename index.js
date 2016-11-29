var cart;
var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var randNumber = Math.random() * 100;
  var price = Math.floor(randNumber);
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`);
  return cart;
}
//NEED TO WORK ON THIS FUNCTION
function viewCart() {
  var itemsAtCosts = [];
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      itemsAtCosts.push(`${item} at $${cart[i][item]}`);
  }
    console.log("In your cart, you have " + itemsAtCosts.join(", ") + ".");
  }
}}

function removeFromCart(item) {
  var hasItem = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  if (hasItem === false){
      console.log("That item is not in your cart.");
    }
  }


function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  } return t
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } cart = [];
  return cart;
}
