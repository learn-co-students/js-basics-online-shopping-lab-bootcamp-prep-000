var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var thisPrice = Math.floor((Math.random()) * 100)+1
  var obj   = {}
  obj= {[item]: thisPrice}
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }
  else{
    var i    = 0
    var str  = "In your cart, you have "
    do {
      var thisObject = cart[i]
      var key = Object.keys(thisObject)[0]
      if (i == cart.length-1 && cart.length == 2) {
        str += " and "
      }
      if (i == cart.length-1 && cart.length > 2) {
        str += ", and "
      }
      if (i < cart.length-1 && cart.length > 2 && i > 0) {
        str += ", "
      }
      str += `${key} at $${thisObject[key]}`
      i   += 1
    } while (i<cart.length);
  }
  str += "."
  console.log(str)
  return str
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var price = cart[i][Object.keys(cart[i])[0]]
    total    += price
  }
  return total
}

function removeFromCart(item) {
  var foundItem = false;

  for (let i = 0; i < cart.length; i++){
    var thisItem = cart[i]
    if (thisItem.hasOwnProperty(item)) {
      cart.splice(i,1)
      foundItem = true
    }
  }
  if (!foundItem){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
