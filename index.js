var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = addCartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : addCartView()
}

function total() {
  var sum = sumOfAllPrices()
  return sum
}

function removeFromCart(itemName) {
  var removedItem = searchCartForItemToRemove(itemName)
  return removedItem ? removeItemFromCart(removedItem) : tellCustomerNoRemovableItems()
}

function placeOrder(cardNumber) {
  if (arguments[0] === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var amountToCharge = total()
    setCart([])
    return `Your total cost is $${amountToCharge}, which will be charged to the card ${cardNumber}.`
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function addCartView() {
  var cartView = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartView += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var otherCartItemsView = ''
    for (var i=1; i<getCart().length -1; i++) {
      otherCartItemsView += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartView += `${otherCartItemsView}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartView}.`
}

function searchCartForItemToRemove(itemName) {
  var searchItems
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchItems = getCart()[i]}
  }
  return searchItems
}

function sumOfAllPrices() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function tellCustomerNoRemovableItems() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(removedItem) {
  var indexOfRemovableItems = cart.indexOf(removedItem)
  getCart().splice(indexOfRemovableItems,1)
}