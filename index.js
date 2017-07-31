var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var itemPrice = (Math.floor(Math.random() * (100 - 1)) + 1)

  cart.push({ [item]: itemPrice })
    console.log(`${[item]} has been added to your cart.`)
      return cart
}

function viewCart() {
  var i, j
  var printCart = []

  if (cart.length > 0) {
    for(i = 0, j = cart.length; i < j; i++) {
      printCart.push(cart[i])
    }
    console.log(`In your cart, you have $[printCart] at $$[itemPrice].`)

  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var i, j
  var cartTotal = 0
  for(i = 0, j = cart.length; i < j; i++) {
    cartTotal = cartTotal + cart[i][Object.keys(cart[i])]
  }
  return cartTotal
}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {
  // write your code here
}
