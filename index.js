var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({["itemName"]: item, ["itemPrice"]: price})
  return `${item} has been added to your cart.`
}

function viewCart(){
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  var str = "In your cart, you have "
  for(var i = 0; i < cart.length; i++){
    var newStr = `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`
    if(cart.length === 1){
      return str + newStr + "."
    }
    if(i === cart.length - 1){
      newStr = `, and ${newStr}.`
    } else if(i < cart.length - 1 && i > 0){
      newStr = `, ${newStr}`
    }
    str = str + newStr
  }
  return str
}



function total() {
  var counter = 0
  for(var i = 0; i < cart.length; i++){
   counter += cart[i]["itemPrice"]
  }
  return counter
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i]["itemName"] === item){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  var foo = total()
  cart = []
  return `Your total cost is $${foo}, which will be charged to the card ${cardNumber}.`
}
