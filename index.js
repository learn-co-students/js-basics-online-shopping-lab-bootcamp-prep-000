var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randomPrice = Math.floor((Math.random() * 100) + 1)
 var itemInfo = {itemName: item, itemPrice: randomPrice}
  cart.push(itemInfo)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartTalk = []
 if (cart.length === 0) {
   return "Your shopping cart is empty."
 }
 else if (cart.length === 1) {
 for (var i = 0; cart.length > i; i++) {
  return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.` }
} else if (cart.length > 1) {
  for (var i = 0; cart.length - 1 > i; i++) {
   cartTalk.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
} return `In your cart, you have${cartTalk.join()}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
}}
function total() {
  var totalCost = 0
  for (var i = 0; cart.length > i; i++){
    totalCost = totalCost + cart[i].itemPrice
  } return totalCost
}

function removeFromCart(item) {
    for(var i = 0; cart.length > i; i++){
      if (cart[i].itemName === item) {
        cart.splice(i, 1)
        return cart
      }
    } return "That item is not in your cart."
}

function placeOrder(cardNumber) {
 var finalTotal = total()
 if (cardNumber > 0) {
   for (var i = 0; cart.length > i; i++) {
   cart.pop(i)
   }
   return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`
 } return "Sorry, we don't have a credit card on file for you."
}
