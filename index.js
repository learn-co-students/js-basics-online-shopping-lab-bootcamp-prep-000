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
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length !== 0) {
    var string = 'In your cart, you have'
    for (var i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        string = string.concat(` ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      } else if (i === cart.length - 1) {
        string = string.concat(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      } else {
        string = string.concat(` ${cart[i].itemName} at $${cart[i].itemPrice},`)
      }
    }
    return string
  } else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
  return cart.reduce((sum, c) => {
    return sum += c.itemPrice
  }, 0)
}

function removeFromCart(item) {
  // write your code here
  var inCart = false

  for (var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      inCart = true
    }
  }

  if (inCart === true) {
    cart = cart.filter( c => c.itemName !== item )
    return cart
  } else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
