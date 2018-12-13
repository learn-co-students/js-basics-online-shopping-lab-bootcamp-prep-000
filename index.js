var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {
   itemName: item,
   itemPrice: randomInt(1, 100)
 }
 cart.push(newItem);
 return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  var rtnStr = "In your cart, you have "
  for (var i = 0; i < cart.length; i++) {
    if (i == (cart.length - 1) && i != 0) {
        rtnStr = rtnStr.concat("and ")
    }
    rtnStr = rtnStr.concat(cart[i].itemName).concat(" at $").concat(cart[i].itemPrice).concat(", ")
  }
  rtnStr = rtnStr.substr(0, rtnStr.length - 2).concat(".")
  return rtnStr
}

function total() {
  var totalVal = 0;
  for (var i = 0; i < cart.length; i++) {
    totalVal += cart[i].itemPrice
  }
  return totalVal
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var totalVal = total()
  cart = []
  return `Your total cost is $${totalVal}, which will be charged to the card ${cardNumber}.`
}

function randomInt(min, max) // min and max included
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//console.log(addToCart("eggs"))
//console.log(addToCart("apples"))
//console.log(addToCart("oranges"))
//console.log(viewCart())
//console.log("Total value: " + total())
//var toFind = {itemName: 'apples', itemPrice: randomInt(1, 100)}
//console.log(removeFromCart('oranges'))
