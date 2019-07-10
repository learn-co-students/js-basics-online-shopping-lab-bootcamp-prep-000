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
 var itemObject = {
   itemName : item,
   itemPrice : Math.floor(Math.random() * 100)
 }
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var inCart = "In your cart, you have "
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else{
    for (var i=0; i< cart.length -1; i++){
      inCart = inCart + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return inCart + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
}

function total() {
  // write your code here
  var tot = 0
  for (var i=0; i<cart.length; i++){
    tot = tot + cart[i].itemPrice
  }
  return tot
}

// function removeFromCart(item) {
//   var x = -1
  
//   for(var i=0; i<cart.length; i++){
//     if(cart[i].itemName === item){
//       cart.splice(i, 1)
//       x = i
//     }
//   }
//   if(x === -1){
//     return "That item is not in your cart."
//   }
//   console.log(cart)
//   return cart
//}
function removeFromCart(item) { 
  for (let i = 0; i < getCart().length; i++){
    if (getCart()[i].itemName === item){
      getCart().splice(i,1)
      return getCart()
      }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var tot = total()
    cart = []
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
  }
}
