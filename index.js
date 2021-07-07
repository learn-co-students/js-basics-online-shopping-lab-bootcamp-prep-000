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
  var data = new Object()
  data = {}
  var price = 0
  price = Math.floor(Math.random()*99 + 1)
  data = { 'itemName': item, 'itemPrice': price }
  cart.push(data)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
    var response = "In your cart, you have "
    for (var count = 0 ; count < (cart.length - 1) ; count++){
      response += `${cart[count].itemName} at $${cart[count].itemPrice}, `
    }
    response += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    return response
  }
}

function total() {
  // write your code here
  var total = 0
  for (var count = 0 ; count < cart.length ; count++){
    total += cart[count].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var count = 0 ; count < cart.length ; count++){
    if (cart[count].itemName === item){
      cart.splice(count,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  var balance = total()
  if (typeof cardNumber === "undefined"){
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else {
    while (cart.length != 0){
      cart.splice(0,1)
    }
    return `Your total cost is $${balance}, which will be charged to the card ${cardNumber}.`
  }
}

//my tests
//addToCart('daikon')
//addToCart('nariz')
//addToCart('a')
//addToCart('b')
//console.log(viewCart())
//removeFromCart('a')
//console.log(viewCart())
//console.log(total())
//console.log(placeOrder())
//console.log(placeOrder(12345))
