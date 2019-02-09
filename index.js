var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName
  var itemPrice
  var newItem = {};
  newItem[`itemName`] = item
  var price = Math.floor(Math.random()*100)
  newItem[`itemPrice`] = price
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var message = "In your cart, you have"
  var itemName
  var itemPrice
  getCart()
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    message = `${message} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    var i = 0
    for (i=0; i < cart.length ; i++) {
      if (i===cart.length-1) {
        message = `${message} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else {
          message = `${message} ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
    }
  }
  return message
}

function total() {
  var totalCost = 0;
  for (var i=0;i<cart.length;i++) {
    totalCost = cart[i].itemPrice + totalCost
  }
  return totalCost
}

function removeFromCart(item) {

  var findItem = false;
  var output
  for (var i=0; i< cart.length;i++){

    if (item === cart[i].itemName) {
      findItem = true;
      cart.splice(i,1)
    }
 
    }
  if (findItem) {
    output = cart
  } else {
    output = 'That item is not in your cart.'
  }
  
return output
} 


function placeOrder(cardNumber = 0) {
  var message

  if (cardNumber === 0) {
    message =  `Sorry, we don\'t have a credit card on file for you.`
  } else {
    var totalPrice = total()
    cart.splice(0)
    message =  `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
  return message
}
