var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var itemName = {[item]:itemPrice};
  cart.push(itemObj);
  return `${itemName} has been added to your cart.`;
}

function viewCart() {
  var cartItem = [];
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1){
    return `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  }
  else if(cart.length === 2){
    return `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and {Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  }
  else{
    for(var i = 0; i < cart.length - 1; i++){
      cartItem.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
    return `In your cart, you have ${cartItem}, and ${Object.keys(cart[cart.length - 1])} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])]}.`
  }
}

function total() {
  var itemPriceEach = []
  var itemPriceTotal = 0
  for(var i = 0; i < cart.length; i++){
    var itemPrice = cart[i][Object.keys(cart[i])]
    itemPriceEach.push(itemPrice)
  return itemPriceTotal
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber){
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    for(var i = cart.length; i >= 0; i--){
      cart.pop();
    }
  }
  else{
      return "Sorry, we don't have a credit card on file for you."
  }
}
