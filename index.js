var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push ({ itemName: item, itemPrice: Math.floor(Math.random()*100) });
return `${cart[cart.length-1].itemName} has been added to your cart.`;
}

function viewCart() {
var items= [];
var g=cart.length;
var i=cart.length;
if (g==1){
     items.push( ` ${cart[0].itemName} at $${cart[0].itemPrice}.`);
   }
   
 else {
   for (i=0; i<cart.length ;i++){
    if (i==cart.length-1){
     items.push( ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
     }
   else { items.push( ` ${cart[i].itemName} at $${cart[i].itemPrice}`);
 }}}

   
   if  (g===0){
     return 'Your shopping cart is empty.';
     }
     else{
       return `In your cart, you have${items.join()}`;
 }
}
  

function total() {
  var prices=null;
  for(let i=0; i<cart.length ;i++){
    prices= prices + cart[i].itemPrice;
  }
  return prices;
}

function removeFromCart(item) {
  var n=null;
  for(let i=0; i<cart.length ;i++){
    if (cart[i].itemName==item){
      cart.splice(i,1);
       n= true;
    }}
    if (n===true){
      return cart;
    }
    else {
      return 'That item is not in your cart.';
    }
  

  }
  
     
  var c= null;  


function placeOrder(cardNumber){
 var c= null;
 var n= null;
  if (cardNumber===undefined){
    c = "Sorry, we don't have a credit card on file for you.";
  }
  else {
    c= `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    n= true;
  }


if (n===true){
  cart=[];
}
return c;

}
