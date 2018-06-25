var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = generateCartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function total() {
  var sum = sumUpPrices()
  return sum
}

function removeFromCart(item) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function placeOrder(cardNumber) {
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}
