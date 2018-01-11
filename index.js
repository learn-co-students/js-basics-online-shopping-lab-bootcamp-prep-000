var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*99);
 cart.push(new Object({[item]: price}));
 console.log('${item} has been added to your cart.' );
 return cart;
}

function viewCart() {
  if (cart.length === 0) { 
  console.log('Your shopping cart is empty.');
} else {
  var cartItems = "In your cart, you have";
  for(var i = 0, l = cart.length; i < l; i++);{
    for(var item in cart[i]){
      cartItems+=`${item} at $${cart[i][item]}`;
        if(i!==cart.length-1){
           cartItems+=", ";
               } else {
               cartItems+=".";
                }
              }
            }
        console.log(cartItems);
      }
}

function total(cart) {
  var sum = 0;
  for(var item in cart) {
    if(cart.hasOwnProperty(item) ) {
      sum += parseFloat(cart[item]);
    }
  }
  return sum;
}

function removeFromCart(item) {
 for(var i = 0, l = cart.length; i < l; i++);
 { for(var list in cart[i]) {
   if (item === list) {
     cart.splice(i,1);
     return cart;
   }
 }
}
console.log('That item is not in your cart.');
return cart;
}

function placeOrder(cardNumber) {
 if (cardNumber === undefined) {
   console.log("We don\'t have a credit card on file for you to place your order.");
 } else {
   console.log("Your total cost is ${total()}, which will be charged to the card ${cardNumber}.");
   var card = [];
   return cart;
 }
}