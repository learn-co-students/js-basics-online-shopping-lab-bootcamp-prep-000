var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code
 var nextitem = item
 var price = Math.floor(Math.random() * (100 - 1)) + 1;
 var newobj = {[nextitem] : price }
 cart.push(newobj);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  var text = 'In your cart, you have '
   if(cart.length === 0){
     console.log(`Your shopping cart is empty.`);
     return null;
   }
   if(cart.length === 1){
     text = text + Object.keys(cart[0]) + " at $" + parseInt(cart[0][Object.keys(cart[0])]) + '.'
     console.log(text);
     return null;
   }
   if(cart.length === 2){
     text = text + Object.keys(cart[0]) + " at $" + parseInt(cart[0][Object.keys(cart[0])]) + ' and ' + Object.keys(cart[1]) + " at $" + parseInt(cart[1][Object.keys(cart[1])]) + '.' 
     console.log(text);
     return null;
   }
   for(var i = 0; i< cart.length; i++ ){
     if(i === cart.length-1) {
        text +=  'and ' + Object.keys(cart[i]) + " at $" + parseInt(cart[i][Object.keys(cart[i])]) + '.'
     }else{
       text += Object.keys(cart[i]) + " at $" + parseInt(cart[i][Object.keys(cart[i])]) + ', '
     }
   }
   // text;
   console.log(text);
 }





function total() {
  // write your code here
  var total = 0;
  for(let i = 0; i < cart.length; i++){
    total = total + parseInt(cart[i][Object.keys(cart[i])])

  }
  return total;
}

function removeFromCart(item) {
  // write your code here
for(let i = 0; i < cart.length; i++){
  var obj = cart[i]
  var name = Object.keys(obj)[0]
  if( item === name) {
    cart.splice(i,1)
    return cart;
  }
}
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  var tot = total()
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  cart = [];
  console.log(`Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`)
}
