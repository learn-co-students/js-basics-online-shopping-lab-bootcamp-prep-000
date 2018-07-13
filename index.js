var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var newObj = {
    itemName: item, 
    itemPrice: Math.floor(Math.random() * 100)} 
 cart.push(newObj)
 return `${newObj.itemName} has been added to your cart.` 
}
 
function viewCart() {
  var arrNames = []
  var arrPrices = []
  for (var i = 0; i < cart.length; i++){
    arrNames.push(cart[i].itemName)
    arrPrices.push(cart[i].itemPrice)
  }
 if (cart.length == 0) {
    return "Your shopping cart is empty."
    }
 if (cart.length == 1) {
   return `In your cart, you have ${arrNames[0]} at $${arrPrices[0]}.`
 }
 if (cart.length == 2) {
   return `In your cart, you have ${arrNames[0]} at $${arrPrices[0]}, and ${arrNames[1]} at $${arrPrices[1]}.`
 } 
 else if (cart.length > 2){
   for (i = 1; i < cart.length-1; i++){
    var items = `, ${arrNames[i]} at $${arrPrices[i]}`
   }
   return `In your cart, you have ${arrNames[0]} at $${arrPrices[0]}${items}, and ${arrNames[cart.length-1]} at $${arrPrices[cart.length-1]}.`
 }
}


function total() {
   var arrPrices = []
   var sum = 0
  for (var i = 0; i < cart.length; i++){
    arrPrices.push(cart[i].itemPrice)
    sum += arrPrices[i]
  } 
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      return cart.splice(i, 1)
    } 
  } 
  if (item != Object.keys(cart)){
  return "That item is not in your cart."
} 
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
  return "Sorry, we don't have a credit card on file for you."
  } else { 
     var  newTotal = `${total()}`
     cart = [] 
     return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
  }
}