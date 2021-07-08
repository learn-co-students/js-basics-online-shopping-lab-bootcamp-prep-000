var cart = []; //cart is an array of objects

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // var priceInt = Math.floor(Math.random() * 100) + 1 //works
 // var price = priceInt.toString //does price need to be string?
 //var object = Object.assign({},{[item]:[price]})
 var object = {[item]:Math.floor(Math.random() * 100) + 1}
 //Object.assign(cart, object) // cart is not object
 cart.push(object)
 console.log(`${item} has been added to your cart.`) //works
 return cart //works
}

function viewCart() {
  if(cart.length===0){
    console.log(`Your shopping cart is empty.`)
  } else if(cart.length===1) {
    var key = Object.keys(cart[0])
    console.log(`In your cart, you have ${key} at $${cart[0][key]}.`)
    //console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`) apparently Object.values() doesn't exist
  } else if(cart.length===2) {
    var key0 = Object.keys(cart[0])
    var key1 = Object.keys(cart[1])
    console.log(`In your cart, you have ${key0} at $${cart[0][key0]} and ${key1} at $${cart[1][key1]}.`)
  } else {
    var string = "In your cart, you have "
    for(var n=0;n<cart.length;n++){
      var key = Object.keys(cart[n])
      var value = cart[n][key]
      string = string + (n===cart.length-1 ? "and " :"") + key + " at $" + value + (n===cart.length-1 ? "." : ", ")
    }
    console.log(string)
  }

}

function total() {
  var sum = 0
  for (var n=0;n<cart.length;n++){
    var key = Object.keys(cart[n])
    var value = cart[n][key]
    sum = sum + parseInt(value) // why doens't += work here?
  }
  return sum
}

function removeFromCart(name) {
  var index = -1
  for(var n=0;n<cart.length;n++){ //run through cart testing each index for name
    if(cart[n].hasOwnProperty(name)){
      index = n
    }
  }
  if(index>=0){
    cart.splice(index,1)
    return cart
  }else{
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if(cardNumber===parseInt(cardNumber,10)){
    var sum = total() //need ()? yes
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
      console.log("Sorry, we don't have a credit card on file for you.")
    }
}
