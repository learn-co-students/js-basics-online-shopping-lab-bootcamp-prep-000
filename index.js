var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  newItem[item] = Math.floor(Math.random()*100);
  cart.push(newItem);

  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var response
  if (cart.length > 0) {
    response = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}`
      if (cart.length > 1) {
        if (cart.length !== 2) {
          response = response + ','
        }
        for (var i = 1; i < cart.length - 1; i++) {
          response = response + ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
        }
        response = response + ` and ${Object.keys(cart[cart.length + - 1])} at $${Object.values(cart[cart.length - 1])}`
      }
      response = response + '.'
  } else {
    response = "Your shopping cart is empty.";
  }
  console.log(response);
  return response
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + parseInt(Object.values(cart[i]));
  }
  return total
}

function removeFromCart(item) {
  var initialLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      cart.splice(i, 1);
    }
  }
  if (cart.length == initialLength) {
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {
  var response;
  if (cardNumber !== undefined) {
    response = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    console.log(response);
  } else {
    response = "Sorry, we don't have a credit card on file for you."
    console.log(response);
  }
  return response;
}
