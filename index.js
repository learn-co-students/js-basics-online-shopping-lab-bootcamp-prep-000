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
  console.log('Your shopping cart is empty');
} else {
  var cartItems = "In your cart, you have";
  for(var i = 0, l = cart.length; i < l; i++);{
    for(var list in cart[i]){
      cartItems+=`${list} at $${cart[i][list]}`;
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

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
