var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var getPrice = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var newCartItem = {};
    newCartItem[item] = getPrice(1,100);
    cart.push(newCartItem);
    console.log(`${item} has been added to your cart.`);
    return cart
}

function viewCart() {
  var cartContents = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    if (cart.length === 1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
    }
    else if (cart.length === 2) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
    }
    else {
      var cartMessage = "In your cart, you have";
      for (var i = 0; i < cart.length; i++) {
        if (i === cart.length -1) {
          cartContents.push(` and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`)
        }
        else {
          cartContents.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
        }
      }
      console.log(cartMessage + cartContents);
    }
  }
  cartContents = []
}

function total() {
  var cartTotal = 0
  for (var i = 0; i < cart.length; i++) {
    cartTotal += cart[i][Object.keys(cart[i])]
  }
  return cartTotal
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  setCart([])
}
