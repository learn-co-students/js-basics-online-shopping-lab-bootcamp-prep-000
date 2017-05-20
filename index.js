var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
   var price = Math.floor(Math.random()*100)
  var newitem = {}
  newitem[item] = price
  cart.push(newitem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length == 0) {
    console.log ("Your shopping cart is empty.")
  }
  else {
    var outputString = "In your cart, you have "
    for(var i = 0; i < cart.length; i++){
      for(var item in cart[i]){
        var price = cart[i][item]
        outputString+=item +" at $"+price
        if (i != cart.length-1)
          outputString+=", "
        else {
          outputString+="."
        }
      }
    }
    console.log(outputString)
  }
}

function removeFromCart(itemName){
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(cart[i], 1);
      itemInCart = true
    }
  }
}
if (!itemInCart)
console.log("That item is not in your cart.")
}

function placeOrder (cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
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
