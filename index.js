var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = new Object({itemName: [item], itemPrice: Math.floor(Math.random() * 100)})
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else{
    var hold = "In your cart, you have "
    for(var i = 0; i < cart.length; i++){
      if(i === cart.length - 1){
        hold += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else{
        hold += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
  }
  return hold
}

function total() {
  if(cart.length === 0){
    return 0
  }
  else{
    var val = 0
    for(var i = 0; i < cart.length; i++){
      val += parseInt(cart[i].itemPrice, 10)
    }
  }
  return val
}

function removeFromCart(item) {
  if(cart.length === 0){
    return "That item is not in your cart."
  }
  
  var key = -1
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName == item){
      key = i
    }
  }
  if(key === -1){
    return "That item is not in your cart."
  }
  else{
    cart.splice(key, 1)
  }
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var num = total()
    var str = `Your total cost is $${num}, which will be charged to the card ${cardNumber}.`
    while(cart.length > 0){
      cart.pop()
    }
    return str
  }
}
