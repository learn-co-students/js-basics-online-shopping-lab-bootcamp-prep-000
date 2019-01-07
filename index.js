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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var obj = {[item]: price};

  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else {
    var str = `In your cart, you have`;
    // Iterate through the cart array
    for (var i = 0; i < cart.length; i++){
      var thisItem = cart[i];
      var keyArray = Object.keys(thisItem);
      var key = keyArray[0];

      str += ` ${key} at $${thisItem[key]}`;
      i+1 < cart.length ? str += ',' : str += '.';

    }
    console.log(str);
  }
}

function removeFromCart(itemName){
	var startLength = cart.length;
  cart.forEach(function(itemObj, index){
  	var itemKey = Object.keys(itemObj)[0];
  	if (itemKey === itemName){
  		cart.splice(index,1);
  	}
  });
  if (cart.length === startLength){
  	console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(creditCard){
  if(arguments.length === 0){
    var str = "We don't have a credit card on file for you to place your order."
    console.log(str);
  }
  else {
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
}
