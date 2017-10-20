var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function updateObjectWithKeyAndValue(obj, key, value) {
   return Object.assign({}, obj, { [key]: value })
}

function addToCart(item) {
 // write your code here
 var object = updateObjectWithKeyAndValue({}, item, parseInt(getRandomArbitrary(1, 100)))

 cart.push(object)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }else {
    var result = "In your cart, you have"

    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])
      if (cart.length == 1) {
        result += ` ${key} at $${cart[i][key]}.`
      }else if (cart.length == 2) {
        if (i == 0) {
          result += ` ${key} at $${cart[i][key]}`
        }else {
          result += ` and ${key} at $${cart[i][key]}.`
        }
      }else if (cart.length > 2) {
        if (i == 0) {
          result += ` ${key} at $${cart[i][key]}`
        }else if (i != cart.length - 1) {
          result += `, ${key} at $${cart[i][key]}`
        }else {
          result += `, and ${key} at $${cart[i][key]}.`
        }
      }
    }
    console.log(result)
  }
}

function total() {
  // write your code here
  var totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])
    totalCost += cart[i][key]
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i]
    if (obj.hasOwnProperty(item)) {
      cart.splice(i, 1)
      return
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length)
  }
}
