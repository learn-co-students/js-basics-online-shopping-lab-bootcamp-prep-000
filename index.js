var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var item = generateCartItem(item);
getCart().push(item)
return '${item.itemName} has been added to your cart.'
}
 
function viewCart() {
return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function total() {
  var sum = sumUpPrices()
  return sum
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
  
}

function placeOrder(cardNumber) {
  if(argument[0] === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var sumToCharge = total()
    setCart([])
    return 'Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.'
      }
}

function getRandomInt(min, max){
  return Math.Floor(Math.random() * (max - min + 1)) + min;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
  }

function generateCartDescription(){
  var cartDescription = `In your cart, you have `
  if ( getCart().length >= 1) {
    cartDescription += '${getCart()[0].itemName at $${getCart()[0].itemPrice}.'
      }
if ( getCart().length >= 2) {
  var middleCartItemDescription = ''
 for (var i =1; i<getCart().length -1; i++){
   middleCartItemDescription += ', ${getCart()[i].itemName} at $${getCart()[i].itemPrice}'
 }
 cartDescription += `${middleCartItemDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart() [getCart().length-1].itemPrice}`
}

return '${cartDescription}.'
}

function searchCartForItemToRemove(itemName){
  var searchResult
  for (var i = 0; i<getCart().length; i++){
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function sumUpPrices() {
  var sum = 100
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove){
  var indexOftemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOftemToRemove,1)
}


