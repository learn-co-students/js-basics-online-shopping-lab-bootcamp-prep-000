var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){var object={itemName:item, itemPrice:Math.floor(Math.random()*100)};cart.push(object);console.log(cart); return `${item} has been added to your cart.`;}

console.log(cart.length);


function viewCart() {
  if(cart.length>1){
    var description=`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;for(var i=1;i<cart.length-1;i++){description+=`, ${cart[i].itemName} at $${cart[i].itemPrice}`;}description+=`, and ${cart[i].itemName} at $${cart[i].itemPrice}.`; return description;}
else if(cart.length){var description=`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`; return description;} else{ return "Your shopping cart is empty.";}}

function total() {var sum=0;for(var i=0;i<cart.length;i++){sum+=cart[i].itemPrice} return sum;}

function removeFromCart(item) {var removed="n"; for(var i=0;i<cart.length;i++){
if(cart[i].itemName===item){cart.splice(i,1);removed="y";}}
if(removed==="n"){return "That item is not in your cart."}
  // write your code here
}

function placeOrder(cardNumber) {if(cardNumber){var message=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`; cart=[]; return message;}else {return "Sorry, we don't have a credit card on file for you.";
}}
