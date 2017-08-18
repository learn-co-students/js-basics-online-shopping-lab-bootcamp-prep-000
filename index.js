var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newPrice = Math.floor(Math.random() * 100) +1
 var newObj = {[item]: newPrice}
 cart.push(newObj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var response ="In your cart, you have "
    if(cart.length ===1){
      var item = Object.keys(cart[0])[0]
      var price = cart[0][item]
      response = response + `${item} at $${price}.`
    }
    else if(cart.length ===2){
      var item = Object.keys(cart[0])[0]
      var price = cart[0][item]
      response = response + `${item} at $${price} and `

      item = Object.keys(cart[1])[0]
      price = cart[1][item]
      response = response + `${item} at $${price}.`
    }
    else{
      for(let i = 0; i<cart.length-1; i++){
        var item = Object.keys(cart[i])[0]
        var price = cart[i][item]
        response = response + `${item} at $${price}, `
      }

      var item = Object.keys(cart[cart.length-1])[0]
      var price = cart[cart.length-1][item]
      response = response + `and ${item} at $${price}.`
    }

    console.log(response)
  }
}

function total() {
  var total = 0;
  for(let i = 0; i<cart.length; i++){
    var item = Object.keys(cart[i])[0]
    var price = cart[i][item]
    total+=price
  }

  return total
}

function removeFromCart(item) {
  for(let i = 0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber){
    var cost = total()
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
