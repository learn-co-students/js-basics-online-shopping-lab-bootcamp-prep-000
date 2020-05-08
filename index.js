var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1
  cart.push({itemName : item, itemPrice : price})
  
  return `${item} has been added to your cart.`
  
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  
  let msg = cart.map(item => ` ${item.itemName} at $${item.itemPrice}`).join()
  let index = msg.lastIndexOf(",")
  
  return `In your cart, you have${msg.substring(0, index + 1)} and ${msg.substring(index + 2)}.`
}

function total() {
  return cart.reduce((acc, o) => acc + o.itemPrice, 0)
}

function removeFromCart(item) {
  let element = cart.filter(o => o.itemName === item)[0]
  if (element) {
    cart.splice(cart.indexOf(element), 1)
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  let charge_amount = total()
  cart = []
  return `Your total cost is $${charge_amount}, which will be charged to the card ${cardNumber}.`
}
