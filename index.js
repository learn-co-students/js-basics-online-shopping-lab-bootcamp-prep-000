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
 const price = Math.floor(Math.random() * 100)
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var l = cart.length
  if(l < 1) {
    console.log("Your shopping cart is empty.")
  } else {
    var inYourCart = "In your cart, you have ";
    for (var i = 0; i < l; i++) {
      for (var item in cart[i]) {
        inYourCart += `${item} at $${cart[i][item]}`;
        if (l === 2 && i !== 1) {
          inYourCart += ' and '
        } else if (i < l - 2) {
          inYourCart += ', '
        } else if (i === l - 2) {
          inYourCart += ', and '
        }
      }
    }
   console.log(`${inYourCart}.`);
  }
  return cart
}

function total() {
  // write your code here
  var l = cart.length
  var totalCost = 0;
  for (var i = 0; i < l; i++) {
    for (var item in cart[i]) {
        totalCost += cart[i][item];
    }
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  var l = cart.length
  for (var i = 0; i < l; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        cart.splice(i, 1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
