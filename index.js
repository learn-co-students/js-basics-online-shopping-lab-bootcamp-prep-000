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

var addToCart = function (item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price}) /// XXX This is really dumb - cart should be an object!
  console.log(`${item} has been added to your cart.`)
  return cart
}

var viewCart = function () {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var strItems = []
    for (var item in cart) {
      let product = Object.keys(cart[item]).join()
      let price = cart[item][product]
      strItems.push(product + " at $" + price)
    }
    console.log(`In your cart, you have ${strItems.join(', ')}.`)
  }
}

var getCart = function () {
  return cart
}


var removeFromCart = function (rmItem) {
  // Write code for deleting an existing item
  var posInCart;
  var ii=0;
  while (ii < cart.length) {
     if (Object.keys(cart[ii]).join() === rmItem) {
       posInCart = ii
       break;
     }
     ii++
  }

  if (posInCart === undefined) {
    console.log('That item is not in your cart.')
  } else {
    cart.splice(posInCart, 1);
  }
}

var placeOrder = function (ccNum) {
  if (ccNum === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)
  }
  // Empty the cart
  cart = []
}
