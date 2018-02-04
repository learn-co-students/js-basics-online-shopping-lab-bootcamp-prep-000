var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart[item] = Math.floor(Math.random()*100);
 console.log(`${item} has been added to your cart.`)
}

// In your cart you have
// something at $2
// (and ... / ,something at $3)

function viewCart() {
  var response
  if (cart.length > 0) {
    response = `In your cart, you have ${Object.keys(cart)[0]} at ${Object.values(cart)[0]}`

      for (var i = 1; i < cart.length - 1; i++) {
        response = response + `, ${Object.keys(cart)[i]} at ${Object.values(cart)[i]}`
      }
      response = response + `and ${Object.keys(cart)[cart.length + 1]} at ${Object.values(cart)[cart.length + 1]}`

  } else {
    response = "Your shopping cart is empty.";
  }
  return response;
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
