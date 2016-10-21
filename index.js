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

function addToCart(item){
  var itemPrice = Math.floor(Math.random() * 100)
  var keyPair = {[item]:itemPrice}

 cart.push(keyPair)
 console.log(item + " has been added to your cart.")

 return cart
}


function viewCart() {
  if (cart.length != 0) { //if cartlength exists
  var nCart = []        // create new cart
   for (var i = 0, len = cart.length; i < len; i++) {  // for i, iterating via cartlength
   for (var item in cart[i]) {                        //for item in cart at current iteration of index i
      nCart.push(` ${item} at $${cart[i][item]}`)     //push  "$item at $cart[i][item]" into nCart
    }
  }

 console.log("In your cart, you have" + nCart +".")
}
  console.log("Your shopping cart is empty.")
}


/*function viewCart() {
   if (cart.length != 0) {
   var nCart = []
   for (var i = 0, len = cart.length; i < len; i++) {
   for (var item in cart[i]) {
   nCart.push(`${item} at $${[cart][i][item]}`)
}
   console.log("In your cart, you have " + nCart);
 }
 else{
   console.log("Your shopping cart is empty.");
 }}
}*/
/*function viewCart(){
  var cartItems = Object.keys(cart)
  var itemPrice = Math.floor(Math.random() * 100)
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
  console.log(`In your cart, you have ${cartItems} at ${cart[itemPrice]}!`)
}
}*/


function removeFromCart(item){
  var check = false
  for (var i in cart) {
    if (cart[i] !== undefined) {  //if (cart[i].hasOwnProperty(item)) { ...yuck.
      delete cart[item] // cart.splice([i], 1) ... no thanks
    }}
    if (check === false) {
      console.log("That item is not in your cart.")
    }
    cart = []
    return cart
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
