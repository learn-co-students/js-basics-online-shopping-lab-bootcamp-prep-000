var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100) + 1
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if(cart.length > 0){
    var items = "In your cart, you have "
    for(var i = 0; i < cart.length; i++){
      if(cart.length === 1){
        items += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
      }
      else if(i === cart.length - 1 && cart.length === 2){
        items += ` and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])]}.`
      }else if(i === cart.length - 1 && cart.length > 2){
        items += `, and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])]}.`
      }else if(i === 0){
        items += `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])]}`
      }else{
        items += `, ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])]}`
      }
    }
    console.log(items)
  }else{
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  var totalPrice = 0
  for(var i = 0; i < cart.length; i++){
    totalPrice += cart[i][Object.keys(cart[i])]
  }
  return totalPrice
}

function removeFromCart(item) {
  var matched = false
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      matched = true
    }
  }
  if(matched === false){
    console.log("That item is not in your cart.")
  }
    return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === null || cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
