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
 var price = Math.floor(Math.random()*100+1)
 cart.push({[item]:price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
 var arr = [];
 var firstCart = [];
 if (cart.length === 0) { return 'Your shopping cart is empty.'}
 else {
  for(var i=0;i<cart.length;i++) {
   for (var item in cart[i]) {

     arr.push(item + ' at $'+ cart[i][item]) }
  }




  if (cart.length === 1) { return `In your cart, you have ${arr[0]}.`}
 else if (cart.length ===2) { return `In your cart, you have ${arr[0]} and ${arr[1]}`}
 else {
 firstCart = arr.slice(0,-1)
   return 'In your cart, you have ' + firstCart.join(', ') + ', and ' + arr[arr.length-1] + '.'
 }
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
