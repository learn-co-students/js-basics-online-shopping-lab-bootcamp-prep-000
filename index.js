var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

var cart = []
function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) // 0.546234352 * 100 54.6234352 >> 54
  var object = {[item]: price}
  cart.push(object);
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
if (cart.length > 0) {
  var array = []
for (var i = 0; i < cart.length; i++) {
  var item = Object.keys(cart[i])[0]// Object.keys(obj)[0] === "pizza" // cart[i] == {pizza: 24}
  var price = cart[i][item]// obj[key]
  array.push(`${item} at $${price}`); // ['socks at $25', 'pizza at $24']
}
console.log(`In your cart, you have ${array.join(', ')}.`) // In your cart, you have socks at $25,pizza at $24.
}
else {
  console.log("Your shopping cart is empty.")
}
}

function removeFromCart(name) { // "pizza"
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(name)) { // object.hasOwnProperty(string)
        delete cart.splice(i, 1) // [{}], destructively remove the object from the array (hint) splice(starting index, how many?)
        return cart // what does return do for us?
      }
    }
    console.log("That item is not in your cart.")
  }


function placeOrder(creditCardNumber) {
  if (creditCardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
    cart = []
  }  
}
