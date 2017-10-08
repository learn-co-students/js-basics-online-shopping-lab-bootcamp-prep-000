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
  var cartItems = new Object({[item]: Math.floor(Math.random()*100)})
  cart.push(cartItems)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  var itemsInCart = []
  for (var i = 0; i < cart.length; i++){
    var cartKey = Object.keys(cart[i])
    itemsInCart.push(`${cartKey} at $${cart[i][cartKey]}`)
  }
  var cartItems = itemsInCart.length
  if (!itemsInCart.length){
    console.log("Your shopping cart is empty.")
  }
  if (cartItems === 1){
    console.log(`In your cart, you have ${itemsInCart[0]}.`)
  }
  if (cartItems === 2){
    console.log(`In your cart, you have ${itemsInCart.join(' and ')}.`)
  }
  if (cartItems >= 3){
    console.log(`In your cart, you have ${itemsInCart.slice(0, cartItems-1).join(', ')}, and ${itemsInCart.slice(cartItems-1)}.`)
  }
}

function total() {
  // write your code here
  var totalCost = 0
  for (var x = 0; x < cart.length; x++){
    var cartKey = Object.keys(cart[x])
    var totalCost = totalCost+parseInt(cart[x][cartKey])
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  for (var x = 0; x < cart.length; x++){
    //var cartKey = Object.keys(cart[x])
    if(cart[x].hasOwnProperty(item)){
      cart.splice(x, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  var cartTotal = total()
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = []
}

/*
var cart3 = [
  {"bananas": 64},
  {"mangos": 72},
  {"oranges": 91},
  {"apples": 82}
]
var item = "oranges"
for (var x = 0; x < cart3.length; x++){
  var cartKey = Object.keys(cart3[x])
  if (!cart3[x].hasOwnProperty(item)){
    console.log("That item is not in your cart.")
  }
  else{
    console.log(cart3[x])
    console.log(cart3)
    cart3.splice(x, 1)
    console.log(cart3)
  }
}*/
