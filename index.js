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
  // write your code here
  var itemnum = cart.length

  if (itemnum >= 2) {
    var printout = "In your cart, you have "
    var size = cart.length - 1

    for (var i = 0; i < size; i++) {
      for (var x in cart[i]){
        printout += x + " at $" + cart[i][x] + ", "
      }
    }

    for (var y in cart[size]) {
      printout += "and " + y + " at $" + cart[size][y] + "."
    }

    console.log(printout)
  } else if (itemnum == 1) {
    console.log("In your cart, you have " + cart[0] + " at $" + cart[0][1] + ".")
  } else {
    console.log("There is nothing in your cart.")
  }


}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
