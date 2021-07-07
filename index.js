var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  var itemObject = Object.assign({}, { [itemName] : itemPrice })
  cart.push(itemObject)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cartAnnouncement
  if (cart.length === 0) {
    cartAnnouncement = `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    cartAnnouncement = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
  } else if (cart.length === 2) {
    cartAnnouncement = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
  } else {
    cartAnnouncement = `In your cart, you have`
    for (var i = 0; i < cart.length - 1; i += 1) {
      cartAnnouncement = cartAnnouncement + ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
    }
    cartAnnouncement = cartAnnouncement + ` and ${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}.`
  }
  console.log(cartAnnouncement)
}

function total() {
  var currentTotalCartValue = 0
  for (var i = 0; i < cart.length; i += 1) {
    currentTotalCartValue = currentTotalCartValue + parseInt(Object.values(cart[i]))
  }
  return currentTotalCartValue
}

function removeFromCart(itemName) {
  for (let i=0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  var orderAnnouncement
  if (cardNumber == undefined) {
    orderAnnouncement = `Sorry, we don't have a credit card on file for you.`
  } else {
    orderAnnouncement = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
  }
  console.log(orderAnnouncement)
}
