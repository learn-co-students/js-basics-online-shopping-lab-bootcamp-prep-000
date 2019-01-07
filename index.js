var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 
 cart.push({[item]:Math.floor((Math.random() * 100 + 1))});
 console.log (`${item} has been added to your cart.`);
 return cart;
 
}

 function viewCart() {
  var itemPriceArr =[];
  for(var i=0; i<cart.length; i++) {itemPriceArr.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
  if (i===1) { 
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)}  
  else if (i===0) {console.log(`In your cart, you have ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)}
   if (i>1) { 
  console.log(`In your cart, you have${itemPriceArr.slice (0, itemPriceArr.length-1)}, and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)}
  }
  if (cart.length===0) {console.log ("Your shopping cart is empty.")}
}
  
function total() {
var cartValue = [];
var sum = 0;
for (var i =0; i<cart.length; i++) { cartValue.push (Object.values(cart[i]));
sum += parseInt(cartValue[i]);
}
return sum;
}

function  removeFromCart(item) { 
  var valueArray = [];
for (var i=0; i<cart.length; i++) {valueArray.push(Object.keys(cart[i])); if (cart[i].hasOwnProperty(item) ===true){cart.splice(i,1)} 
}
if (cart.length === valueArray.length) {console.log ("That item is not in your cart.")}
return cart;
}

function placeOrder(cardNumber) {
if (cardNumber === undefined) {console.log ("Sorry, we don't have a credit card on file for you.")} 
else 
{ console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
  cart.length = 0;
  return cart;
}