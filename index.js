var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
  
  cart.push({ itemName: item, itemPrice: price })
  
  return `${item} has been added to your cart.`
 }	 
 	 
 function viewCart() {	 function viewCart() {
  if (cart.length < 1) {
  return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
 } else {
   var cartDescription = "In your cart, you have "
    
    for (var i = 0; i < cart.length - 1; i++) {
      cartDescription += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    
    cartDescription += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    
    return cartDescription
  }
 }	 }
 	 
 function total() {	 function total() {
 var totalPrice = 0
  
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }
  
  return totalPrice
 }	 }
 	 
 function removeFromCart(item) {	 function removeFromCart(item) {
  var found = false
 
 for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    } }
  
  return "That item is not in your cart."
 }	 }
 	 
 function placeOrder(cardNumber) {	 function placeOrder(cardNumber) {
 if (arguments.length < 1) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var transactionDescription = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    
    cart = []
    
    return transactionDescription
  }