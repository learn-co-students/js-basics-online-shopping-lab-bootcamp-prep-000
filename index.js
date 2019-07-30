var cart = []; //empty array

function getCart() {
 return cart; //printing cart
}

function setCart(c) {
  cart = c;
  return cart; 
}

function addToCart(item) {
 var itemName = item
 var itemPrice = Math.floor(Math.random() * 101) + 1 
    /* math.floor ensures a whole number; 
    math.random makes it between 0 and 100; 
    + 1 on the end makes it between 1 and 100 */
 var newItem = {itemName, itemPrice}
 cart.push(newItem)
 return `${itemName} has been added to your cart.`
}

function viewCart() {
    if (cart.length === 0) {
      return "Your shopping cart is empty." 
  }
    else {
      var sentence = "In your cart, you have "
      for (var i = 0; i < cart.length; i++){
        if (i !== 0 && i === cart.length - 1){ 
          // i is NOT equal to 0 AND i IS equal to the second to last cart length (this makes us loop 1+ times)
          sentence += "and "
        }
      sentence += cart[i].itemName + " at $" + cart[i].itemPrice + ", "
      } 
      return sentence.slice(0, -2) + "."
    }
  }

function total() {
  var cartTotal = 0
  for (var i = 0; i < cart.length; i++){
    cartTotal += cart[i].itemPrice //+= aka 0 += 3 = 3
  }
  return cartTotal
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  var orderComplete = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return orderComplete
}
