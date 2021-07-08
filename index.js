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
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * Math.floor(101))})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartContents = "In your cart, you have "
  if(cart.length > 0){
    for(var i = 0; i < cart.length; i++){
      if(cart.length === 1){
        cartContents += `${cart[i].itemName} at $${cart[i].itemPrice}.`
      }

      if(cart.length > 1 && i != cart.length - 1){
        cartContents += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      } else if(cart.length > 1 && i === cart.length - 1){
        cartContents += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
    }
    return cartContents
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  var cartTotal = 0;
  for(var i = 0; i < cart.length; i++){
    cartTotal += cart[i].itemPrice
  }
  return cartTotal
}

function removeFromCart(item) {
  // write your code here
  if(cart.length != 0){
    for(var i = 0; i < cart.length; i++){
      if(cart[i].itemName === item)
        cart.splice(i, 1)
    }
  } else {
    return 'That item is not in your cart.'
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  var cartTotal = total()
  if(cardNumber){
    cart.splice(0, cart.length)
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
