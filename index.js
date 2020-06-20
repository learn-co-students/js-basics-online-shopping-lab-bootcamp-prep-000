var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  item = new Object({itemName: item, itemPrice: price});
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
 if(cart.length === 0) {
   return `Your shopping cart is empty.`;
 
   
 } else if(cart.length === 1) {
   return `In your cart, you have ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
 
   
 } else {
   var cartItems = [];
   var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`;
  
   for(let i = 0; i < (cart.length - 1); i++) {
     cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
   }
  
   return `In your cart, you have ${cartItems.join(`, `)}, and ${last}.`;
 }
}

function total() {
 var total = 0;
 for (let i = 0; i < cart.length; i++) {
 total += +cart[i].itemPrice;
 }
 return total;
}


function removeFromCart(item) {
  for(let n = 0; n < cart.length; n++) {
    if(item === cart[n].itemName){
     cart.splice(n, 1);
     return cart;
   }
  }
    return `That item is not in your cart.`;
}
  
  
function placeOrder(cardNumber) {
 
  if(cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
 
  } else {
    
    var totalFunc = total();
    cart.splice(0, cart.length);
    return `Your total cost is $${totalFunc}, which will be charged to the card ${cardNumber}.`;
     }
}