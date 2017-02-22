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

function addToCart(itemToPurchase){
var rawPrice = Math.random() * 100
var price = Math.floor(rawPrice)
cart.push({[itemToPurchase]:price})
console.log(`${itemToPurchase} has been added to your cart.`)
return cart
}

function viewCart(){
var itemAndPrices = []

if(cart.length > 0){
  for( var i = 0; i < cart.length; i++){
    var cartObject = cart[i]
    var itemInCart = Object.keys(cartObject);
    itemAndPrices.push(` ${itemInCart} at $${cartObject[itemInCart]}`)
  }
    console.log(`In your cart, you have${itemAndPrices}.`)
}
else{
  console.log(`Your shopping cart is empty.`)
}
}

function removeFromCart(itemToRemove){
for (var i = 0; i < cart.length; i++){
  var cartObject = cart[i]
  var itemInCart = Object.keys(cartObject);
  if (cartObject.hasOwnProperty(itemToRemove)){
	cart.splice(i, 1)
return
  }
}
if(cartObject != itemToRemove){
    console.log(`That item is not in your cart.`)
  }
}

function placeOrder(creditCardNumber){
  if(isNaN(creditCardNumber) === true){
    console.log("We don't have a credit card on file for you to place your order.")

  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
    cart.length = 0
  }
}
