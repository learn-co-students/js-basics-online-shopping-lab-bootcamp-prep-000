var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 cart.push({itemName: itemName, itemPrice: Math.floor(Math.random() * 100) + 1})
 return `${itemName} has been added to your cart.`
 return cart
}

function viewCart() {
  // write your code here
  var statement = 'In your cart, you have'
  var cartItems = []
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2) {
    return statement + ` ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    for (let i = 0; i < cart.length - 1; i++) {
      cartItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return statement + cartItems + `, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
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
