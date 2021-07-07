var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
  }
 cart.push(Object.assign({itemName:item}, {itemPrice: getRandomInt(101)}));
 return `${item} has been added to your cart.`;
}


function viewCart(){
  if (cart.length === 0) {
  return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
    else {
    var x = [];
    
    for (var i=0; i <cart.length-1; i++){
    x.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
     }
    return `In your cart, you have${x}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
}


function total() {
    var totalCost = 0;
    for (var i=0; i <cart.length; i++){
    totalCost = totalCost + cart[i].itemPrice;
     }
    return totalCost;
}

function removeFromCart(item) {
var x = cart;
for (var i=0; i <x.length; i++){
  if (x[i].itemName === item){
  x.splice(i, 1);
  } 
}  
  if (x === cart){
  return 'That item is not in your cart.';
  } else {
  cart = x;
  return cart;
  }
}

function placeOrder(cardNumber) {
 if (cardNumber === undefined){
   return `Sorry, we don\'t have a credit card on file for you.`;
 } else {
   var x = total();
   cart = [];
   return `Your total cost is $${x}, which will be charged to the card ${cardNumber}.`;
 }
}
