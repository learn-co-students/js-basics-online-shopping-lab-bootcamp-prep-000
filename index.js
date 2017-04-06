var cart =[];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100)
  var cartAdd = {}
  cartAdd[item] = price
  cart.push(cartAdd)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else {
    let phrase = "In your cart, you have "
    for (var i = 0; i < cart.length; i++){
        var item = Object.keys(cart[i])
        phrase = phrase + `${item} at $${cart[i][item]}, `
    }
     console.log(phrase.slice(0,-2) + ".")
  }
}

function removeFromCart(itemRemove) {
  let compare = cart.length
  for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])
    if (cart[i].hasOwnProperty(itemRemove) === true){
      cart.splice(i, 1)
    }
  }
  if (compare === cart.length){
    console.log("That item is not in your cart.")
  }
  return cart
}


function placeOrder(ccnumber) {
  if (ccnumber !== undefined){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccnumber}.`)
    cart = []
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  return cart
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
