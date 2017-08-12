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
 var newObj = {}
 newObj[item] = Math.floor((Math.random() * 100) + 1);
 cart.push(newObj);
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }else if(cart.length === 1) {
    var key = Object.keys(cart[0])[0]
    console.log("In your cart, you have " + key + " at $" + cart[0][key] + ".")
  }else if(cart.length === 2) {
    var key1 = Object.keys(cart[0])[0]
    var key2 = Object.keys(cart[1])[0]
    console.log("In your cart, you have " + key1 + " at $" + cart[0][key1] +
    " and " + key2 + " at $" + cart[1][key2] + ".")
  }else {
    var str = "In your cart, you have "
    for (var i = 0; i < cart.length-1; i++) {
      var keys = Object.keys(cart[i])[0]
      str = str + keys + " at $" + cart[i][keys] + ", "
    }
    var finalKey = Object.keys(cart[cart.length-1])[0]
    str = str + "and " + finalKey + " at $" + cart[cart.length-1][finalKey] + "."
    console.log(str);
  }
}

function total() {
  // write your code here
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    var val = Object.keys(cart[i])[0]
    sum += parseInt(cart[i][val])
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var keys = []
  for (var i = 0; i < cart.length; i++) {
    keys.push(Object.keys(cart[i])[0])
  }

  if(keys.indexOf(item) === -1) {
    console.log("That item is not in your cart.");
  }else {
    var indexToRemove = keys.indexOf(item)
    cart.splice(indexToRemove, 1)
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = []
  }
}
