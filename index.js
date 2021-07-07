var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var obj = {[itemName]: itemPrice};
  console.log(`${itemName} has been added to your cart.`);
  cart.push(obj);
  return cart;
 // write your code here
}

function viewCart() {
  // write your code here
  var keys = "";
  var key = "";
  var value = "";
  var j = 0;
  var statement = `In your cart, you have `;
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }else if(cart.length === 1){
    keys = Object.keys(cart[0]);
    key = keys[0];
    value = cart[0][key];
    console.log(statement + `${key} at $${value}.`);
  }else{
    for(var i = 0; i < cart.length; i++){
      keys = Object.keys(cart[i]);
      key = keys[0];
      value = cart[i][key];
      statement += `${key} at $${value}`;
      j = i + 2;
      if(j > cart.length){
        statement += `.`;
      }else if(cart.length < 3){
        statement += ` and `; 
      }else if(j === cart.length && cart.length >= 3){
        statement += `, and `; 
      }else{
        statement += `, `;
      }
    }
    console.log(statement);
  }
}

function total() {
  // write your code here
  var keys = "";
  var key = "";
  var value = "";
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    keys = Object.keys(cart[i]);
    key = keys[0];
    value = cart[i][key];
    total += value;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var keys = "";
  var key = "";
  for(var i = 0; i < cart.length; i++){
    keys = Object.keys(cart[i]);
    key = keys[0];
    if(key === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var cost = total();
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  
}
