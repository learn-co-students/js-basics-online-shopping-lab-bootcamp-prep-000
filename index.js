var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 ) + 1
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if ( cart.length === 1 ) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else if ( cart.length === 2 ) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
    else if ( cart.length >= 3 ) {
      var cartListStart = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, `
      var cartListEnd = `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
      var cartListMiddle = []
      var i = 1
      while (i < cart.length-1 ) {
        cartListMiddle = `${cart[i].itemName} at $${cart[i].itemPrice}, `
        i++
      }
      return cartListStart + cartListMiddle + cartListEnd
    }
    else if (cart.length === 0 ) {
      return "Your shopping cart is empty."
    }
}

function total() {
  var totalPrice = 0
  var i = 0
  while (i < cart.length ) {
    totalPrice = totalPrice + cart[i].itemPrice
    i++
  }
  return totalPrice
}

function removeFromCart(item) {
  for ( let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      var deleteThis = i 
      break
    }
  }
  if ( deleteThis > -1 ) {
    cart.splice(deleteThis, 1)
    return cart
  }
  else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if ( typeof cardNumber === 'undefined' ) {  
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else {
    var totalMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return totalMessage
  }
}
