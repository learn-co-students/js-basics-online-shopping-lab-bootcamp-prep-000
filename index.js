var cart = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = getRandomInt(1, 100);
  cart.push({ [item]: itemPrice });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

  var result_str = []

  for (var i = 0; i < cart.length; i++) {
    result_str.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
  var last = result_str.pop();

  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length == 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  } else if (cart.length == 2) {
    console.log("In your cart, you have " + result_str.join(', ') + ' and ' + `${last}.`)
  } else {
    console.log("In your cart, you have " + result_str.join(', ') + ', and ' + `${last}.`)
  }
}

function total() {
  var total = 0

  for (var i = 0; i < cart.length; i++) {
    total += parseInt(Object.values(cart[i]))
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
        cart.splice(i,i)
        return cart
    }
  }

  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
    if (cardNumber) {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = []
    } else {
      console.log("Sorry, we don't have a credit card on file for you.")
    }
}
