var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100)
  var object = {}
  object[item] = itemPrice
  cart.push(object)
  console.log( item + " has been added to your cart.")
  return cart
}

function viewCart(){
  var inCart = []
  var priceOf = []
  var intro = "In your cart, you have "
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    for(var m = 0; m < cart.length; m++){
      var item = cart[m]
      var name = Object.keys(item)[0]
      var price = item[name]
      inCart.push(name)
      priceOf.push(price)
      console.log(name + " at $" + price)
    }
    console.log( intro + inCart[0] + " at $" + priceOf[0] + ", " + inCart[1] + " at $" + priceOf[1] + ", " + inCart[2] + " at $" + priceOf[2] + ".")
  }
  return cart
}

function removeFromCart(item){
  var m = 0
  var check = 0
  while (m < cart.length){
    var array = cart[m]
    var name = Object.keys(array)[0]
    console.log(name)
    if (item === name){
      cart.shift(item)
      check = 1
    }
    m++
  }
  if (check === 0){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(credNumber){
  if (credNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + credNumber + ".")
  }
   if (cart.length != 0) {
     cart.shift()
   }
}
