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
 cart.push({[item] : Math.floor(Math.random()*100+1)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var items = []
  var itemAtPirce = []
  for (var i = 0; i < cart.length; i++) {
    items.push(Object.keys(cart[i]))
    itemAtPirce.push(`${items[i]} at $${cart[i][items[i]]}`)
  }
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${itemAtPirce[0]}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${itemAtPirce[0]} and ${itemAtPirce[1]}.`)
  } else {
    var lastItemInCart = itemAtPirce.pop()
    var itemsInCart = itemAtPirce.join(", ") + `, and ${lastItemInCart}`
    console.log(`In your cart, you have ${itemsInCart}.`)
  }
}

function total() {
  // write your code here
  var value = 0
  for (var i = 0; i < cart.length; i++) {
    value += cart[i][Object.keys(cart[i])]
  }
  return value
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.");
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
