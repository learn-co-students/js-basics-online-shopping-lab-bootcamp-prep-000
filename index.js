var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100) + 1;
    var newItem = {[item]: price};
    cart.push(newItem);
    console.log( item + ' has been added to your cart.');
    return cart;

}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  }

  var string = "In your cart, you have ";

  if (cart.length === 1) {
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  } else {
    for (var i=0; i<cart.length; i++) {
      var text;
      if (i === cart.length - 2){
          text = ", and ";
      } else if (i === cart.length - 1) {
          text = "";
      } else {
          text = ", ";
      }
      string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + text + `${i === cart.length - 1 ? '.' : ''}`;
    }
  }

  return console.log(string);
}



function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    var currentObj = cart[i];
    var key = Object.keys(currentObj)[0];

    total += currentObj[key];
  }
  return total;
}


function removeFromCart(name) {
  var tempCart = [...cart];
  for(var i = 0; i< cart.length; i++){
  var currentItemAndPrice = cart[i];
  var item = Object.keys(currentItemAndPrice)[0];
  if(name === item){
    cart.splice(i,1);
  }
}
if(tempCart.length === cart.length){
  console.log('That item is not in your cart.');
}else{
  console.log(cart);
}
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }else{
    var totalCost = total();
    console.log('Your total cost is $' + totalCost + ', which will be charged to the card ' + cardNumber + '.');
    cart = [];
  }
}
