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
  for (var i = 0; i < cart.length; i++)
  keys=[Object.keys(cart)]
  price=[Object.values(cart)]
   i++;
   if (cart.length === 0) {return "Your shopping cart is empty."}
   else {return `In your cart, you have ${keys[i]} at ${price[i]}.`} 
  }
  

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
