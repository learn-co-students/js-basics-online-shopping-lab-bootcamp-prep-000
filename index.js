var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {itemName:`${item}`, itemPrice:(Math.random() * Math.floor(100))};
 cart.push(newItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else if (cart.length >= 3){
    
    var returnString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice},`;
    
    for (var i = 1; i < (cart.length - 1); i ++) {
      returnString = returnString.concat(` ${cart[i].itemName} at $${cart[i].itemPrice},`)
    }
    
    returnString = returnString.concat(` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`);
    
    return returnString;
  }
  
  
}

function total() {
  var returnNumber = 0;
  for (var i = 0; i < cart.length; i++){
    returnNumber = returnNumber + cart[i].itemPrice;
  }
  return returnNumber;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart
    }
  }
  
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var returnString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = [];
  return returnString;
}
