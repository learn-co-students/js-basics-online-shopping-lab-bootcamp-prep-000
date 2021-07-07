var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var object = {
  itemName: item,
  itemPrice: Math.floor(Math.random() * 101) 
  }
  
  cart.push(object)
  
  return (`${item} has been added to your cart.`)
}


function viewCart() {
if (cart.length === 0) {
  return ("Your shopping cart is empty.")}
else {
  var numarray = []
  for (var i = 0; i < cart.length; i++) {
    if (i+1 == cart.length && cart.length !== 1) {
      numarray.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`)}
    else 
      {numarray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)}
  }
  var str = numarray.join(`, `)
  return ('In your cart, you have ' + str + ".")
}
}


function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else {
    var newtotal = total()
    cart = []
    return `Your total cost is $${newtotal}, which will be charged to the card ${cardNumber}.`
  }
}
