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
var price = Math.floor(Math.random() * Math.floor(100));
cart.push({[item]:price});


// Upon the successful addition of a new item to the cart, the function should print <itemName> has been added to your cart. to the console and then return the updated cart.
console.log(`${item} has been added to your cart.`);
return cart;
  

}

function viewCart() {
  // write your code here
var results = [];
var item =[];
var price =[];

if (cart.length===0){
  console.log( `Your shopping cart is empty.`) ;
}
else if (cart.length===1){
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
}

 else if (cart.length===2){
  for(var i =0; i<cart.length; i++){
   item = Object.keys(cart[i]) ;
  price = Object.values(cart[i]);
 results.push(`${item} at $${price}`);

  }
 console.log(`In your cart, you have ${results.join(' and ')}.`);
 } 
  else {
 
   for(var j =0; j<cart.length; j++){
  item = Object.keys(cart[j]) ;
  price = Object.values(cart[j]); 
  var last = j===cart.length-1
  var lastPrice = j===cart.length-1
  console.log(last) 
  if ((!last) && (!lastPrice)){
  
 results.push(`${item} at $${price}`)


  }
else {
  results.push(`and ${item} at $${price}`)
  
}

 
}
 console.log(`In your cart, you have ${results.join(', ')}.`)    
  }



}
function total() {
  // write your code here
var total =0;
for (var j= 0; j<cart.length; j++){  
var price = Object.values(cart[j]);



for (var i=0; i<price.length; i++){
      total= total + price[i];
}
}
return total ;
}


function removeFromCart(item) {

 for(var i =0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)===true){
        cart.splice(i, 1);
        return cart;
 }
   }

  console.log (`That item is not in your cart.`);
  return cart ;

}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
  console.log(`Sorry, we don't have a credit card on file for you.`);
 }
  else  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    
         cart =[];
      
   
  }
  
}