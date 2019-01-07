var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: (Math.floor(Math.random() * 100) + 1)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length == 1) {
    var item = Object.keys(cart[0])[0]
    console.log("In your cart, you have "+item+" at $"+cart[0][item]+".")
  } else if (cart.length == 2) {
    var item1 = Object.keys(cart[0])[0]
    var item2 = Object.keys(cart[1])[0]
    console.log("In your cart, you have "+item1+" at $"+cart[0][item1]+" and "+item2+" at $"+cart[1][item2]+".")
  } else {
    var output = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      if (i != (cart.length - 1)) {
        var item = Object.keys(cart[i])[0]
        output += " " + item + " at $" + cart[i][item]+","
      } else {
        var item = Object.keys(cart[i])[0]
        output += " and " + item + " at $" + cart[i][item]+"."
      }
    }
    console.log(output)
  }
}

function total() {
  if (cart.length == 0) {
    return 0
  }
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0]
    total += cart[i][item]
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i]
    if (obj.hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if ( cardNumber == undefined ) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log("Your total cost is $"+total()+", which will be charged to the card "+cardNumber+".")
    cart = []
  }
}
