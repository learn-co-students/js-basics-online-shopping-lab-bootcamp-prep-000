var cart = []

function getCart(){
  return cart
}

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

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  var item = {[item]: price}
  var itemNames = Object.keys(item)
  cart.push(item)
  console.log(`${itemNames} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length > 0){
    var freshCart = []
    for (var i = 0; i < cart.length; i++) {
      var itemName = Object.keys(cart[i])[0]
      var price = cart[i][itemName]
      freshCart.push(`${itemName} at $${price}`)
    }
    var cartContents = freshCart.join(", ")
    console.log(`In your cart, you have ${cartContents}.`)
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item){
  var i = 0
  var itemToRemove = cart[i]
  if (cart.indexOf(itemToRemove) >= 0){
    cart.splice(i, 1)
    return cart
  }
  else if(cart.indexOf(itemToRemove) === -1) {
    console.log("That item is not in your cart.")
  }
  else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber){
  if (cardNumber == null){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.pop()
  }
}
