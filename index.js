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
 var itemNameAndPrice = {itemName: [item], itemPrice: Math.floor((Math.random()*100)+1)}
 cart.push(itemNameAndPrice);
 return `${item} has been added to your cart.`

}

function viewCart() {
  // write your code here
  var cartDescription = 'In your cart, you have '
  if (getCart().length === 0) {
  return "Your shopping cart is empty."
  }
  else {
  if (getCart().length >= 1) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if (getCart().length >= 2) {
    var middleItemsDescription = ''
    for (var i = 1; i < getCart().length - 1; i++) {
      middleItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
    return `${cartDescription}.`
  }

}

function total() {
  // write your code here
  var sum = 0
  for (var i = 0; i < getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var itemToRemove;
    for (var i=0; i<getCart().length; i++) {
      if (getCart()[i].itemName == item) {
        itemToRemove = getCart()[i]

      }
    }
    if (!itemToRemove) {
      return 'That item is not in your cart.'
    }
    else {
      var indexOfItemToRemove = cart.indexOf(itemToRemove)
      getCart().splice(indexOfItemToRemove,1)
      return getCart()
    }

}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var cartTotal = total()
    cart.length = 0
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }

}
