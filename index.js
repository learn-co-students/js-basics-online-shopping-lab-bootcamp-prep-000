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

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  var cart = getCart()
  cart.push({[`${item}`]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var cart = getCart()
  var currentCartStatus = "Your shopping cart is empty."
  if(cart.length > 0){
    currentCartStatus = "In your cart, you have "
    for (var i = 0; i < cart.length; i++){
      for( var keys in cart[i]){
        // console.log(keys);
        // console.log(cart[i][keys])
        var item = keys
        var price = cart[i][keys]
        currentCartStatus += `${item} at $${price}, `
      }
    }
    var str = currentCartStatus
    currentCartStatus = str.substring(0, str.length - 2) + "."
  }
  console.log(currentCartStatus)
  return currentCartStatus
}

function removeFromCart(item){
  var cart = getCart()
  var indicator = true
  for (var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(`${item}`)){
      cart.splice(i, 1)
      indicator = false
    }
  }
  if(indicator){
      console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber){
  var cart = getCart()
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
  return cart
}
