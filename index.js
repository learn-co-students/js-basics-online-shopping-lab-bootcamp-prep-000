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
  var price = {}
  price[item] = Math.floor((Math.random() * 100) + 1)
  cart.push(price)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here

  if (cart.length == 0) {
    console.log(`Your shopping cart is empty.`)
  } else if (cart.length == 1) {
    var key = Object.keys(cart[0])
    var value = cart[0][Object.keys(cart[0])]
    console.log(`In your cart, you have ${key} at $${value}.`)
  } else if (cart.length == 2) {
    var key = Object.keys(cart[0])
    var value = cart[0][Object.keys(cart[0])]
    var keyTwo = Object.keys(cart[1])
    var valueTwo = cart[1][Object.keys(cart[1])]
    console.log(`In your cart, you have ${key} at $${value} and ${keyTwo} at $${valueTwo}.`)
  } else if (cart.length >= 3) {
    var message = `In your cart, you have `
    for (var i = 0; i < cart.length; i++) {
      if (i == cart.length - 1) {
        var key = Object.keys(cart[i])
        var value = cart[i][Object.keys(cart[i])]
        message += `and ${key} at $${value}`
      } else {
        var key = Object.keys(cart[i])
        var value = cart[i][Object.keys(cart[i])]
        message += `${key} at $${value}, `
      }
    }
    console.log(message + `.`)
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var found = false
  var position = 0
  for(var i = 0; i < cart.length; i++){
    if(Object.keys(cart[i]) == item){
      found = true
      position = i
    }
  }
  if(found){
    cart.splice(position, 1)
    return cart
  }else {
    console.log(`That item is not in your cart.`)
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    var totalCost = total()
    cart = []
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
  }

}

//testing
console.log(addToCart('pancake'))
console.log(addToCart('orange'))
console.log(addToCart('passionfruit'))
viewCart()
removeFromCart(`orange`)
removeFromCart(`apple`)
placeOrder()
