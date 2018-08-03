var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random()*100+1)
cart.unshift({[item]: price});
 console.log([item]+ ' has been added to your cart.')
return cart
}

function viewCart() {
 for(var i = 0, part = []; i<cart.length; i++){
   part.push(cart[i] + ' at ' + cart.cart[i])
 }
 switch(part.length){
 case 0:
 return 'Your shopping cart is empty.'
 break;
  case 2:
  part.join(' and ')
  break;
 default:
  var list= part.slice(0,part.length-2).join(', ');
  var end = ' and'+part.slice(-1)
  part = list + end
 }
return 'In your cart, you have' + part + '.'
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
