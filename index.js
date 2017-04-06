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
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var inCart = "In your cart, you have "
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      inCart = inCart + Object.keys(cart[i]) + " at " + "$" + cart[i][item]
      if (i != cart.length - 1) {
        inCart = inCart + ", "
      }
    }
  }
  console.log(inCart + ".")
  }
}

function removeFromCart(itemRemove) {
  var itemRemoved = false;
  for (var i = 0; i < cart.length; i++) {
    var items = Object.keys(cart[i])[0];
    if (items === itemRemove) {
      cart.splice(i,1);
      itemRemoved = true;



    }
  }
  if(!itemRemoved){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
