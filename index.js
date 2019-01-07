var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = parseInt(Math.random() * 100 + 1)
  var newObject = {[item]: price}
  cart.push(newObject)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var string = "In your cart, you have "
    var array = []
    for (var i = 0; i < cart.length; i++) {
      array[i] = Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]]
    }
    if (cart.length === 1) {
      string = string + array[0] + "."
      console.log(string)
    }
    else if (cart.length === 2) {
      string = string + array[0] + " and " + array[1] + "."
      console.log(string)
    }
    else {
      for (var i = 0; i < cart.length - 1; i++) {
        string = string + array[i] + ", "
      }
      string = string + "and " + array[cart.length - 1] + "."
      console.log(string)
    }
  }
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum = sum + parseInt(cart[i][Object.keys(cart[i])[0]])
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return 0
  }
  else {
    var sum = 0
    for (var i = 0; i < cart.length; i++) {
      sum = sum + cart[i][Object.keys(cart[i])[0]]
    }
    cart = []
    console.log("Your total cost is $" + sum + ", which will be charged to the card " + cardNumber + ".")
    return 0
  }
}

addToCart('apples');
addToCart('oranges')
addToCart('pears')
placeOrder(555);
