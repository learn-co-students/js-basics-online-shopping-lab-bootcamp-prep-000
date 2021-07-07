
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {}
  obj['itemName'] = item
  obj['itemPrice']= Math.floor((Math.random()*100)+1)
  getCart().push(obj)
  return item + " has been added to your cart."
}

function viewCart() {
  getCart()

  if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else if (cart.length === 2 ) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
    
  } else if (cart.length >= 3) {
    var array = [`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}`] 
    for (let i = 1; i < cart.length - 1 ; i++) {
    array.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    array.push(` and ${getCart()[cart.length -1].itemName} at $${getCart()[cart.length - 1].itemPrice}.`)
    }
    return array.toString()
   
  } else if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < getCart().length; i ++) {
    sum += getCart()[i].itemPrice
  }
  return sum 
}



function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    var string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  getCart().length = 0
  return string 
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
  // write your code here
}

function removeFromCart(item) {
 for (let i = 0; i < getCart().length; i++) {
   if (getCart()[i].itemName === item) {
     getCart().splice(i, 1) 
     return getCart()
   } else {
   }
 }
 return "That item is not in your cart."
}
