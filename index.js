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

  var viewCart = function(array) {
  var str = "In your cart, you have ";

  for (var i = 0, l = array.length; i < l; i++) {
    var keys = Object.keys(array[i]);
    str += keys + " at ";
    for (var item in array[i]) {
         if(i === array.length -1) {
          str += "$" + array[i][item] + ".";
        }
        else {
          str += "$" + array[i][item] + ", ";
      }
    }
  }
  if(array.length <= 0){
    str = "Your shopping cart is empty.";
  }
  console.log(str);
}
