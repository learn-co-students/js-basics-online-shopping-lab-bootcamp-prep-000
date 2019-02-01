var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
  var price = Math.random()* (100 - 1) + 1;
  var itemName = { itemName: item, itemPrice: price};
  cart.push(itemName)
  return `${item} has been added to your cart.`
}
function viewCart() {
  if (cart.length > 0) {
      var string = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    for (var i = 1; i < cart.length; i++) {
      if (i === cart.length-1) {
      string += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else {
        if (i === 1) {
        string += `, ${cart[i].itemName} at $${cart[i].itemPrice}`  
        }
        else {
        string += `, ${cart[i].itemName} at $${cart[i].itemPrice},`
        }
      }
      }
      return string + "."
    }
    else {
      return "Your shopping cart is empty."
    }
}

function total() {
  let sum = 0
  for (let i in cart){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (var i=0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      return cart.splice(i, 1)
    } 
  }
  return "That item is not in your cart."
}
function total() {
  let sum = 0
  for (let i in cart){
    sum += cart[i].itemPrice
    }
return sum
  }
function placeOrder(cardNumber) {
 var string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
if (isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else { 
    var currentTotal = total()
    cart.splice(0)
    return `Your total cost is $${currentTotal}, which will be charged to the card ${cardNumber}.`
  }
}
