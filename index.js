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
 cart.push(Object.assign({}, {itemName:item, itemPrice:Math.random()* (100 - 1) + 1}))
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if(cart.length === 1) {
    return `In your cart, you have ${cart[0]} at `
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
