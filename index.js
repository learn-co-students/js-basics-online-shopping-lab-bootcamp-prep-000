var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {
  "itemName": item,
  "itemPrice": getRandomPrice(),
 }
 cart.push(obj)
 return item + " has been added to your cart."
}

function viewCart() {
  var message = "In your cart, you have "
  var size = cart.length;
  if (size === 0){
    return "Your shopping cart is empty."
  }
  var i = 0
  for (; i < size; i++){
    if(i === 0){
      message += cart[i].itemName + " at $" + cart[i].itemPrice
    } else if (i === (size - 1)){
      message += ", and "
      message += cart[i].itemName + " at $" + cart[i].itemPrice
    } else {
      message += ", " + cart[i].itemName + " at $" + cart[i].itemPrice
    }
  }
  message += "."
  return message
}

function total() {
  var i = 0;
  var total = 0;
  var size = cart.length;
  for(;i < size; i++){
    total += cart[i].itemPrice
  }
  return total
    
}

function removeFromCart(item) {
  var i = 0
  var size = cart.length;
  for(;i < size; i++){
    if(cart[i].itemName.toString() === item.toString()){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var totalCost = total();
  if(cardNumber == null){
    return "Sorry, we don't have a credit card on file for you."
  } else{
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
  
}

function getRandomPrice() {
  return Math.floor(Math.random()*Math.floor(100));
}
