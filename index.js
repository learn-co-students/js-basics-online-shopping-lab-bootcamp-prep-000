var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartItem = {[item]: Math.floor((Math.random() * 99)+1 )};
  cart.push(cartItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
if(cart.length === 0){
  console.log("Your shopping cart is empty.");
}else if(cart.length === 1){
  var cartItem = Object.keys(cart[0]);
  console.log(`In your cart, you have ${cartItem[0]} at $${cart[0][cartItem]}.`)
}else if(cart.length === 2){
  var firstCartItem = Object.keys(cart[0]);
  var secondCartItem = Object.keys(cart[1]);
  console.log(`In your cart, you have ${firstCartItem[0]} at $${cart[0][firstCartItem]} and ${secondCartItem[0]} at $${cart[1][secondCartItem]}.`);
}else if(cart.length >= 3){
  var output = "In your cart, you have";
  for(var i = 0; i < cart.length-1; i++){
    var cartItem = Object.keys(cart[i]);
    output += ` ${cartItem[0]} at $${cart[i][cartItem]},`;
  }
  var lastCartItem = Object.keys(cart[cart.length - 1]);
  output += ` and ${lastCartItem[0]} at $${cart[cart.length-1][lastCartItem]}.`;
  console.log(`${output}`);
}
}

function total() {
var total = 0;
  for(var i = 0; i < cart.length; i++){
    var value = Object.keys(cart[i]);
    total += cart[i][value];

  }
  return total;
}

function removeFromCart(item) {
  var i = 0
  for( i; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i , 1);
      return cart;
    }
  }
      console.log(`That item is not in your cart.`);
      return cart;
    }


function placeOrder(cardNumber){
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
