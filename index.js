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
 var itemObj = {itemName: item, itemPrice: Math.floor(100*Math.random())}
 cart.push(itemObj)
 return `${itemObj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length>=1){
    var start = "In your cart, you have"
    var end = "."
    var middle = []
    for (var i = 0; i< cart.length; i++) {
      var current = cart[i]
      var currentItem = current.itemName
      var currentPrice = current.itemPrice
      var currentOutput = ` ${currentItem} at $${currentPrice}`
      middle.push(currentOutput)
    }  
    if(middle.length > 1){
      var lastPlace = middle.pop()
      var cartOutput = start + middle.toString() + ", and" + lastPlace + end
      return cartOutput
    }
    else {
      var cartOutput2 = start + middle.toString() + end
      return cartOutput2
    }
  }
  else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  var sum = 0
  for(var i = 0; i < cart.length; i++) {
    var currentItem = cart[i]
    var currentPrice = currentItem.itemPrice
    sum += currentPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i<cart.length; i++){
    var currentItem = cart[i]
    if(currentItem.itemName === item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don\'t have a credit card on file for you."
  }
}
