var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price
  do {
    price = Math.floor(Math.random() * 100)
  } while (price === 0) // test to make sure price is nonzero
  var object = {itemName: item, itemPrice: price}

  cart.push(object)
  return `${object.itemName} has been added to your cart.`
  
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty." 
  } else {
    var aString = "In your cart, you have "
    aString = aString + `${cart[0].itemName} at $${cart[0].itemPrice}`
    if (cart.length > 1) { // run through the array if it has more than one element
      for(var i = 1; i < cart.length; i++) { // Start at the second element.
        aString = aString + ", "
        if (i === cart.length - 1) { // test if this is the last iteration of the for loop
          aString = aString + "and "
        }
        aString = aString + `${cart[i].itemName} at $${cart[i].itemPrice}`
        }
      }
    aString = aString + "."
    return aString
  }
}
function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total = total + parseInt(cart[i].itemPrice)
  }
  return parseInt(total)
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var aString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return aString
}