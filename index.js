var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100),
  });
  return item + " has been added to your cart.";
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return "In your cart, you have " + Object.key(cart[0]).itemName + " at " + Object.key(cart[0]).itemPrice) + ".";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  cart.delete
}
