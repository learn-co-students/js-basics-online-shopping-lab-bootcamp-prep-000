var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(itemName) {
// write your code here

var itemPrice= Math.floor(Math.random() * Math.floor(100));
cart.push({ itemName: itemName, itemPrice: itemPrice  })

return (`${itemName} has been added to your cart.`)
  
}

function total() {
  // write your code here
var total =0;
for ( var j= 0; j<cart.length; j++){  
  total+= Object.values(cart[j]);

}
return total ;
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


function removeFromCart(item) {

 for(var i =0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)===true){
        cart.splice(i, 1)
        return cart
 }
   }

  console.log (`That item is not in your cart.`)
  return cart 

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
  
  // 'In your cart, you have mango at $84 and nuts at $29.' ]
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
viewCart()
