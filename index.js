var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var item = { [name]: Math.floor(Math.random() * Math.floor(100)) }
  cart.push(item)
  console.log(`${name} has been added to your cart.`)
  return cart
}

function viewCart() {
  var msg = 'In your cart, you have'
  if (cart.length === 0){
    msg = 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    msg = msg + ` ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
    } else {
      for (let i = 0; i < cart.length - 1; i++) {
        msg = msg + ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
      }
      msg = msg + ` and ${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}.`
    }
  console.log(msg)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
