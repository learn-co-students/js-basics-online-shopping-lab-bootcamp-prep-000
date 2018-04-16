var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = getRandomInt(1,100)
  cart.push({itemName:item,itemPrice:getRandomInt(1,100)})
  return `${item} has been added to your cart.`
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min +1)) + min
}

function viewCart() {
// var item= cart [i].itemname
  
  
//   var itemsandprices = [] 
//   let statement = `In your cart, you have ${item} at ${price}.` 
  if (getCart().length === 0) {
    return "Your shopping cart is empty."
  } 
  else if (getCart().length === 1) {
  var item = cart[0]
  return `In your cart, you have ${item.itemName} at $${item.itemPrice}.`
}
 
 if (getCart().length === 2) {
   var item1 = cart[0]
   var item2 = cart[1]
  return `In your cart, you have ${item1.itemName} at $${item1.itemPrice}, and ${item2.itemName} at $${item2.itemPrice}.`
 }
 
 if (getCart().length >= 3){
   var itemA = cart [0]
   var itemB = cart [1]
   var itemC = cart[2]
  return `In your cart, you have ${itemA.itemName} at $${itemA.itemPrice}, ${itemB.itemName} at $${itemB.itemPrice}, and ${itemC.itemName} at $${itemC.itemPrice}.` 
 }
 
 
 
 
  for (let i = 1; i < cart.length - 1; i++) {
    let item = cart[i].itemName
    let price = cart[i].itemPrice
    itemsandprices.push(`${item} at $${price}`)
  }
}
 

function total() {
  var combinedprices = 0 
 for (let a = 0; a < getCart().length; a++){
 combinedprices = combinedprices + getCart()[a].itemPrice

}
return combinedprices
}

function removeFromCart(item) {
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 
var elementToRemove = false
console.log(item)
 for (var i = 0; i < cart.length; i++) {
  if (cart[i].itemName === item){ 
    elementToRemove = true
    cart.splice(i, 1)
  }
 }

 if(!elementToRemove) return 'That item is not in your cart.'
 
 return cart 
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
  return "Sorry, we don't have a credit card on file for you."
  
 } else {
var totalsums = total()
setCart([])
  return `Your total cost is $${totalsums}, which will be charged to the card ${cardNumber}.`
}
}