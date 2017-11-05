var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item] :Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
 }


function viewCart() {
  if(cart[0] === undefined) {
    console.log("Your shopping cart is empty.")
  } else if(cart.length === 1) {
    var key = Object.keys(cart[0])
    var value = cart[0][key]
    console.log(`In your cart, you have ${key} at $${value}.`)
  } else if(cart.length === 2) {
    var k = Object.keys(cart[0])
    var v = cart[0][k]
    var newKey = Object.keys(cart[1])
    var newValue = cart[1][newKey]
    console.log(`In your cart, you have ${k} at $${v} and ${newKey} at $${newValue}.`)
  } else {
    var array = new Array()

    for(var x = 0; x < cart.length; x++) {
    var key = Object.keys(cart[x])
    var value = cart[x][key]
    var miniString = `${key} at $${value}`
    array.push(miniString)
  }
  array[cart.length - 1] = `and ${array[cart.length-1]}`
  console.log(`In your cart, you have ${array.join(', ')}.`)
}
  }


function total() {
    var sum = 0
  for(var x = 0; x < cart.length; x++) {
    var key = Object.keys(cart[x])
    sum += cart[x][key]
  }
  return sum
}

function removeFromCart(item) {
  for(var x = 0; x < cart.length; x++) {
    if(cart[x].hasOwnProperty(item) === true) {
      cart.splice(x,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
}
