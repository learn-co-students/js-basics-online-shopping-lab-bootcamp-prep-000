var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return 'Your shopping cart is empty.'
  } else {
    var array = [`In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}`]
    if (cart.length === 1) {
      array.push('.')
      return array.join('')
    } else{
      for (var i = 1; i < cart.length-1; i++) {
        array.push(`${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
      }
      array.push(`and ${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`)
      return array.join(', ')
    }
  }
}


function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i]['itemPrice']
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]['itemName'] === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var total = 0
    for (var i = 0; i < cart.length; i++) {
      total += cart[i]['itemPrice']
    }
    cart = []
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
}
