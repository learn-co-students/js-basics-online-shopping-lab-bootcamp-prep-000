var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartItems2 = {itemName:`${item}`, itemPrice: Math.floor(100*Math.random())}; cart.push (cartItems2); return `${cart[cart.length-1].itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length===0) {return "Your shopping cart is empty."} 
  else if (cart.length===1) {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`} 
  else if (cart.length===2) {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`}
  else if (cart.length>2) {let count=1; var output=[]; while (count<cart.length-1) {output.push (` ${cart[count].itemName} at $${cart[count].itemPrice}`); ++count} return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice},${output}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`}
}

function total() {
  var totalSum = [0]; 
  for (let i=0; i<cart.length; ++i) {totalSum = [parseInt(totalSum[0])+parseInt(cart[i].itemPrice)]} return parseInt(totalSum);
}

function removeFromCart(item) {
  var cart2=cart; 
  for (let i=0; i<cart.length; ++i) {if (cart2[i].itemName===`${item}`) {cart2.splice(i,1); return cart2;}} if (cart.length===cart2.length) {return "That item is not in your cart."}
}

function placeOrder(cardNumber) {
  if (`${cardNumber}`==="undefined") {return "Sorry, we don't have a credit card on file for you."} 
  else {var totalCart=total(); cart=[]; return `Your total cost is $${totalCart}, which will be charged to the card ${cardNumber}.`}
  }
