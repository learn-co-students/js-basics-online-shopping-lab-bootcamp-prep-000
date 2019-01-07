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
 cart.push({[item]: Math.floor(Math.random() * 100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return
  }
  var strings = []
  var output = "In your cart, you have "

  for (var i = 0; i < cart.length; i++) {
    var name = Object.keys(cart[i])[0]
    var value = cart[i][name]
    strings.push(`${name} at $${value}`)
  }

  if (cart.length <= 2) {
    output += strings.join(' and ')
  } else if (cart.length > 2) {
    output += strings.slice(0, -1).join(', ') + ', and ' + strings.slice(-1)
  }
  output += '.'
  console.log(output)
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var name = Object.keys(cart[i])[0]
    total += parseInt(cart[i][name])
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length)
  }
}
