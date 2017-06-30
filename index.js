var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
var addItem;
var item;
function addToCart(item) {
  addItem = {[item]: Math.floor(Math.random() * 100)};
  cart.push(addItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length==0){
     console.log('Your shopping cart is empty.')
   }else{
     var result = 'In your cart, you have ';
     for(var i = 0; i < cart.length; i++){
       result += `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
       if(i <= cart.length-2 && cart.length > 2)result += ', ';
       if(i == cart.length-2 && cart.length < 3)result += ' ';
       if(i == cart.length-2)result += 'and ';
     }
     console.log(result + '.');
   }
}



function total() {
  var result = 0;
   for(var i = 0; i < cart.length; i++){
     result+= cart[i][Object.keys(cart[i])[0]];
   }
   return result;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
     if(Object.keys(cart[i])[0]===item){
       cart.splice(i, 1);
       return;
     }
   }
   console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if(cardNumber){
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
     cart.length = 0;
   }else{
     console.log('Sorry, we don\'t have a credit card on file for you.');
   }
}
