var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName:item,itemPrice:Math.floor(Math.random() * Math.floor(100))});
  return item +' has been added to your cart.';
}

function viewCart() {
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  let cartDescription = [];
  for(let i=0; i<cart.length; i++){
    cartDescription.push(cart[i].itemName +' at $'+ cart[i].itemPrice);
  }
  if(cart.length!=1){
    cartDescription[cart.length-1] = 'and '+ cartDescription[cart.length-1];
  }
  return 'In your cart, you have '+ cartDescription.join(', ') +'.'
}

function total() {
  let total = 0;
  for(let i=0; i<cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  let result = cart.find( cartItem => cartItem.itemName === item );
  if(result === undefined){
    return 'That item is not in your cart.'
  }
  let resultIndex = cart.indexOf(result);
  cart.splice(resultIndex,1);
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  let message = 'Your total cost is $'+ total() +', which will be charged to the card '+ cardNumber +'.';
  cart.length = 0;
  return message;
}
