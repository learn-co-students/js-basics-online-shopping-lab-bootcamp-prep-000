var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newitem = { [item]: Math.floor(Math.random()*100) }
 cart.push(newitem)
 console.log(`${item} has been added to your cart.`)
 return cart
}


function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var item = cart[0]
    var key = Object.keys(item)[0] // "Object.keys()" returns array, string is nested inside
    console.log(`In your cart, you have ${key} at $${item[key]}.`)
  } else if (cart.length === 2) {
    var item1 = cart[0]
    var key1 = Object.keys(item1)[0] // "Object.keys()" returns array, string is nested inside
    var item2 = cart[1]
    var key2 = Object.keys(item2)[0] // "Object.keys()" returns array, string is nested inside
    console.log(`In your cart, you have ${key1} at $${item1[key1]} and ${key2} at $${item2[key2]}.`)
  } else {
    var str = `In your cart, you have`
    for (var i = 0; i<cart.length-1;i++) {
      item = cart[i]
      key = Object.keys(cart[i])[0] // "Object.keys()" returns array, string is nested inside
      str += ` ${key} at $${item[key]},`
    }
    var lastitem = cart[cart.length-1]
    var lastkey = Object.keys(lastitem) // "Object.keys()" returns array, string is nested inside
    str += ` and ${lastkey} at $${lastitem[lastkey]}.`
    console.log(str)
  }
}

function total() {
  var sum = 0
  for (var i = 0; i<cart.length; i++) {
    var item = cart[i]
    var key = Object.keys(item)[0] // "Object.keys()" returns array, string is nested inside
    sum += item[key]
  }
  return sum
}

function removeFromCart(key) {
  var itemPlace
  for (var i = 0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(key)) {
      itemPlace = i
    }
  }
  if (itemPlace === undefined) {
    console.log( `That item is not in your cart.`)
  } else {
    cart.splice(itemPlace, 1)
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}

// cd labs/js-basics-online-shopping-lab-bootcamp-prep-000
