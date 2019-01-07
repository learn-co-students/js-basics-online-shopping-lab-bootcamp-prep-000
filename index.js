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
}

function viewCart() {
  // write your code here
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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1)
  var obj = {[item]: price}
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var items = [];
  var values = [];
  if (!cart.length) {
      console.log('Your shopping cart is empty.')
  } for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        items.push(key)
        values.push(cart[i][key])
      }
    }

  console.log('In your cart, you have' + ` ${items[0]} at $${values[0]},` + ` ${items[1]} at $${values[1]},` + ` ${items[2]} at $${values[2]}.`)
}

function removeFromCart(item) {
  if (!cart.length) {
      console.log('That item is not in your cart.')
  } 
    for (var key in cart) {
      if (cart.hasOwnProperty(key)) {
        cart.pop(key)
      }
    }
  
    return cart
}


function placeOrder(ccNum) {
  if (ccNum == undefined  || !ccNum.length) {
    console.log("We don't have a credit card on file for you to place your order.")
  } 
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)


  cart.length = 0
}
