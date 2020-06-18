var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  let itemObj = {"itemName": item, "itemPrice": getRandomInt(100)} 
  
  cart.push(itemObj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  var inCart = "In your cart, you have"

  for (let i = 0; i < cart.length; i++) {
    
    if (cart.length === 1) {
      inCart = `${inCart} ${cart[i].itemName} at \$${cart[i].itemPrice}.`
    } else if (i === parseInt(cart.length) - 1) {
      inCart = `${inCart} and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
    } else {
      inCart = `${inCart} ${cart[i].itemName} at \$${cart[i].itemPrice},`
    }
  }
  
  return inCart
}


function total() {
  var tally = 0
  for (let i=0; i < cart.length; i++) {
    tally = tally + cart[i].itemPrice
  }
  return tally
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you."
  }
  let transaction = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return transaction
}
