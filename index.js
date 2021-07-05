var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random()*100) + 1
  var cartItem = {}
  cartItem.itemName = item
  cartItem.itemPrice = price
  cart.push(cartItem)
  return `${item}` + " has been added to your cart."
}

function viewCart() {
  var words = "In your cart, you have "
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return words + cart[0].itemName + " at $" + cart[0].itemPrice + "."
  } else if (cart.length === 2) {
    return words + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + "."
  } else {
    var threePlus = ""
    for ( var i = 0 ; i < cart.length ; i++ ) {
      if ( i < cart.length-1) {
        threePlus += cart[i].itemName + " at $" + cart[i].itemPrice + ", "
      } else {
        threePlus = threePlus + "and " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
      }
    }
    return words + threePlus
  }
}

function total() {
  let x = 0;
  for (var i = 0; i < cart.length ; i ++) {
    x += cart[i].itemPrice
  }
  return x
}

function removeFromCart(item) {
  let z = false
  for (var i = 0; i < cart.length ; i ++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1)
      z = true
    } else {
      z = false
    }
  }
  if (z === true) {
    return cart
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  let x = total()
  cart.splice(0,cart.length)
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    return "Your total cost is $" + x + ", which will be charged to the card " + cardNumber + "."
  }
}
