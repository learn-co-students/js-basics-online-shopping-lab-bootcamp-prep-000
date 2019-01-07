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
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 var newItem = {[item]: itemPrice};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
    return;
  }
  var result = 'In your cart, you have';
  if(cart.length === 1) {
    var itemName = Object.keys(cart[0])[0];
    var itemPrice = cart[0][itemName];
    console.log(`${result} ${itemName} at $${itemPrice}.`);
    return;
  }
  if(cart.length === 2){
    for(var i=0;i<cart.length;i++){
      var itemName = Object.keys(cart[i])[0];
      var itemPrice = cart[i][itemName];
      result = `${result} ${itemName} at $${itemPrice} and`;
    }

    console.log(`${result.substring(0,result.length-4)}.`);
    return;
  }
  if(cart.length > 2){
    for(var i=0;i<cart.length -1 ;i++){
      var itemName = Object.keys(cart[i])[0];
      var itemPrice = cart[i][itemName];
      result = `${result} ${itemName} at $${itemPrice},`;
    }
    var lastItemName = Object.keys(cart[cart.length-1])[0];
    var lastItemPrice = cart[cart.length-1][lastItemName];

    console.log(`${result} and ${lastItemName} at $${lastItemPrice}.`);
  }
}

function total() {
  // write your code here
  if(cart.length === 0 ){
    return 0;
  }
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total = total + cart[i][Object.keys(cart[i])[0]];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      return cart.splice(i,1);
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined || cardNumber === null || cardNumber === ''){
    console.log(`Sorry, we don't have a credit card on file for you.`);
    return;
  }
  var result = 0;
  while(cart.length !== 0){
    var item = cart.pop();
    result +=item[Object.keys(item)[0]];
  }
  console.log(`Your total cost is $${result}, which will be charged to the card ${cardNumber}.`);
}
