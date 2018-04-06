var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1)
  cart.push({ itemName: item, itemPrice: price })
  return `${item} has been added to your cart.`
}

function viewCart() {
  var newCart = []
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else {
    if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else {
    for(var i = 0; i < cart.length; i++) {
      newCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
  }
  var body = newCart
  var last = newCart[newCart.length - 1]
  body.pop()
  return `In your cart, you have ${body.join(", ")}, and ${last}.`
}

function total() {
  var bodyTotal = 0
  for(var i = 0; i < cart.length; i++) {
    bodyTotal += cart[i].itemPrice
  }
    return bodyTotal
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
