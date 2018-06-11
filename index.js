var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100 + 1)
 var itemObject = {
  itemName : item,
  itemPrice : price
 }
 cart.push(itemObject);
 return itemObject.itemName + " has been added to your cart.";
  
}

function viewCart() {
  var statement = "In your cart,"
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }else if(cart.length === 1){
    return statement = statement + " you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
  }else {
  for(var i = 0; i < cart.length -1; i++){
    var current = cart[i]
    if(i === 0){
  statement = statement + " you have " + current.itemName + " at $" + current.itemPrice + ", "
    }
    else {statement = statement + current.itemName + " at $" + current.itemPrice + ", "
  }
  }
  return statement = statement  + "and " + cart[cart.length-1].itemName + " at $" + cart[cart.length-1].itemPrice + ".";
  }
}

function total() {
  var total = 0
  for(var i = 0; i< cart.length; i++){
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0; i< cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var final = total()
    console.log("the price " + total)
    cart = []
    return "Your total cost is $" + final + ", which will be charged to the card " + cardNumber +"."
  }
}