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
 var price = Math.floor(Math.random() * 100);
 cart.push({ [item]: price});
 console.log(`${item} has been added to your cart.`)
 
   return cart;
 
}

function viewCart() {
  // write your code here
   if (cart.length === 0) {
   console.log( "Your shopping cart is empty.")}
   else {
   var myStr = "In your cart, you have ";
  for (var i = 0; i < cart.length; i ++) {
    var item = cart[i];
     var key = Object.keys(item);
     var price = item[key];
     if (cart.length === 1) {
       myStr += `${key} at $${price}.`;
     } else if (i === (cart.length - 1)) {
       myStr += `and ${key} at $${price}.`;
     } else if (cart.length === 2) {
       myStr += `${key} at $${price} `;
     } else
     { myStr += `${key} at $${price}, `;}
   }
 
   console.log(myStr); }
}

function total() {
  // write your code here
  var total=0;
  for (var i = 0; i < cart.length; i ++) {
    var item = cart[i]
     var key = Object.keys(item);
     total += parseInt(item[key]);
 
   }

return total;
}

function removeFromCart(item) {
  // write your code here
  let itemInCart=false;
  for (let i = 0; i < cart.length; i++) {
 		if (cart[i].hasOwnProperty(item)) {
 			itemInCart = true;
 			cart.splice(i, 1);
      return cart;
 		}
 	}
 	if(!itemInCart){
 		console.log('That item is not in your cart.');
}

}
 	

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
     console.log("Sorry, we don't have a credit card on file for you.");
   } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
     cart = [];
  }
  
}
