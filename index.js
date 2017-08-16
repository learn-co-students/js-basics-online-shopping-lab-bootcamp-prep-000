var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
  var newItem = { [item]: price }
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // If cart is empty print console.log statement
  if (!cart.length){
    console.log("Your shopping cart is empty.")
  }
  // If the cart is not empty
  else{
    var contents = []
    for (let i = 0; i < cart.length; i++){
      var object = cart[i]                  // Save object into variable "object"
      var itemName = Object.keys(object);   // Store object name/key
      var itemPrice = object[itemName]      // Store object price/value
      // Conditions for adding "and" into statement
      if (i > 1 && i === cart.length - 1 && cart.length != 2){
        contents.push(` and ${itemName} at $${itemPrice}`)
      }
      // Otherwise...
      else {
        contents.push(` ${itemName} at $${itemPrice}`)
      }
    }
    // If one or more than 2 items in the cart
    if (cart.length != 2){
      console.log(`In your cart, you have${contents}.`)
    }
    // if 2 items in the cart
    else{
      console.log(`In your cart, you have${contents[0]} and${contents[1]}.`)
    }
  }
}

// Add up value of all items in the cart
// Return: current total value
function total() {
  var value = 0
  for (let i = 0; i < cart.length; i++){
    var object = cart[i]                  // Save object into variable "object"
    var itemName = Object.keys(object);   // Store object name/key
    var itemPrice = object[itemName]      // Store object price/value
    value += itemPrice
  }
  return value
}

// Remove indicated item
// Param: name of item to be removed
function removeFromCart(item){
  console.log(item)
  for (let i = 0; i < cart.length; i++){
    var object = cart[i]                  // Save object into variable "object"
    var itemName = Object.keys(object);   // Store object name/key
    console.log(`${itemName}`)
    if (`${itemName}` === item){
      console.log("in if")
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

//Tests
/*
addToCart("watermelon");
addToCart("yams");
removeFromCart("watermelon")
placeOrder("blah")
*/

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
    return cart
  }
}
