var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.floor(Math.random() * 100) + 1
  var addItemToCart = {
    itemName: item,
    itemPrice: randomPrice
  }
  cart.push(addItemToCart)
  return `${addItemToCart.itemName} has been added to your cart.`
}

function viewCart() {
  var tempCart = []
  
  for(let i = 0; i < cart.length; i++) {
    tempCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}

function total() {
  let cost = 0
  for (let i = 0; i < cart.length; i++) {
    cost += cart[i].itemPrice
  }
  return cost
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  let totalCost = total()
  if (cardNumber) {
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
