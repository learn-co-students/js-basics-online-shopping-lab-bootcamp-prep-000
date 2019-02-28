var cart = [];

function getCart() {
  return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor((Math.random()*100)+1)
  var newItem = Object.assign({}, {
    itemName: item,
    itemPrice: price
  })
  cart = [...cart, newItem]
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  
  function getItemString(item) {
    return `${item.itemName} at $${item.itemPrice}`
  }
  
  var cart = getCart()
  if (cart.length === 0) return 'Your shopping cart is empty.'
  var items = []
  if (cart.length === 1) return `In your cart, you have ${getItemString(cart[0])}.`
  for(var i=0; i<cart.length; i++) {
    i === cart.length - 1 
      ? items.push(`and ${getItemString(cart[i])}`)
      : items.push(`${getItemString(cart[i])}`)
  }
  return `In your cart, you have ${items.join(', ')}.`
}

function total() {
  // write your code here
  var total = 0
  var cart = getCart()
  for(var i = 0;i<cart.length;i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var items = getCart().map(item => item.itemName)
  var idx = items.indexOf(item) 
  if (idx === -1) {
    return 'That item is not in your cart.'
  } else {
    return getCart().splice(idx,1)
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
  if ([...arguments].length === 0) return `Sorry, we don't have a credit card on file for you.`
  var s = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return s
}
