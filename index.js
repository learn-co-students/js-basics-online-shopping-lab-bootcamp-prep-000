var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var myObject = new Object()
  myObject[item] = Math.ceil(100*Math.random())
  cart.push(myObject)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  else if (cart.length === 1) {
    var key = Object.keys(cart[0])
    var value = cart[0][key]
    console.log(`In your cart, you have ${key} at $${value}.`)
    return
  }
  else if (cart.length === 2) {
    var key1 = Object.keys(cart[0])
    var value1 = cart[0][key1]
    var key2 = Object.keys(cart[1])
    var value2 = cart[1][key2]
    console.log(`In your cart, you have ${key1} at $${value1} and ${key2} at $${value2}.`)
    return
  }
  else {
    //enumerate key value pairs
    var keys = []
    var values = []
    for (var i=0;i<cart.length;i++) {
      keys.push(Object.keys(cart[i]))
      values.push(cart[i][keys[i]])
    }
    //build the print statement
    var print_cart =''
    for (var i=0;i<cart.length-1;i++) {
      print_cart = print_cart + `${keys[i]} at $${values[i]}, `
    }
    console.log(`In your cart, you have ${print_cart}and ${keys[cart.length-1]} at $${values[cart.length-1]}.`)
    return
  }
}

function total() {
  var sum = 0;
  for (var i=0;i<cart.length;i++) {
    sum = sum + cart[i][Object.keys(cart[i])]
  }
  return sum
}

function removeFromCart(item) {
  var removed = false
  for (var i=0;i<cart.length;i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      var removed = true
    }
  }
  if (removed === false) {
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
      var totalCost = total()
      console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
      setCart([])
  }
  return
}
