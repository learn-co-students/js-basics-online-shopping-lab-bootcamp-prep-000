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
 var price = Math.floor(Math.random() * 99);
 cart.push({[item] : price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here

  if(cart.length === 0){
   console.log(`Your shopping cart is empty.`);
 }
  else {
    var array = [];
   for (var i = 0; i < cart.length; i++) {
     var itemAndPrice = cart[i];
     var item = Object.keys(itemAndPrice)[0];
     var price = itemAndPrice[item];
     array.push(`${item} at $${price}`);
     }
   if (array.length === 1) {
     console.log(`In your cart, you have ${array}.`);
     }
   else if (array.length === 2) {
     console.log(`In your cart, you have ${array.join(' and ')}.`);
     }
  else {
     console.log(`In your cart, you have ${array.slice(0, array.length - 1).join(', ')}, and ${array.slice(length-1)}.`);
     }
 }

}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemName = Object.keys(item)[0];
    total += item[itemName];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    var items = cart[i];
    if (items.hasOwnProperty(item)) {
      return cart.splice(i,1);
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber != null) {

    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];

  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
