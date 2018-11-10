var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {};
  itemObject.itemName = item;
  itemObject.itemPrice = Math.floor((Math.random()*100) +1);
  cart.push(itemObject)
  return(`${item} has been added to your cart.`)
}

function viewCart() {
  var cartArray = []
  if(cart.length > 1) {
    for(var i = 1; i < cart.length; i++){
      cartArray.push(` ${cart[i-1].itemName} at $${cart[i-1].itemPrice}`);
    }
    return(`In your cart, you have${cartArray}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
  } else if(cart.length > 0) {
    cartArray.push(`${cart[0].itemName} at $${cart[0].itemPrice}`);
    return(`In your cart, you have ${cartArray}.`)
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var p = 0
  for(var i = 0; i < cart.length; i++){
    var p = p + cart[i].itemPrice;
  }
  return p
}

function removeFromCart(item) {
  if(cart.length > 0){
    for(var i = 0; i < cart.length; i++) {
      if(cart[i].itemName === item) {
        cart.splice(i,1)
        return cart
      }
    }
  } else {
    return "That item is not in your cart."
  }
  return "Your shopping cart is empty"
}

function placeOrder(cardNumber) {
  if(cardNumber > 0) {
    var totalCharge = total();
    cart.splice(0, cart.length);
    return(`Your total cost is $${totalCharge}, which will be charged to the card ${cardNumber}.`) + cart.splice(0, cart.length)
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
