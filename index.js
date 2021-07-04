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
 var itemName = item;
 var price = Math.floor(Math.random() * 100 + 1);
 var newItem = { itemName: item, itemPrice: price };
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if ( cart.length === 0) {
    return `Your shopping cart is empty.`;
  }else{
    var dec = `In your cart, you have `;
    for (var i = 0; i < cart.length; i++) {
      dec += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if (cart.length > 1 & i < cart.length-1) {
        dec += `, `;
      }
      if (cart.length > 1 & i === cart.length-2) {
        dec += `and `;
      }
    }
  return dec + "."; 
  }
}

function total() {
  // write your code here
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++){
    subtotal += cart[i].itemPrice;
  }
  return subtotal;
}

function removeFromCart(item) {
  // write your code here
    for (var i = 0; i < cart.length; i++){
      if (cart[i].itemName === item){
        cart.splice(i, 1);
        return cart;
  }
 } 
  return `That item is not in your cart.`;
}
function placeOrder(cardNumber) {
  // write your code here
  var grandTotal = total();
  if (cardNumber){
  cart.length = 0;
  return `Your total cost is $${grandTotal}, which will be charged to the card ${cardNumber}.`;
  } 
  else {
  return `Sorry, we don't have a credit card on file for you.`;
 }
}