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
  cart.push({[item]:Math.floor(Math.random() * 10)});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    message = "Your shopping cart is empty.";
  } else {
    var message = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      message += Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])];
      if (i === cart.length - 1) {
        message += "."
      } else {
        message += ", "
      }
    }
  }
  console.log(message);
}

function removeFromCart(item) {
  if(cart.length > 0) {
    for(var i = 0; i < cart.length; i++) {
      if(cart[i].hasOwnProperty([item])) {
        cart = cart.slice(0, i).concat(cart.slice(i + 1));
        return cart;
      } else {
        console.log("That item is not in your cart.")
      }
    }
  } else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(card) {
  if (card == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    for(var i = 0; i < cart.length; i ++) {
      cart.pop();
    }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
  }
}
