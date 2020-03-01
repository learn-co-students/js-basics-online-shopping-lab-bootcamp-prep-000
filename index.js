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
  cart.push({itemName: item,
 itemPrice: Math.floor(Math.random() *100)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var newA = [];
  for(var i = 0; i< cart.length; i++){
    newA.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if(cart.length > 1){
    newA = `${newA.slice(0, -1)} and${newA.slice(-1)}`;
  }
  
  return newA.length === 0 ? `Your shopping cart is empty.` : `In your cart, you have${newA}.`;
}

function total() {
  // write your code here
  var totalT = 0;
  for(var i =0; i< cart.length; i++){
    totalT += cart[i].itemPrice;
  }
  return totalT;
}

function removeFromCart(item) {
  // write your code here
  var returned = "";
  for(var i = 0; i< cart.length; i++){
    if(cart[i].itemName === item){
    returned = cart.splice(i, 1);
    }
  }
return returned.length === 0 ? 'That item is not in your cart.' : cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var tot = total();
  if(cardNumber === null || cardNumber === undefined || cardNumber === ""){
    return "Sorry, we don't have a credit card on file for you."; 
  } else {
    cart = [];
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
  }
  
}
