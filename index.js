var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1
  cart.push({ itemName: item, itemPrice: price, })
 // write your code here
 return `${item} has been added to your cart.`
}

function viewCart() {
  const cartlen = cart.length
  if (cartlen === 0) return 'Your shopping cart is empty.'
  
  const cartlenmin1 = cartlen - 1  
  const items = cart.map((c, idx) => `${ idx === cartlenmin1 && idx > 0 ? 'and ':''}${c.itemName} at $${c.itemPrice}`).join(', ')
  return `In your cart, you have ${items}.`
  // write your code here
}

function total() {
  const sum = cart.reduce((carry, curr) => +carry + +curr.itemPrice, 0)
  return sum
  // write your code here
}

function removeFromCart(item) {
  const location = cart.findIndex((ca) => ca.itemName === item)
  if (location === -1) return 'That item is not in your cart.'
  cart.splice(location, 1)
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
  const totalCost = total()
  cart = []
  if (!cardNumber || totalCost === 0) return "Sorry, we don't have a credit card on file for you."
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}
