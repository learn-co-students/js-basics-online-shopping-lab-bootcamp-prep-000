var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function addToCart(item) {
 // write your code here
 var object = {itemName: item, itemPrice: getRandomInt(1, 100)}
 getCart().push(object)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (getCart().length === 0) {
    return 'Your shopping cart is empty.'
  }
  var res = 'In your cart, you have'
  for (var i=0; i<getCart().length; i++) {
    if ((i===(getCart().length-1)) && i>0) {
      res += ' and' 
    }
    res += String(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    if (i===getCart().length-1) {
      res += '.'
    } else {
      res += ','
    }
  }
  return res
}

function total() {
  // write your code here
  var res = 0
  for (var i=0; i<getCart().length; i++) {
    res += parseInt(getCart()[i].itemPrice)
  }
  return res
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i < getCart().length; i++) {
    if (item === getCart()[i].itemName) {
      getCart().splice(i, 1)
      return getCart()
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  var sum = total()
  if (cardNumber === null || sum===0) {
    return "Sorry, we don't have a credit card on file for you."
  }
  setCart([])
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}
