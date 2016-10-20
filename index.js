var cart = []

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

  var itemPrice = Math.floor(Math.random() * 100)
  var keyPair = {[item]:itemPrice}
 cart.push(keyPair)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart(){
  var cartItems = Object.keys(cart)

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  else {

for (var i = 0, len = cartItems.length; i < len; i++) {
  for (var item in cart[i]) {
  console.log(`In your cart, you have ${cartItems} at ${itemPrice[i]}!`)
}
  //console.log(`In your cart you have ${item} at ${itemPrice}`)
//console.log(`In your cart you have ${cart[item]} at ${itemPrice}`);
}
}}

////PADDING


function removeFromCart(item){
  for (var item in cart){
    if (cart.hasOwnProperty(item)){
      delete cart[item]
    }
    else {
      console.log("That item is not in your cart.")
    }
    cart = []
    return cart
    }
  }

function placeOrder(cardNumber) {
  if (cardNumber == undefined ) {
    console.log("We don't have a credit card on file for you to place your order.")

  }
    else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
        cart = []
        return cart
}
