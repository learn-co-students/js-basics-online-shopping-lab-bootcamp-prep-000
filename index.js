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
 var newItem = {[item]: Math.ceil(Math.random()*100)}
 if(cart.push(newItem)) console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var string = "In your cart, you have"
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }else{
    for(var i = 0; i<cart.length;i++){
      if(i != 0 && cart.length != 2) {string += ","}
      if(i != 0 && i === cart.length - 1){string += " and"}
      var keys = Object.keys(cart[i])
      var key = keys[0]
      var price = cart[i][key]
      string+= ` ${key} at $${price}`
    }
    string += "."
    console.log(string)
  }
}

function total() {
  // write your code here
  var cost = 0
  for(var i = 0; i < cart.length; i++){
    var item = cart[i]
    var key = Object.keys(item)
    var price = parseInt(item[key[0]])
    cost += price
  }
  return cost
}

function removeFromCart(item) {
  // write your code here
  var remove = 0
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      if(i === 0) cart = cart.slice[1]
      else if(i === cart.length-1) cart = cart.slice(0,cart.length-1)
      else{
        var one = cart.slice(0,i)
        var two = cart.slice(i+1)
        cart = [...one, ...two]
      }
      remove = 1
    }
  }
  if(remove === 0) console.log("That item is not in your cart.")
  else return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) console.log("Sorry, we don't have a credit card on file for you.")
  else{
    var totalCost = total()
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
