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
 var newobj={};
 newobj.itemName=item;
 newobj.itemPrice=Math.floor(Math.random()*100);
 cart.push(newobj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var em=[]
 if (cart.length>0){
   if (cart.length>1){
   for(var i=0;i<cart.length;i++){
     em.push(`${i===cart.length-1?'and ':''}${cart[i]['itemName']} at $${cart[i]['itemPrice']}`);
   }
 }else if (cart.length===1){
     em.push(`${cart[0]['itemName']} at $${cart[0]['itemPrice']}`);
 }
 return `In your cart, you have ${em.join(', ')}.`;
 } 
 else{
   return 'Your shopping cart is empty.';
 }
}

function total() {
  var value=0
 for(var i=0;i<cart.length;i++){
   value+=cart[i]['itemPrice']
}
  return value}

function removeFromCart(item) {
var flag = false;
 for (var i = 0; i < cart.length; i++) {
   if (cart[i]['itemName']===item) {
     flag = true;
    cart.splice(i, 1);
  }
  }
  if (flag === true) {
     return cart;
   } else {
     return 'That item is not in your cart.';
   }
 }

function placeOrder(cardNumber) {
  if (cardNumber!==undefined){
    var a=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart=[]
    return a
    
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
