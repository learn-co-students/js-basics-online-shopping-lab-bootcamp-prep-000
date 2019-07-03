var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.round(Math.random() * 100) + 1;
  var item_object = {
    itemName: item,
    itemPrice: price
  }
  cart.push(item_object)
  return `${item} has been added to your cart.`
}

function viewCart() {
    if (cart.length === 0) 
      return "Your shopping cart is empty."
    else {
      var cartMsg = "In your cart, you have"
      for (var i = 0; i < cart.length; i++) {
        if (i === 0)
          cartMsg += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
        else if (cart.length > 1 && i === cart.length - 1)
          cartMsg += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
        else
          cartMsg += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    cartMsg += "."
    return cartMsg
    }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    } 
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var totalReturnValue = total()
  if (cardNumber !== undefined) 
    for (var i = 0; i < cart.length; i++) {
      cart.splice(0, cart.length);
      return `Your total cost is $${totalReturnValue}, which will be charged to the card ${cardNumber}.`;
    }
  
  
  else
    return "Sorry, we don't have a credit card on file for you.";
  
  

}