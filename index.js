var cart = [];

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function generateObject(itemName) {
  return {itemName: itemName, itemPrice: getRandomInt(1,100)}
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = generateObject(item)
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    let i = 0
    return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
    } else {
    const priceList = []
    for (let i = 0, l = cart.length; i < l; i++) {
      priceList.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    }
    return `In your cart, you have ${priceList.slice(0, -1).join(', ') + ', and ' + priceList.slice(-1)}.`
  }
}

function total() {
  var sum = 0
  const prices = []
  for (let i = 0, l = cart.length; i < l; i++) {
    prices.push(getCart()[i].itemPrice)
  }
  for (let i = 0, l = prices.length; i < l; i++) {
    sum += parseInt(prices[i])
  }
  return sum
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove,1)
}

function placeOrder(cardNumber) {
  if (arguments[0] === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total()
    setCart([])
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
