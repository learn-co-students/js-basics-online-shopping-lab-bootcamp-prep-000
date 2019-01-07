var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 10);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  } else {
    var cartString = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        cartString += `${[item]} at $${cart[i][item]}`;
        if (i == cart.length - 1) {
         cartString += ".";
        } else {
          cartString += ", ";
        }
      }
    }
    console.log(cartString);
    return;

  }
}

function removeFromCart(item) {
  var itemExists = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemExists = true;
      cart.splice([item], 1);
    }
  }
  if (itemExists) {
    delete cart[item];
    return cart;
  } else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
