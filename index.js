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
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var itemnum = cart.length
  var printout = "In your cart, you have "

  if (itemnum >= 2) {
    for (var i = 0; i < itemnum; i++) {
      for (var x in cart[i]){
        if (i !== itemnum-1 && itemnum >= 3) {
          printout += x + " at $" + cart[i][x] + ", "
        } else if (i !== itemnum-1) {
          printout += x + " at $" + cart[i][x] + " "
        } else {
          printout += "and " + x + " at $" + cart[i][x] + "."
        }
      }
    }
    console.log(printout)
  }

  else if (itemnum == 1) {
    for (var x in cart[0]){
      console.log("In your cart, you have " + x + " at $" + cart[0][x] + ".")
    }
  }

  else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    for (var x in cart[i]) {
      total += parseInt(cart[i][x])
    }
  }
  return total
}

function removeFromCart(item) {
  var index = -1
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      index = 1
    }
  }

  if(index !== -1) {
    cart.splice(index, 1)
  } else {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ` + cardNumber + `.`)
    cart = []
    return cart
  } else {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
}
