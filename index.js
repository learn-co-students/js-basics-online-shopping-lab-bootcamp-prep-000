var cart = [];
/////////////
function setCart(newCart) {
  cart = newCart;
}
/////////////
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
////////////
function getCart(){
  return cart
}
/////////// Returns the added key-pair, error has to do with something else?
function addToCart(item){
  console.log(`${item} has been added to your cart.`)
  var price = Math.random() * 100
  price=Math.floor(price)
  cart.push({[item]: price})
  return cart
}
/////////// Print format is off, but overall it works
function viewCart(){
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.")
  }
  else{
      var announcement = "In your cart, you have "
      for(var i = 0; i < (cart.length); i++){
         var item = Object.keys(cart[i])[0]
        announcement += `${item} at $${cart[i][item]}`
        if (i===cart.length-1){
          announcement +="."
        }else {
          announcement+=", "
        }
    }
    console.log(announcement)
    return cart
  }
}

////////////// haven't checked the below in console yet
function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item) === true){
      cart = [...cart.slice(0, i), ...cart.slice(i+1)]
      return cart
    }
  }
  return console.log("That item is not in your cart.")
}
/////////////
function placeOrder(cardNumber){
  if (cardNumber === undefined){
    return console.log("We don't have a credit card on file for you to place your order.")
  }else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
}
