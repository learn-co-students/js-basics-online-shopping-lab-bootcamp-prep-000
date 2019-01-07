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
 var price = Math.floor(Math.random() * 100)
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var totalReport = "In your cart, you have"
  var products = []
  for(let i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i])[0]
    var itemPrice = cart[i][itemName]
    products.push(`${itemName} at $${itemPrice}`)
  }
  
  if(products.length === 1) {
    console.log(`${totalReport} ${products[0]}.`)
    return cart
  }
  
  if (products.length === 2) {
    console.log(`${totalReport} ${products.join(' and ')}.`)
    return cart
  }
  
  if (products.length >= 3) {
    var last = products.pop()
    products.push(`and ${last}`)
  }
  
  console.log(`${totalReport} ${products.join(', ')}.`)
  return cart
}

function total() {
  // write your code here
  var total = 0
  for(let i = 0; i < cart.length; i++) {
    total += Object.values(cart[i])[0]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
   for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
   }
   console.log("That item is not in your cart.")
   return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return cart
  }
  
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
}
