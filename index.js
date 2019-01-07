var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemInfo = {[item]: getRandomInt(100)}
  cart.push(itemInfo)
  var string = `${item} has been added to your cart.`
  console.log(string);
  return cart
}

function viewCart() {
  var call = "In your cart, you have"
  var string = "Your shopping cart is empty."
  if (cart.length === 0) {
    console.log(string)
  }
  else if (cart.length === 1) {
    var item = Object.keys(cart[0])[0]
    string = ` ${item} at $${cart[0][item]}.`
    call += string
  }
  else if (cart.length === 2) {
    var items = [Object.keys(cart[0])[0], Object.keys(cart[1])[0]]
    string = ` ${items[0]} at $${cart[0][items[0]]} and ${items[1]} at $${cart[1][items[1]]}.`
    call += string
  } else {
    var k = 0
    var items = []
    for(var i = 0; i < cart.length - 1; i++) {
      items.push(Object.keys(cart[i])[0])
      string = ` ${items[i]} at $${cart[i][items[i]]},`
      call += string
      k = i + 1
    }
    items.push(Object.keys(cart[k])[0])
    string = ` and ${items[k]} at $${cart[k][items[k]]}.`
    call += string
  }
  console.log(call);
}

function total() {
  var price = 0
  var items = []
  for(var i = 0; i < cart.length; i++) {
    items.push(Object.keys(cart[i])[0])
    price += cart[i][items[i]]
  }
  return price
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(Object.keys(cart[i])[0] === item) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)]
      return cart
    }
  }
  var string = "That item is not in your cart."
  console.log(string)
}

function placeOrder(cardNumber) {
  var string = ""
  var cartTotal = total()
  if(typeof cardNumber === 'undefined') {
    string = "Sorry, we don't have a credit card on file for you."
  }
  else {
    string = `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
  cart = []
  console.log(string)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
