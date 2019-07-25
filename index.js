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
  var itemPrice = Math.floor(Math.random()*100)
  cart.push({[item]: itemPrice})
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var string = 'In your cart, you have '
  for (var i = 0; i < cart.length; i++) {
    if (cart.length === 0) {
       string = 'Your shopping cart is empty'
       } else if (i < cart.length - 1) {
      string += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `
    }
    else if (i === cart.length - 1) {
      string += `and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
    }
  }
  return string
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
