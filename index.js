var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var fullItem = { 
    itemName: item,
    itemPrice:  Math.floor(Math.random() * 100)
  }
  cart.push(fullItem)
  return `${fullItem.itemName} has been added to your cart.`
}

function viewCart() {
  var cartContents = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    for (var i = 0; i < cart.length; i++) { 
    if (cart.length === 1) {
      cartContents.push(` ${cart[i].itemName} at $${cart[i].itemPrice}.`)
    } else if (i === cart.length-1) {
    cartContents.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
    } else {
    cartContents.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }}
  return `In your cart, you have${cartContents}`
}}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) { 
  sum += cart[i].itemPrice
  }
  return sum
  return cart[i]
}

 var cartContents
cart.reduce(itemPrice)


function removeFromCart(item) {
  let cart = getCart()
  for (let i=0; i < cart.length; i++){
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
    return cart
    }
  }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
  return "Sorry, we don't have a credit card on file for you."
  }
  else {
    cart = []
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}

/*
function placeOrder(cardNumber) {
  if (!cardNumber) {
  return "Sorry, we don't have a credit card on file for you."
  }
  else {
    cart = []
  return `Your total cost is ${sum}, which will be charged to the card ${cardNumber}.`
  }
}
*/

/*

function removeFromCart(item) {
  if (!cart.itemName) {
    return "That item is not in your cart."
  }
  else {
  cart.splice(cart.itemName)
  }
return cart
}

*/
/*
function removeFromCart(item) {
  if (cart.includes(cart.itemName)) {
  cart.splice(cart.itemName)
  return cart
  }
  else {return "That item is not in your cart."
  }
}
*/

