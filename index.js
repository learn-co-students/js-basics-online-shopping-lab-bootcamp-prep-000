var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var string = "In your cart, you have"
  if (cart.length > 0) {

    for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]){
      var price = cart[i][item]
      string = `${string} ${item} at $${price}`
        if (i < cart.length - 1){
          string = string + ","
        }
        else {
          string = string + "."
        }
    }
    }
  }
  else {
    return console.log("Your shopping cart is empty.")
  }
  console.log(string)
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

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){ 
      cart.splice(cart[i])
      console.log(cart)
      return cart
    }
    }
    console.log("That item is not in your cart.")
  }

  function placeOrder(cardNumber){
    if (cardNumber === undefined) {
      return console.log("We don't have a credit card on file for you to place your order.")
    }
    else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  }
