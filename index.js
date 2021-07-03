var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item
 var itemPrice = Math.floor(Math.random()*100)
 cart.push({[itemName]: itemPrice})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var output = "In your cart, you have"
  var length = Object.keys(cart).length
  if (length == 1) {
    var objOne = cart[0]
    console.log(output + ` ${Object.keys(cart[0])[0]} at $${objOne[Object.keys(objOne)]}.`)
  }
  else if (length == 2) {
    var objOne = cart[0]
    var objTwo = cart[1]
    console.log(output + ` ${Object.keys(cart[0])[0]} at $${objOne[Object.keys(objOne)]} and ${Object.keys(cart[1])[0]} at $${objTwo[Object.keys(objTwo)]}.`)
  }
  else if (length > 2) {
    for (var i = 0; i <= length-1; i++) {
      var obj = cart[i]
      var output = output + ` ${Object.keys(cart[i])[0]} at $${obj[Object.keys(obj)]},`
    }
    var lastObj = cart[length-1]
    var lastName = Object.keys(cart[length-1])[0]
    var lastPrice = lastObj[Object.keys(lastObj)]
    var lastString = ` ${lastName} at $${lastPrice},`
    var lastStringLength = lastString.length
    var output = output.slice(0, -1*lastStringLength)
    console.log(output + ` and ${lastName} at $${lastPrice}.`)
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var total = 0
  var length = Object.keys(cart).length
  for (var i = 0; i <= length - 1; i++) {
    var currentObj = cart[i]
    var itemPrice = currentObj[Object.keys(currentObj)]
    total += itemPrice
  }
  return total
}

function removeFromCart(item) {
  var length = Object.keys(cart).length
  var currentItem = item
  var check = 0
  for (var i = 0; i <=length-1; i++) {
    var currentObj = cart[i]
    if (Object.keys(currentObj)[0] == currentItem) {
      check += 1
      var removeThis = i
    }
    else {
      check = check*1
    }
  }
  if (check==1) {
    cart.splice(removeThis, 1)
    return cart
  }
  else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  var yourCard = cardNumber;
  var totalCost = 0;
  if (yourCard==undefined) {
    console.log(`Sorry, we don\'t have a credit card on file for you.`)
  }
  else {
      var length = Object.keys(cart).length
      for (var i = 0; i <= length - 1; i++) {
        var currentObj = cart[i]
        var itemPrice = currentObj[Object.keys(currentObj)]
        totalCost += itemPrice
    }
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
