var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
 cart.push({[item]: getRandomInt(0, 100)});
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var cartItems = []

  if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
  } else if (cart.length > 2) {
      for (var i = 0; i < cart.length - 1; i++) {
         cartItems.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
      }
        console.log(`In your cart, you have ${cartItems.join(', ')}, and ${Object.keys(cart[cart.length - 1])} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])]}.`);
    } else {
        console.log('Your shopping cart is empty.');
  }
}

function total() {
  var i = 0
  var totalCost = 0
  while (i < cart.length) {
    totalCost += parseInt(cart[i][Object.keys(cart[i])])
    i++
  }
  return totalCost
}

function removeFromCart(item) {
  var counter = 0

  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      cart.splice(i, 1);
      counter += 1;
    }
  } if (counter == 0) {
    console.log("That item is not in your cart.");
  }  
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  setCart([])
}
