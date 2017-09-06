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
  var itemObject = { [item]: itemPrice };
  cart.push(itemObject)
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  var statement = `In your cart, you have `;
  if(cart.length === 0) {
    return console.log('Your shopping cart is empty.')
  } else {
    for(var i = 0; i < cart.length; i++) {
      statement += `${cart[i]} at $${cart[i]}, `
    }
  }

  return statement.slice(0, statement.length-2,) + '.'
}

function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      sum += cart[i][item]; // cart[i][item] = itemPrice
    }
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
