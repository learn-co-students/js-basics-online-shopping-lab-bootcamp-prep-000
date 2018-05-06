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
 cart.push({itemName: item, itemPrice: Math.floor(1 + 100*Math.random())});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var inCart = "In your cart, you have ";
  if (cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  
  if (cart.length ===1 ){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  if (cart.length ===2 ){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  
  if (cart.length > 2){
    var entries = 0;
    do {
      inCart += `${cart[entries].itemName} at $${cart[entries].itemPrice}, `;
      entries++;
    } while (entries < cart.length - 2);
  }
  return inCart+=`${cart[cart.length - 2].itemName} at $${cart[cart.length - 2].itemPrice}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length -1].itemPrice}.`;
  
}

function total() {
  // write your code here
  var cartTotal = 0;
  for (var i=0; i<cart.length; i++){
    cartTotal += parseInt(cart[i].itemPrice);
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i<cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return "Sorry, we don't have a credit card on file for you.";
  }
  var cartT = total();
  cart.splice(0);
  return `Your total cost is $${cartT}, which will be charged to the card ${cardNumber}.`;
}
