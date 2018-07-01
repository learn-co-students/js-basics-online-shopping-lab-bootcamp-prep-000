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
 var cartItem = {itemName:item, itemPrice:Math.floor(Math.random() * 101)}
 cart.push(cartItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (getCart().length === 0) {
    return 'Your shopping cart is empty.'
  }
  // write your code here
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`
}

function total() {
  // write your code here
  var totalValue = 0
  for (var i=0; i<getCart().length;i++) {
    totalValue = cart[i].itemPrice + totalValue
  }
  return totalValue
}

function removeFromCart(item) {
  // write your code here
  var itemSearch
  var inCart
  for (var i=0; i<cart.length; i++) {
     if (getCart()[i].itemName === item) {
       inCart = true
       itemSearch = i
     }
  }
  if (inCart === true) {
    cart.splice(itemSearch ,1)
    return cart
  }
  else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
