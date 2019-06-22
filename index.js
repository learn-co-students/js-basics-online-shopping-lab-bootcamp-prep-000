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
  cart.push({itemName:item, itemPrice:Math.floor(Math.random()*100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let things = [];
  if(cart.length === 0){
    return "Your shopping cart is empty." ;
  }else if(cart.length === 1){
    // if there is only one item in cart
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }else{
  for (var i = 0; i < cart.length -1 ; i++){
    things.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
    things.join(", " + " ");
  }
  return `In your cart, you have ${things}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}. `;
}

function total() {
  // write your code here
  let sum = 0;
  for(var i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i,1);
    }else{
      return 'That item is not in your cart.'
    }
  }
    return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
