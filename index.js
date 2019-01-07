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

function addToCart(item){
  var object = {}
  object[item] = Math.floor(Math.random() * 100)
  cart.push(object)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
    if (cart.length === 0) {
      return console.log("Your shopping cart is empty.") // using a return here lets you break out
    }

    var listItems = []

    for (var i in cart) {
      var itemObject = cart[i]
      var item = Object.keys(itemObject)
      var price = itemObject[item]

      listItems.push(`${item} at $${price}`)
    }
    console.log(`In your cart, you have ${listItems.join(', ')}.`) // no return needed; function ends
}

function removeFromCart(item) {
  for (var i in cart){
    var itemObject = cart[i]
    console.log(`item: ${item}`)
    if (itemObject.hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  console.log ("That item is not in your cart.")
}

/*
Define a function placeOrder which accepts one argument, a credit card number.
If no argument is received, then the function should print out "We don't have a
credit card on file for you to place your order.". If there is a credit card on
file, the function should print out "Your total cost is $${total()}, which will
be charged to the card ${cardNumber}.". The function should empty the cart array.
*/
function placeOrder(cc) {
  if (cc === undefined) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  var total = 0
  for (var i in cart) {
    var key = Object.keys(cart[i])
    total = total + cart[i][key]
  }

  console.log(`Your total cost is $${total}, which will be charged to the card ${cc}.`)
  cart.splice(0) // empty array

}
