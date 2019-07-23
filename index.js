var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random()*100)
 var newItem = {itemName,itemPrice}
 cart.push(newItem);
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  var finalString = ["In your cart, you have"];
  var theFinalString = []
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  var sentenceArray = []
  var priceArray = []
  for(var i = 0; i < cart.length; i++){
    var keys = Object.keys(cart[i])[0]
    var values = Object.keys(cart[i])[1]
    sentenceArray.push(cart[i][keys])
    priceArray.push(cart[i][values])
     }
  for(i = 0; i < cart.length; i++){
    if(cart.length === 1){
      return `${finalString} ${sentenceArray[i]} at $${priceArray[i]}.`
    }
    else if(i === cart.length - 1){
      return `${finalString} and ${sentenceArray[i]} at $${priceArray[i]}.`
    }
    else{
      finalString = finalString + " " + `${sentenceArray[i]} at $${priceArray[i]},`
    }
  }
}

function total() {
  var totalPrice = 0
  for(var i = 0; i < cart.length; i++){
    var values = Object.keys(cart[i])[1]
    totalPrice += cart[i][values]
  }
  return totalPrice
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var finalWord = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    for(var i = 0; i <cart.length; i++){
    cart.pop(cart[i])
    }
    return finalWord
  }
}
