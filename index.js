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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({[item]:price})
  //cart[item] = price
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if(cart.length<1){
    console.log("Your shopping cart is empty.")
  }
  else {
    var outputString = "In your cart, you have "
    var itemsInCart = Object.keys(cart)
    for (var item=0; item<cart.length; item++) {
      var specificItem = Object.keys(cart[item])
      //console.log(specificItem)
      if (item===0){
        outputString += (`${specificItem} at $${cart[item][specificItem]}`)
      }
      else {
        outputString += (`, ${specificItem} at $${cart[item][specificItem]}`)
      }
    }
    console.log(outputString+=".")
  }
}

function removeFromCart(itemToRemove){
  var itemExists = false
  var itemIndex
  for (var i=0; i < Object.keys(cart).length; i++) {
    if (cart[i].hasOwnProperty(itemToRemove)){
      itemExists = true
      itemIndex = i
    console.log (itemToRemove + " DOES exist at index" + i)
  }
      else {
        console.log (itemToRemove + " does not exist at index" + i)
      }
    }
    if (itemExists===false){
      console.log("That item is not in your cart.")
    }
    else {
      cart.splice(itemIndex,1)
      return cart
    }
  }

function placeOrder(ccNumber){
  if(ccNumber===undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
    cart = []
  }
}
