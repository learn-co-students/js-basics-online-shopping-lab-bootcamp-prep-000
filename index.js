var cart = {};

function setCart(newCart) {
  cart = newCart;
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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push( { [item]: price });
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var array = [];
  if (cart.length === 0) {
console.log("Your shopping cart is empty.")
} else {
  for (var i = 0; i < cart.length; i++) {
    var itemPrice = cart[i];
    var item = Object.keys(itemPrice);
    var price = itemPrice[item];
    array.push(`${item} at $${price}`);
    console.log(`In your cart, you have ${array.join(', ')}.`)
}
}
}

function removeFromCart(itemName) {
  for (var i = 0; i < cart.length; i++) {
  var itemPrice = cart[i]
  var item = Object.keys(itemPrice)
  if (itemPrice.hasOwnProperty(itemName)) {
    cart.shift(itemPrice)
  }
}
    console.log("That item is not in your cart.")
    return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
