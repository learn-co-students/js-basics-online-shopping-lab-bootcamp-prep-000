var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var items = {
   itemName: item, 
   itemPrice: Math.floor((Math.random() * 100) + 1)};
 cart.push(items);
 return (`${item} has been added to your cart.`);
}


function viewCart() {
if (cart.length === 0) {
  return (`Your shopping cart is empty.`)}
  var insideCart = 'In your cart, you have ';
  for (let i = 0; i < cart.length; i++) {
insideCart += `${cart[i].itemName} at $${cart[i].itemPrice}`;
if (i === cart.length - 2) {
insideCart += ', and '}
else if (i < cart.length - 2) {
insideCart += ', '}
  else {
    insideCart += '.'}
  }
  return insideCart}



function total() {
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}



function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
cart.splice(i, 1);
return cart;
    }
}
return 'That item is not in your cart.';
}



function placeOrder(cardNumber) {
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  }
 else {
 cart.splice(0, cart.length);  
   return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
 } 

}
