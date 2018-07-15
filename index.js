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
 function getRandomIntInclusive(min, max) {
   min = Math.ceil(min)
   max = Math.floor(max)
   return Math.floor(Math.random() * (max - min + 1)) + min
 }
 var itemObject = {itemName: item, itemPrice: getRandomIntInclusive(1,100)}
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    var cartStr = ''
    
    if (cart.length === 1) {
      return `In your cart, you have ${cart[0]['itemName']} at \$${cart[0]['itemPrice']}.`
    } else {
      for (var i = 0; i < cart.length; i++) {
        if (i === cart.length - 1) {
          cartStr = `${cartStr}and ${cart[i]['itemName']} at \$${cart[i]['itemPrice']}.`
        } else {
          cartStr = `${cartStr}${cart[i]['itemName']} at \$${cart[i]['itemPrice']}, `
        }
      }
      cartStr = `In your cart, you have ${cartStr}`
      return cartStr
    }
  }
}

function total() {
  // write your code here
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i]['itemPrice']
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]['itemName'] === item) {
      cart.splice(i,1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var placeOrderStr = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`
    cart.splice(0)
    return placeOrderStr
  }
  
}
