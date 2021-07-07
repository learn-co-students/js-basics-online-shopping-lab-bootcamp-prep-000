var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // Adds the item passed as a parameter into the cart
 cart.push({[item]:Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // Prints out a string of the items in the cart along with their prices
  var cartString = ''
  var count = 0
  if (cart.length<1) {
    console.log('Your shopping cart is empty.')
  }
  for(var i = 0; i < cart.length; i++){
    count++
    if (i == 0){
      cartString += `In your cart, you have ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`
    }
    else if (i < cart.length-1){
      cartString += `, ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`
    }
    else {
      if (count > 2){
        cartString+=','
      }
      cartString +=` and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`
    }

  }
  console.log(cartString + '.')
}

function total() {
  // Loops through the items in the cart adding up all the prices and returning the total
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++){
    totalPrice+=parseInt(cart[i][Object.keys(cart[i])])
  }
  return totalPrice
}

function removeFromCart(item) {
  // Removes the item that is passed as the parameter from the cart
  var count = 0
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      count+=1
    }
  }
  if (count < 1){
    console.log('That item is not in your cart.')
    return cart
  }
  return cart
}


function placeOrder(cardNumber) {
  // Accepts the credit card number and prints confirmation
  if (cardNumber == undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
