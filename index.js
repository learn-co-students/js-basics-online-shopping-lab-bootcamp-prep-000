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
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var output = "In your cart, you have "
    for (var i = 0, l = cart.length; i < l; i++) {
      if(i === 0){
      }else {
        output = output + ", "
      }
      for (var item in cart[i]) {
        output = output + `${item} at $${cart[i][item]}`
      }
    }
    output = output + "."
    console.log(output)
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var part in cart[i]) {
      if(item === part) {
        cart.splice(i, 1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(card) {
  if(card === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
    cart = []
  }
}
