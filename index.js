var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let randomNum = Math.round(Math.random() * 100);
  let newObj = {
    itemName: item,
    itemPrice: randomNum
  };
  cart.push(newObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let cartString = 'In your cart, you have ';
  // Cart is empty
  if(cart.length === 0){
    return('Your shopping cart is empty.');
  }
  // One item in cart
  else if(cart.length === 1){
    cartString += `${cart[0].itemName} at $${cart[0].itemPrice}.`; 
    return cartString;
  }
  // Multiple items in cart
  else{
    for(var i = 0; i < cart.length-1; i++){
      cartString += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    cartString += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    return cartString;
  }
}

function total() {
  // write your code here
  let cartTotal = 0;
  for(var i = 0; i < cart.length; i++){
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  // loop over cart. Check if key at i = item. If yes, delete key & return cart. Else, return 'That item is not in your cart'
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(arguments.length === 0){
    return 'Sorry, we don\'t have a credit card on file for you.';
  }else{
    let confirmed =  `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return confirmed;
  }
}
