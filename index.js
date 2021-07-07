 var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100) + 1 
cart.push(new Object({itemName: item, itemPrice: price}))
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  var array = []
  var newString = "In your cart, you have"
  for(var i = 0; i < cart.length; i++) {
    array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (array.length === 1) {
    newString = newString + array[0] + "."
  }
  else if (array.length === 2) {
    newString = newString + array[0] + ", and" + array[1] + "."
  }
  else if (array.length > 2) {
    var lastItem = array.pop()
    var otherItems = array.join(",")
    newString = newString + otherItems + ", and" + lastItem + "."
  }
  
  return newString
}

function total() {
  // write your code here
   var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice 
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i,1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
