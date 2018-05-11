var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( { itemName: item, itemPrice: Math.floor(Math.random() * 100) } )
  return `${item} has been added to your cart.`
}

function viewCart() {
  if ( cart.length === 0 ) {
    return "Your shopping cart is empty."
  }
  var cartList = "In your cart, you have "
  for (let i = 0; i < cart.length; i++) {
    cartList += `${cart[i].itemName} at $${cart[i].itemPrice}`
    if ( i === cart.length - 1 ) {
      cartList += `.`
    } else if ( i === cart.length - 2 ) {
      cartList += ', and ' 
    } else {
      cartList += `, `
    }
  }
  return cartList
}

function total() {
  var cartTotal = 0
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice    
  }
  return cartTotal
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if ( cart[i].itemName === item ) {
      cart.splice(i,1)
      return cart
    } 
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if ( cardNumber === undefined ) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var cartTotal = total()
    cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
    
  }
}

addToCart("cheese")
addToCart("biscuits")
addToCart("jam")
console.log(viewCart())