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
 var newItem = Object({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 });
 
 cart.unshift(newItem);
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var arr = [];
  
  if (cart.length < 1) {
    return "Your shopping cart is empty.";
  }  else {
  for(var i = 0; i < cart.length; i++) {
    arr.push(` ${cart[i].itemName} at $${cart[i].itemPrice}` );
  }
 }
 
 if (arr.length < 2) {
   return `In your cart, you have${arr}.`;
 }
 else {
   return `In your cart, you have${arr.slice(0, arr.length - 1)}, and${arr[arr.length - 1]}.`;
 }
}

function total() {
  // write your code here
  var sum = 0;
  
  for (var i = 0; i < cart.length; i++) {
    sum = sum + cart[i].itemPrice;
  }
  
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
