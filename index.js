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
  for (var i = 0; i < getCart().length; i++) {
    if (item === getCart()[i].itemName) {
      getCart().splice([i],1);
      debugger;
      return cart
    }
  }

}

function placeOrder(cardNumber) {
  // write your code here
}
