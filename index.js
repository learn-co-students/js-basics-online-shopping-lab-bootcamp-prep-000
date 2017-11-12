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
 cart[item] = Math.floor(Math.random() * 100);
console.log(`${item} has been added to your cart.`);
return cart;
}

//function viewCart() {
  // write your code here
function viewCart() {

//In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
// List number of entries of object

var i =0;
var objKey=[];
var objVal =[];
var strTemp ='In your cart, you have';

for (key in cart){
   if (cart.hasOwnProperty(key)) {
      i++;
      objKey.push(key);
      objVal.push(cart[key]);
   }

  if (i>=1) {
        for (var n = 0; n < objKey.length-1; n++) {
  	     strTemp = `${strTemp} ${objKey[n]} at ${objVal[n]} and`;
         }
        strTemp = `${strTemp} ${objKey[n]} at ${objVal[n]}.`;
       }

 }
     if (i ==0) {

	console.log(`Your shopping cart is empty`);
     }

   if (i >= 1) {

        console.log(`${strTemp}`);
   }

}

// end function

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
