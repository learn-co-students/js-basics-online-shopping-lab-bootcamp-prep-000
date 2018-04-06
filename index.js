var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName: "newItem", itemPrice: newItemPrice })
  var itemName = ( [] )
  var itemPrice = Math.floor((Math.random() * 100) + 1)
  return `${itemName} has been been added to your cart`
}

function viewCart() {
  var newCart = []
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
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
