var cart = [];
var h

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var a = Math.floor(Math.random() * 100) + 1
 var b = {itemName: item, itemPrice: a}
 cart.push(b)
 return `${item} has been added to your cart.`
}

function viewCart() {
var d = cart.length
if (d === 0) {
  return "Your shopping cart is empty."
}
else if (d === 1) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
}

else {
  var e = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  var f
  for (f=1; f<d-1; f++) {
    e += `, ${cart[f].itemName} at $${cart[f].itemPrice}`
  }
  e += `, and ${cart[d-1].itemName} at $${cart[d-1].itemPrice}.`
  return e
}
}

function total() {
  var g = cart.length
  h = cart[0].itemPrice
  var i
  for (i=1;i<g;i++) {
    h += cart[i].itemPrice
  }
  return h
}

function removeFromCart(item) {
  var j = cart.length
  var k = 0
  var l = j
  while (k<j && l === j) {
    if (cart[k].itemName === item) {
      cart.splice(k, 1)
      l--
    return cart
    }
    else {k++}
    }
    if (k === j) {
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    var m = total()
    cart = []
    return `Your total cost is $${m}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
