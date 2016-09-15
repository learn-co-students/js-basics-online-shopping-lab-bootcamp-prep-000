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


var addToCart = function(item2Buy) {
  var price = Math.floor(Math.random(0) * 100);
  var obj = {};
  obj[item2Buy] = price;
  cart.push(obj);

  console.log(`${item2Buy} has been added to your cart.`);
  return cart;
}

  var viewCart = function() {

  var str = "In your cart, you have ";

  for (var i = 0; i < cart.length;  i++) {
    var keys = Object.keys(cart[i]);
    str += keys + " at ";
    for (var item in cart[i]) {
         if(i === cart.length -1) {
          str += "$" + cart[i][item] + ".";
        }
        else {
          str += "$" + cart[i][item] + ", ";
      }
    }
  }
  if(cart.length <= 0){
    str = "Your shopping cart is empty.";
  }
  console.log(str);
}

var removeFromCart = function(item) {
  var keys = Object.keys(cart);
  var count = 0;

  for(var i = 0; i < cart.length; i++) {
   if(cart[i][item]) {
     count++;
     cart.splice(cart.indexOf(item), 1)
   }

  }
   if(count === 0){
     console.log("That item is not in your cart.")
   }
}


var placeOrder = function(cc) {
  if(arguments.length === 0) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
  }
  cart = [];

}
