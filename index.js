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
 var object = {itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)};
 cart.push(object);
 return `${item} has been added to your cart.`;
}	

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return `Your shopping cart is empty.`;
  } else if (cart.length ===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } 
  else {
    var output = `In your cart, you have `;
    for (var i = 0; i < cart.length; i++){
    if (i < cart.length - 1 ){
      output += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
  } else {
      output += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
  }
  return output;
}
}

function total() {
  // write your code here	 
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}	
     
function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
