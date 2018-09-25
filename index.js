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
 
 cart.push(newItem);
 
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
  let cart = getCart();
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item ){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don\'t have a credit card on file for you.";
  } else {
    var finalCost = total();
    cart.splice(0, cart.length);
    return `Your total cost is $${finalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
