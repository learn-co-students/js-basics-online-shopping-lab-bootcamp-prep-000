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
  var price = Math.floor(Math.random() * 100) + 1;
  var itemy = {};
  itemy["itemName"] = item;
  itemy["itemPrice"] = price;
  cart.push(itemy)
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var blah = []
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  for (var i=0; i < cart.length; i++) {
      blah.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
    }
    return `In your cart, you have ${blah.join(", and ")}.`
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