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
 if(item !== undefined){
 cart.push({[item]: Math.floor(Math.random() * 100) });
 console.log(`${item} has been added to your cart.`);
 return cart;
}
}

function viewCart() {
  getL = cart.length;
  console.log(getL);
  var displayCartString = [];
  var i = 0;
  if (getL === 0) {
   displayCartString[i] = "Your shopping cart is empty."
  } else {
    displayCartString[0] = "In your cart, you have"
    i++;
    console.log('here: ');
    for (var array of cart) {
      for (var key in array) {
        console.log( key+" at $"+ array[key]);
        console.log("length " + cart.length);
        displayCartString[i] = (((i===1)?' ':(i===cart.length&&i===2)?' and ':(i===cart.length)?', and ':", ") + key+" at $"+ array[key]);
      }
      i++;
    }
  }
  console.log(displayCartString.join('')+".");
}


function total() {
  // write your code here
  var total =0;
  for (var j= 0; j<cart.length; j++){
    var price = Object.values(cart[j]);
    for (var i=0; i<price.length; i++){
      total= total + price[i];
    }
  }
  return total ;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)===true){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log(`That item is removed.`)
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
  console.log(`Sorry, we don't have a credit card on file for you.`);
 }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    return cart;
  }
}
