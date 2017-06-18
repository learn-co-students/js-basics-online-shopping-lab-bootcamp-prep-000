var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item]: itemPrice })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var position = []
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }
  else if (cart.length <= 2) {
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])
      var itemPrice = cart[i][item]
      position.push(`${item} at $${itemPrice}`)
    }
    console.log(`In your cart, you have ${position.join(" and ")}.`);
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])
      var itemPrice = cart[i][item]
      position.push(`${item} at $${itemPrice}`)
    }
    var last = position.pop()
    console.log(`In your cart, you have ${position.join(", ")}, and ${last}.`);
  }
  return cart
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0]
    var itemPrice = cart[i][item]
    sum += parseInt(itemPrice)
  }
  return sum
  // write your code here
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
    }
  }
  console.log(`That item is not in your cart.`)
  // write your code here
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  else {
    var sum = total()
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`);
  }
  // write your code here
  cart = []
  return cart
}
