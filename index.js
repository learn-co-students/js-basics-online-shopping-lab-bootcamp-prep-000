var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var stuff = {itemName: item, itemPrice: (Math.floor(Math.random()*100)+1)}
  cart.push(stuff)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else {
    var str = "In your cart, you have "
    if (cart.length > 1) {
      var i = 0
    do {
      str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      i++;
    } while (cart.length > i + 1)
    str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    return str
  } else {
    str += `${cart[0].itemName} at $${cart[0].itemPrice}.`
    return str
  }
      }
}

function total() {
    var total = 0
    var i = 0
    while (i < cart.length) {
      total += cart[i].itemPrice
      i++
    }
    return total
  }

function removeFromCart(item) {
  var cartCopy = cart.slice()
  for(let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  var sum = total()
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = []

    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
