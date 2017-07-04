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
 var itemObject = {}
 itemObject[item] = Math.floor(Math.random() * (100)) + 1
 cart.push(itemObject)
 console.log(`${item} has been added to your cart.`)
 return cart

}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var sentence = "In your cart, you have "
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
        sentence += `${key} at $${cart[i][key]}`
        if (i + 1 === cart.length){
          sentence += "."
        } else if (i + 1 === cart.length - 1) {
          sentence += ", and "
        } else {
          sentence += ", "
        }
   }
}
  console.log(sentence)
}

function total() {
  // write your code here
  var total = 0
  for(var i = 0; i < cart.length; i++){
    for(var key in cart[i]){
      total += cart[i][key]
    }
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
}
