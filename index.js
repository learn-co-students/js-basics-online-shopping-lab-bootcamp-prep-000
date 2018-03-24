var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj={}
  obj["itemName"] =item
  obj["itemPrice"]=Math.floor((Math.random()*100)+1)
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length===0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  var message = "In your cart, you have "
  for(var i=0;i<cart.length;i++){
    if(i!==cart.length-1){
      message+=`${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    else {
      message+= `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }
  return message
}
function total() {
  var total=0;
  for (var i=0; i<cart.length; i++) {
    total+=cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  if(cart.length===0) {
    return "That item is not in your cart."
  }
  for (var i=0; i<cart.length; i++) {
    if(cart[i].itemName===item) {
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var cartTotal = total()
  cart = []
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
  