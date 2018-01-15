var cart = [];

function randomPrice() {
  return Math.floor((Math.random() * 100) + 1);
}


function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: randomPrice()});
  console.log(`${item} has been added to the cart.`);
  getCart();
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
  var total = 0
  
  for (let item of cart) {
    total += parseInt((Object.values(item)[0]));
  }
  return total;
}

function removeFromCart(name) {
  var index = 0;
  for (let item of cart) {
    
    if name === (Object.keys(item)[0]) {
      cart.splice(index, 1);
    } else {
      console.log("That item is not in your cart.")
    }
  }
  return getCart();
}

function placeOrder(cardNumber) {
  // write your code here
}
