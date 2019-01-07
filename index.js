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
}

function viewCart() {
  // write your code here
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

cart = []

function getCart() {return cart}

function addToCart(i2B) {
   cart.push(   {[i2B]:Math.floor(100*Math.random())}    ) ;
   console.log(`${i2B} has been added to your cart.`); return cart
 }


function viewCart() {
     if (cart.length===0) console.log('Your shopping cart is empty.')
     else {
       debugger;
       var result = "In your cart, you have ";
       for (let i=0; i<cart.length; i++) {
         var h=Object.keys(cart[i]);
         result = result + `${h[0]} ` + "at $"+ `${cart[i][h[0]]}`;
         if (i!=cart.length-1) {
           result=result + ", "
         } else {
           result=result+"."
         }
     }
   console.log(result)}
 }

 function removeFromCart (item)  {
 for (let i=0; i<cart.length; i++) {
   var h =(cart[i]); if (h.hasOwnProperty(item)) {cart.splice(i,1);
   return cart}}
 console.log("That item is not in your cart.")
 return cart
 }

 function placeOrder(n) {
 if (n===undefined) console.log("We don\'t have a credit card on file for you to place your order.")
 else {console.log(`Your total cost is $${total()}, which will be charged to the card ${n}.`); cart=cart.splice(); return cart
 }
 }
