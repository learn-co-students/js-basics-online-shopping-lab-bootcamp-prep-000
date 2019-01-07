var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random()
  price = Math.floor(100*price+1)
  var obj = {[item]: price}
  var cart = getCart()
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cart = getCart()
  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length == 1){
    var item = cart[0]
    var name = Object.keys(item)
    var price = item[name]
    console.log(`In your cart, you have ${name} at $${price}.`)
  }
  else if (cart.length == 2){
    var item1 = cart[0]
    var item2 = cart[1]
    var name1 = Object.keys(item1)
    var name2 = Object.keys(item2)
    var price1 = item1[name1]
    var price2 = item2[name2]
    console.log(`In your cart, you have ${name1} at $${price1} and ${name2} at $${price2}.`)
  }
  else{
    var message = "In your cart, you have"
    for(var i=0; i<cart.length; i++){
      var item = cart[i]
      var name = Object.keys(item)
      var price = item[name]
      if (i == cart.length-1){
        message = message+` and ${name} at $${price}.`
        console.log(message)
      } else{
        message = message+` ${name} at $${price},`
        console.log(message)
      }
    }
    console.log(message)
  }
}

function total() {
  var cart = getCart()
  var total = 0
  for(var i=0;i<cart.length;i++){
    var key = Object.keys(cart[i])
    var price = cart[i][key]
    total = total+price
  }
  return total
}

function removeFromCart(item) {
  var cart = getCart()
  var index = -1
  for(var i=0;i<cart.length;i++){
    if (cart[i].hasOwnProperty(item)){
      index = i
    }
  }
  if(index<0){
    console.log("That item is not in your cart.")
    return cart
  }
  else{
    cart.splice(index,1)
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    var cart = getCart()
    var total = 0
    for(var i=0;i<cart.length;i++){
      var key = Object.keys(cart[i])
      var price = cart[i][key]
      total = total+price
    }
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}
