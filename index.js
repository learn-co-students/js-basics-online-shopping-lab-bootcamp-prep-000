var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var it = Object.assign({}, {[item]: Math.floor((Math.random()*100)+1)})
 cart.push(it)
 console.log(`${item} has been added to your cart.`)
 return getCart()
}

addToCart("ice cream")
console.log(cart[0])

function viewCart() {
  if(cart.length===0) console.log("Your shopping cart is empty.")
  else {
    var result="In your cart, you have "
    for(var i=0;i<cart.length-1;i++){
    result+=`${cart[i].keys}`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
