var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){  
var c = {itemName: `${item}`, itemPrice: (Math.floor((Math.random()*100)+1))}

    cart.push(c);
 
    return `${item} has been added to your cart.`; 
}

function viewCart() {
  if( cart.length < 1){
    return 'Your shopping cart is empty.';
  }

    
}

function total() {
  var p = [];
  var t = 0;
  for(var i = 0; i < cart.length; i++){
  p.push(cart[i].itemPrice)
 
 t += p[i];
  }
  return t;
  
}

function removeFromCart(item) {
    
    for( var i = 0; i < cart.length; i++ ){
  
  if (item === cart[i].itemName) {
  cart.splice(i, 1);
  return cart;
  }
      else { return 'That item is not in your cart.';
   } 
}
}

function placeOrder(cardNumber) {
  // write your code here
}
