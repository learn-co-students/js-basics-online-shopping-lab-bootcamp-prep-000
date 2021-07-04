var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = { 
   itemName: `${item}`, 
   itemPrice: Math.floor(Math.random() * 101) };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  for (let i = 0; cart.length === 0; ) {
    return "Your shopping cart is empty."
  }
  for (let i = 0; cart.length === 1; ) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  for (let i = 0; cart.length === 2; ){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  for (let i = 0; cart.length >= 3; i++){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
  }
}

function sumUpPrices() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function total() {
  var totalCost = sumUpPrices()
  return totalCost;
}

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}
function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove,1)
}
function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName);
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove();
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var sumToCharge = total()
    setCart([]);
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}
