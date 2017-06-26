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
 var newObj = {}
 newObj[item] = Math.floor(Math.random()*100)
 cart.push(newObj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var startOfSentence = "In your cart, you have "
  //check if the cart is empty
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.")
  }
  //no ands or commas if there's just a single thing
  else if(cart.length === 1){
    return console.log(`In your cart, you have ${Object.keys(cart[0])} at \$${cart[0][Object.keys(cart[0])]}.`)
  }
  else if(cart.length >= 2){
    var endOfSentence = "";
    endOfSentence = `${Object.keys(cart[cart.length-2])} at \$${cart[cart.length-2][Object.keys(cart[cart.length-2])]}, and ${Object.keys(cart[cart.length-1])} at \$${cart[cart.length-1][Object.keys(cart[cart.length-1])]}`

    if(cart.length === 2){
      endOfSentence = `${Object.keys(cart[cart.length-2])} at \$${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at \$${cart[cart.length-1][Object.keys(cart[cart.length-1])]}`
      return console.log(`${startOfSentence}${endOfSentence}.`)
    }

    else {

      for(var i = 0; i<cart.length-2; i++){
      startOfSentence = startOfSentence + `${Object.keys(cart[i])} at \$${cart[i][Object.keys(cart[i])]}, `
      }
      return console.log(`${startOfSentence}${endOfSentence}.`)
    }
  }
}

function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if (Object.keys(cart[i]) == item){
      cart.splice(i,1)
      break;
    }
    else{
      continue;
    }
  }
  return console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  // write your code here
  var custNumber = cardNumber
  if(isNaN(custNumber)){
    return console.log("Sorry, we don\'t have a credit card on file for you.")

  }
  else{
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return
  }

}
placeOrder()
placeOrder(123123)
