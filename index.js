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
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100 + 1)})
 return `${item} has been added to your cart.`}


function viewCart() {
  // write your code here
   if (cart.length === 0) {
     return "Your shopping cart is empty."}
  
  for (var i = 0; i < cart.length; i++)
  /*
  var string=Object.values(cart[i])
  var product=string[0]
  var price=string[1] 
  why does the if statment ===0 not work when placed within for loop?*/
  
  if (cart.length === 1) {
     return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`} 
   else if (cart.length===2){
       return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i + 1].itemName} at $${cart[i = 1].itemPrice}.`}
   else {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i +1].itemName} at $${cart[i + 1].itemPrice}, and ${cart[i + 2].itemName} at $${cart[i + 2].itemPrice}.`}
  }
  

function total() {
  // write your code here
  var sum=0;
  for (var i=0; i < cart.length; ++i ) {
  sum += cart[i].itemPrice;
  }
  return sum;
}


function removeFromCart(item) {
  var removeArray=[]
   // write your code here
  for (var i=0; i < cart.length; ++i) {
  removeArray.push(Object.values(cart[i])[0])}
  if (removeArray.indexOf(item) === -1) {
    return "That item is not in your cart."}
  else {
    cart.splice(removeArray.indexOf(item), 1);
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    var confirm= `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart=[];
    return confirm
  }
   else {
     return "Sorry, we don't have a credit card on file for you."}
}
