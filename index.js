var cart = [];
var x = "y";
//Define a function `getCart` that takes no arguments and returns the `cart`.

var getCart = function(){
  return cart;
}

var addToCart = function(item){
  var pricedItem = new Object ();
  pricedItem[item] = Math.floor(Math.random() * 100);
  cart.push(pricedItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

var viewCart = function(){

  if (cart.length === 0){
    console.log(`Your shopping cart is empty.`);
  }

  var msg = `In your cart, you have `;

  for (var i = 0; i < cart.length; i++){
    var obj = cart[i]
    for (var item in obj) {
      msg += `${item} + ' at $${obj[item]}`;
    }
  }
  msg = msg.slice(0,-1) + '.';
  console.log(msg);

}

var removeFromCart = function(item){
  for (var i = 0; i < cart.length; i++){
    var obj = cart[i];
    if (obj.hasOwnProperty(item)){
      cart.splice(i, 1);
    }

    if (obj.hasOwnProperty(item === false)) {
      console.log(`That item is not in your cart.`);
    }
  }

  cart.splice(0,cart.length)
}

var placeOrder = function(cc){
  if (cc == null){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cc}.`);
  }





}

/*
If there is a credit card on file, the function should print out:
 `"Your total cost is $${total()}, which will be charged to the card ${cardNumber}."
 `. The function should empty the `cart` array.*/


function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
