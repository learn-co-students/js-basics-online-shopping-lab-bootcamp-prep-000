var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 var newItem = {itemName: itemName, itemPrice: itemPrice}
 getCart().push(newItem)
 
  return(`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
var cartItems = new Array()
  for (var item in cart ) {
    cartItems.push(`${cart[item].itemName} at $${cart[item].itemPrice}`)
  }

  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  if (cart.length == 1) {
    return `In your cart, you have ${cartItems}.`
  }
  if (cart.length > 1) {
    var lastItem = cartItems.splice(cart.length - 1, 1)
    var midItems = cartItems.join(', ')
    return `In your cart, you have ${midItems}, and ${lastItem}.`
  }
}

function total() {
  // write your code here
  var totalCartPrice = 0
  for(var item in cart){
    totalCartPrice += cart[item].itemPrice
  }
  return totalCartPrice
}

function removeFromCart(item) {
  // write your code here
  for (var i in cart) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      var itemRemoved = true
    }
  }
  if (itemRemoved) {
    return cart
  } else {
      return "That item is not in your cart."
  } 
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = 0
    for (var i in cart) {
        totalCost += cart[i].itemPrice
        cart.splice(i, 1)
      }
      return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
