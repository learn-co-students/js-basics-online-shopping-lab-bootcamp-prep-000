var cart = [];

function randomPrice() {
  return Math.floor((Math.random() * 100) + 1);
}


function getCart(item) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: randomPrice()});
  console.log(`${item} has been added to the cart.`);
  return cart;
}

function viewCart() {
  var message = "In your cart, you have "
  var products = []
  var prices = []
  
  for (let item of cart) {
    products.push(Object.keys(item)[0]);
    prices.push(Object.values(item)[0]);
  }
  
  switch (products.length) {
  case 0:
    return "Your shopping cart is empty."
  case 1:
    return message += `${products[0]} at $${prices[0]}.`;
  case 2:
    return message += `${products[0]} at $${prices[0]} and ${products[1]} at $${prices[1]}.`;
  default:
    for(let i = 0; i < products.length - 1; i++) {
      message += `${products[i]} at $${prices[i]}, `
    }
    return message += `and ${products[products.length -1]} at $${prices[products.length -1]}.`
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
