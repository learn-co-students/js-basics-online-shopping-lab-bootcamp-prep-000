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
  var price = Math.floor(Math.random() * 100)
  cart.push(new Object({[item]: price}))
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var itemsAndPrices = []
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  } else {
      for (var i = 0, l = cart.length; i < l; i++) {
        for (var item in cart[i]) {
          var itemName = Object.keys(cart[i])[0]
          var price = cart[i][item]
          itemsAndPrices.push(itemName + " at $" + price)
        }
      }
    }
  console.log("In your cart, you have " + itemsAndPrices.join(', ') + '.')
}

function removeFromCart(item) {
  if (cart.includes(item) == false) {
    console.log('That item is not in your cart.')
  }
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      }
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
  return cart
}
