var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const itemPrice = Math.floor(Math.random()*10)
 const newItem = {[item]: itemPrice}
 console.log (`${item} has been added to your cart.`)
 cart.push(newItem)
 return cart
}

function viewCart() {
  const cartCheck = []
  const cartStatement = []
  if (cart.length = 0){
    cartStatement = "Your shopping cart is empty."
 }
  else{
    cartStatement = "In your cart, you have"
    for(let i=1; i < cart.length; i++){
      cartCheck[i] =` ${cart[i]} at $${cart[i][i]},`
      cartStatement.push(`${cartCheck[i]}`)
    }
    console.log(`${cartStatement.join()}`)
  }
}


function total() {
  var cartValue = 0
  for(let i=0; i < cart.length; i++){
    cartValue +=`${cart[i][i]},`
  }
  return cartvalue
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
