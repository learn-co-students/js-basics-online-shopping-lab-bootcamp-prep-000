var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * Math.floor(max));
}

function addToCart(item) {
var obj = {itemName: 'item', itemPrice: 'price'};
var int = getRandomInt(100);
if (int === 0){
  int=1;
}
obj.itemName = item;
obj.itemPrice = int;
cart.push(obj);
return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {
 var cartItems = 'In your cart, you have';
 var i=1;
 for (i=1;i<cart.length;i++)
 { cartItems = cartItems+` ${cart[i-1].itemName} at $${cart[i-1].itemPrice},`}
   if (i==cart.length){
     cartItems = cartItems+` and ${cart[i-1].itemName} at $${cart[i-1].itemPrice}.`
   }
   if (cart.length==1){
     cartItems = `In your cart, you have ${cart[i-1].itemName} at $${cart[i-1].itemPrice}.`;
   }
   if (cart.length===0){
    cartItems = 'Your shopping cart is empty.';
    } return cartItems;
}

 function total() {
 var cartPrice=0;
 var i=0;
 for (i=0;i<cart.length;i++)
 { var x= cart[i].itemPrice;
   cartPrice = cartPrice+x}
    return cartPrice;
}
function removeFromCart(item) {
  var output = 'That item is not in your cart.'
  var i =0;
for (i=0;i<cart.length;i++){
  if (cart[i].itemName == item) {
    output = cart[i].itemName;
    cart.splice(i,1); 
  } 
  }
   return output;
}

function placeOrder(cardNumber) {
var output = "Sorry, we don't have a credit card on file for you."
var cost = total();
cart.length = 0;
if (cardNumber > 0){
  output = `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}
return output
}
