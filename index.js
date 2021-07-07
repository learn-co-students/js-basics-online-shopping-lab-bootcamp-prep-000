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
 var price = Math.floor(100 * Math.random() + 1)
 var newObj = {
    itemName: item, itemPrice: price
 }
 cart.push(newObj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  var outputString = "In your cart, you have "
  for(var i = 0; i < cart.length; i++){
    if(cart.length === 1){
      outputString += `${cart[i].itemName} at $${cart[i].itemPrice}.`
    }else{
      if(i === cart.length - 1){
        outputString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }else{
        outputString += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
  }
  return outputString
}

function total() {
  // write your code here
  var totalPrice = 0;
  for(var i = 0; i < cart.length; i++){
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var finalPrice = total()
    while(cart.length > 0){
      cart.pop()
    }
    return `Your total cost is $${finalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
