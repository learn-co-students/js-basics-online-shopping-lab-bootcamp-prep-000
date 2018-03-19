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
  var i = createCartItem(item);
  getCart().push(i)
  return `${i.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (getCart().length === 0) {
    return 'Your shopping cart is empty.'
  } else {
  return getCartDescription();
  }
}

function total() {
  // write your code here
  var total = 0
  if (getCart().length === 0) {
    return 0
  } else {
    for (var i = 0; i < getCart().length; i++) {
      total += getCart()[i].itemPrice
    }
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var i = itemIndexChecker(item)
  if (itemIndexChecker(item) > 0) {
    getCart().splice(i,1)
  } else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments[0] === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sum = total()
    setCart([])
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}

function getPrice() {
  return Math.floor(Math.random() * 100)
}

function createCartItem (item) {
  return {itemName:item,itemPrice:getPrice()}
}

function getCartDescription() {
  var desc = "In your cart, you have "
  if (getCart().length >= 1) {
    desc += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >= 2) {
    var extra = ""
    for (var i=1; i<getCart().length -1; i++) {
      extra += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    desc += `${extra}, and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}`
  }
  return `${desc}.`
}

function itemIndexChecker (item) {
  var itempos
  for (var i = 0; i < getCart().length; i++) {
    if (getCart()[i].itemName === item) {
      itempos = i
    } 
  }
  return itempos
}