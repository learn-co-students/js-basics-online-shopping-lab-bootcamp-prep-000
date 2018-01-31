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
 cart.push({[item]: Math.floor(Math.random() * 100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  
  else if (cart.length === 1) {
    console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + ".")
  }
  
  else if (cart.length === 2){
    console.log("In your cart, you have " + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + " and " + Object.keys(cart[1]) + " at $" + cart[1][Object.keys(cart[1])] + ".")
  }
  
  else {
    var items = []
    for (var i = 0; i < cart.length-1; i++) {
    items.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
    }
    
    var threeItems = `In your cart, you have${items}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    
    console.log(threeItems)
  }
}

function total() {
  // write your code here
  var sum = 0
  var i = cart.length
  while (i--) {
    sum += cart[i][Object.keys(cart[i])]
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card "+ cardNumber + ".")
  }
  cart = []
}
