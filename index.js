var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var newItem = {[item]: itemPrice};
  cart.push(newItem);
  return cart;
  console.log(`${newItem[item]} has been added to your cart.`);
}

function viewCart() {
  if (cart.length > 0) {
    var items = [];
    for (var i = 0; i < cart.length; i++) {

      console.log(`In your cart, you have ${} at $${}`)
    }
  } else {
     console.log("Your shopping cart is empty.");
  }
}

function total() {
  for (var i = 0; i < cart.length; i++) {
    return // total of items in cart itemPrice?
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (!cart[i] === item) {
      console.log("That item is not in your cart.");
      return cart;
    } else {
      return cart.splice(item);
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
