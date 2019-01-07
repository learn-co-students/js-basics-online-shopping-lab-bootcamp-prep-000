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
  var price = Math.floor(Math.random()*100)
  cart.push({[item]:price})

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart(){
  if(cart.length == 0){
    console.log("Your shopping cart is empty.")
  }

  else{
    let message = `In your cart, you have `
    for(var i = 0; i < cart.length; i++){
      for(var item in cart[i]){
        message += `${item} at $${cart[i][item]}, `
      }
    }
    message = message.substring(0,message.length-2) + `.`
    console.log(message)
  }
}

function removeFromCart(delItem){
  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
      if(item == delItem){
        cart.splice(i,1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(credNumber){
  if(credNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }

  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${credNumber}.`)
    cart.splice(0,cart.length)
  }
}
