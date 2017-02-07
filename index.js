var cart = []

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log (`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  var intro = "In your cart, you have "
  var fullCart = []
  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.")
  } else {
    for (let i = 0, l = cart.length; i < l; i++) {
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]
      fullCart.push( item + " at $" + price)
    }
    console.log (intro + fullCart.join(", ") + ".")
  }
}

function removeFromCart(item) {
  var keys = Object.keys(cart)
  var exist = []
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[keys[i]].hasOwnProperty([item])) {
       cart.splice(i, 1)
    }
  }
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[keys[i]].hasOwnProperty([item])) {
      exist.push(1)
    }
  }
  if (exist.length === 0) {
       console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  var cardNumber
  if (isNaN(cardNumber)) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
  }
}
