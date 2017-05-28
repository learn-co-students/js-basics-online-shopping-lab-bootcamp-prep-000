var cart = [];

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
  cart[item] = Math.floor(Math.random()*100)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var names = Object.keys(cart)
  if(names.length > 0) {
    for(var item in cart) {
      console.log(`In your cart you have ${cart[item]} ${item}`)
    }
  } else {
    console.log("Your shopping cart is empty.")
  }

  return cart;
}

function removeFromCart(item){
  if(cart.hasOwnProperty(item)) {
    delete cart.item;
  } else {
    console.log("That item is not in your cart.")
  }

  return cart;
}

function placeOrder(num) {
  if(num === null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
  }
  return cart;
}
