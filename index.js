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
 var addItem = { [item] : (Math.floor(Math.random()*100) + 1) }
 cart.push(addItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var list = `In your cart, you have`
    for(var i =0; i<cart.length; i++) {
      var x = cart[i]
      var y = Object.keys(x)
      var z = x[y[0]]
      list = list + ` ${y[0]} at $${z}`
      if (cart.length === 2){
        if (i === 0) {
          list = list + ' and'
        } else {
          list = list + `.`
        }
      } else if (i === cart.length - 2) {
        list = list + ', and'
      } else if(i === cart.length - 1) {
        list = list + `.`
      } else {
        list = list + `,`
      }
    }
    console.log(list)
  }
}

function total() {
  // write your code here
  if (cart.length === 0) {
    return 0
  } else {
    var totalCost = 0
    for (var i =0; i<cart.length; i++){
      var x = cart[i]
      var y = Object.keys(x)
      var z = x[y[0]]
      totalCost = totalCost + z
    }
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  var a = cart
  for (var i = 0; i<cart.length; i++) {
    var x = cart[i]
    if (x.hasOwnProperty([item]) === true) {
      var pos = cart.indexOf(x)
      cart.splice(pos, 1)
    }
  }
  if (a === cart) {
    console.log(`That item is not in your cart.`)
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
