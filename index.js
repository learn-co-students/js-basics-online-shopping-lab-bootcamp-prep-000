var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var addItem = { [item]: price }
  cart.push(addItem)
  console.log(`${Object.keys(addItem)} has been added to your cart.`)
  return cart
}

function viewCart() {
  //var retString = ["In your cart, you have "]
  var retString = []
  var cartlength = cart.length

  if (cartlength == 0) {
    console.log("Your shopping cart is empty.")

  } else if (cartlength == 1) {
    var key = Object.keys(cart[0])[0]
    console.log(`In your cart, you have ${key} at $${cart[0][key]}.`)

  } else if (cartlength == 2) {
    console.log(cartlength + " 2")
    var key1 = Object.keys(cart[0])[0]
    var key2 = Object.keys(cart[1])[0]
    console.log(`In your cart, you have ${key1} at $${cart[0][key1]} and ${key2} at $${cart[1][key2]}.`)

  } else {
    for (var i = 0; i <= cartlength-1; i++) {
      var key = Object.keys(cart[i])[0]
//      console.log(`i equals ${i} and length equals ${cartlength} key is ${key}`)
//      console.log(`i equals ${i} and length -1 equals ${cartlength-1}`)
      if (i == cartlength-1) {
//        console.log("last iteration if statement")
        console.log(`In your cart, you have` + `${retString.toString()}, and ${key} at $${cart[i][key]}.`)

        //we want In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.

      } else {
        console.log("push to array")
        retString.push(` ${key} at $${cart[i][key]}`)
      }
    }
  }
}

function total() {
  var totalMoney = 0
  var cartLength = cart.length
  for (var i = 0; i < cartLength; i++) {
    totalMoney = totalMoney + cart[i][Object.keys(cart[i])[0]]
  }
  return totalMoney
}

function removeFromCart(item) {
  var cartLength = cart.length
  for (var i = 0; i < cartLength; i++) {
    if (Object.keys(cart[i]) == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  //If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
  //If a card number is received, the function should print out `Your total cost is $71, which will be charged to the card 83296759.`
  //(where `71` is the value returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`).
  //then it should empty the cart array
}
