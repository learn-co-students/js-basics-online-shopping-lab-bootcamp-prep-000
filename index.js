var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var o = {};
  o[item] = Math.floor(Math.random()*100)+1;
  cart[cart.length] = o;
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var message = ``;
  if (cart.length<1){
    message = message + `Your shopping cart is empty.`;
  } else if (cart.length===1){
    message = message + `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`;
  } else if (cart.length===2){
    message = message + `In your cart, you have`;
    for (let i=0; i<cart.length; i++){
      if (i<cart.length-1){
        message = message + ` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`;
      } else {
        message = message + ` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`;
      }
    }
  } else {
    message = message + `In your cart, you have`;
    for (let i=0; i<cart.length; i++){
      if (i<cart.length-1){
        message = message + ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`;
      } else {
        message = message + ` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`;
      }
    }
  }
  console.log(message);
}

function total() {
  var currentValue = 0;
  for (let i=0; i<cart.length; i++){
    currentValue = currentValue + parseInt(Object.values(cart[i]));
  }
  return currentValue;
}

function removeFromCart(item) {
  var itemNotFound = 1;
  for (let i=0; i<cart.length; i++){
    if (item===Object.keys(cart[i])[0]){
      itemNotFound = 0;
      var itemIndex = i;
      break;
    }
  }
  if (itemNotFound===1){
    console.log(`That item is not in your cart.`);
  } else {
    cart.splice(itemIndex,1);
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (arguments.length>0){
    var currentValue = total();
    console.log(`Your total cost is $${currentValue}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}