var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = {itemName: item, itemPrice: Math.floor(Math.random() * 101)};
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
  var item = {itemName: name, itemPrice: Math.floor(Math.random() * 101)}
  cart.push(item)
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else if (cart.length === 2) {
    for (var counter = 0; counter < cart.length; counter++) {
       return `In your cart, you have ${getCart()[counter].itemName} at $${getCart()[counter].itemPrice}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}.`
    }
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
