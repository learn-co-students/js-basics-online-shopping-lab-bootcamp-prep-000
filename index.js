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
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 cart.push({[itemName]: itemPrice});
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    return `In your cart, you have bananas at $${cart[0].itemName}.`
  }
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
