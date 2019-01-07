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
  return cart
}

//http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(itemName){

  var price = getRandomInt(1, 10)

  var item = {}
  item[itemName] = price
  cart.push(item)
  //cart.item = 'Math.floor(Math.random()*100)'
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart(){
  var cart = getCart()
  if (cart.length > 0) {
    var cartContents = []

    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
      cartContents.push(`${item} at $${cart[i][item]}`)
      }
    }
    console.log(`In your cart, you have ${cartContents.join(', ')}.`)
  }else{
    console.log("Your shopping cart is empty.")
    }
}

function removeFromCart(item_to_remove){
  for ( var i = 0, l = cart.length; i <l; i++){
    for (var thatItem in cart[i]){
      if (thatItem === item_to_remove){
        cart.splice(i, 1)
        return cart
      }
    }
  }
     console.log("That item is not in your cart.")
     return cart
}

function placeOrder(cardNumber){
  if (cardNumber === undefined ){
    console.log('We don\'t have a credit card on file for you to place your order.')
  }else{
  console.log( `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  return cart = []
}
