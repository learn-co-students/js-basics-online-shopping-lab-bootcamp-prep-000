var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)}
  cart.push(itemObject)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var strings = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; ++i) {
      strings +=`${cart[i].itemName} at $${cart[i].itemPrice}`
      strings += i == cart.length - 2 ? ", and " : ", "
    }
    strings +=`${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return strings
  }
}

function total() {
  var val = 0
  for(var i = 0; i < cart.length; ++i)
    val += cart[i].itemPrice
  return val
}

function removeFromCart(item) {
  if(cart.length === 0) {
    return "That item is not in your cart."
  } else {
    for(var i = 0; i < cart.length; ++i)
      if(cart[i].itemName == item)
        cart.splice(i, 1)
    return cart
  }
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    var amount = total()
    cart = []
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
