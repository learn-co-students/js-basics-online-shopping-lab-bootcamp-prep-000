var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)})
  return `${item} has been added to your cart.`
}

function makeSentence(arr) {
  if (arr.length === 1) return `${arr[0]}`
  return `${arr.slice(0, arr.length - 1).join(', ')}, and ${arr[arr.length - 1]}`
}

function viewCart() {
  if (cart.length === 0) return `Your shopping cart is empty.`
  
  let cartItemDescriptions = []
  for (let i = 0; i < cart.length; i++) {
    cartItemDescriptions.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `In your cart, you have ${makeSentence(cartItemDescriptions)}.`
}

function total() {
  let priceArr = cart.map(item => item.itemPrice)
  return priceArr.reduce((total, price) => total + price, 0)
}

function removeFromCart(name) {
  let i = cart.findIndex(item => item.itemName === name)
  
  if (i === -1) return `That item is not in your cart.`
  
  cart.splice(i, 1)
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) return `Sorry, we don't have a credit card on file for you.`

  let totalPrice = total()
  cart = []
  return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.` 
}