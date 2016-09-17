var cart = [];

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

var getCart = function() {
  return cart;
}

var addToCart = function(item) {
  var price = Math.floor(Math.random(0) * 100);
  var obj = {};
  obj[item] = price;
  cart.push(obj);

  console.log(`${item} has been added to your cart.`);

  return cart;
}

var viewCart = function() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var str = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++) {
      for(var item in cart[i]) {
        str += `${item} at $${cart[i][item]}`;
         if(i === cart.length -1) {
           str += '.';
         }
         else {
           str+= ', ';
         }
      }
    }
    console.log(str);
  }
}

var removeFromCart = function(item) {
  if(cart.length === 0){
   console.log("That item is not in your cart.")
 }
  for(var i = 0; i < cart.length; i++){
      for(var thing in cart[i]){
        if(item === thing) {
          cart.splice(i, 1);
          return cart;
        }
        else {
          console.log("That item is not in your cart.")
        }
      }
    }
}

var placeOrder = function(cardNumber) {
  if(arguments.length === 0){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
