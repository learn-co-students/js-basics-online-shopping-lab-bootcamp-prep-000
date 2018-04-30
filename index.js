var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = new Object({itemName: item, itemPrice: Math.floor(Math.random() * 101)});
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var message = "In your cart, you have ";
  if ( cart.length === 0){
    return "Your shopping cart is empty.";
}
  // for ( var i = 0; i < cart.length; i++){
    
  if ( cart.length === 1){
  return `${message}${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
      
  if ( cart.length === 2 ){
  return `${message}${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      }
      
  else{
        var newCart = [];
        for ( var i = 2; i < cart.length; i++){
          newCart.push(`, and ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}${newCart.toString()}.`
 }
}
function total() {
  var total = 0;
  for ( var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 1; i < cart.length; i++){
    if (item = cart[i].itemName){
      cart.splice(i,1);
      return cart
    }
  }
      return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber !== undefined){
    var finalPrice = total();
       cart = [];
    return `Your total cost is $${finalPrice}, which will be charged to the card ${cardNumber}.`;
     }
     else{ 
       return "Sorry, we don't have a credit card on file for you.";
     }
}
