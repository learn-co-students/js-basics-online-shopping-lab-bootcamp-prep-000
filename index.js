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
}

function viewCart() {
  // write your code here
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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1)
  console.log(`${item} has been added to your cart.`)
  cart.push({[item]: price})
  return cart
}

function removeFromCart(itemName) {
  if (!hasItem(getCart(), itemName)) {
    console.log("That item is not in your cart.")
  } else {
    for (let i = 0; i < cart.length; i++) {
      for (let item in cart[i]) {
        if (itemName === item) {
          cart.splice(i, 1)
        }
      }
    }
  }
}

function placeOrder(cc) {
  if (!cc) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
    cart = []
  }
}

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
    let contents = "In your cart, you have "
    let lastElem = cart.pop()
    for (var i = 0; i < cart.length; i++) {
      for (let item in cart[i]) {
        contents += `${item} at $${cart[i][item]}, `
      }
    }
    for (let item in lastElem) {
      contents += `${item} at $${lastElem[item]}.`
    }
    console.log(contents);
  }
}

function hasItem(c, item) {
  for (let i = 0, l = c.length; i < l; i++) {
    if (c[i].hasOwnProperty(item)) {
      return true
    }
  }
  return false
}
