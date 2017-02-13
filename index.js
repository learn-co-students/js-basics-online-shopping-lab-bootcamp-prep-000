var cart = [], values = [];

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
function addToCart(item) {
  var tempItem = "" + item;
  console.log(tempItem);
  var tempPrice = Math.floor(Math.random()*100)
  console.log(tempPrice);
  values.push(tempPrice);
  var arr = [];
  //arr.push({[tempItem]:tempPrice});
  arr = [{[tempItem]:tempPrice}]
  console.log(`${item} has been added to your cart.`);
  cart = cart.concat(arr);
  return cart;
}
function removeFromCart(itemName) {
  for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(itemName)) {
        cart.splice([i],1);
        values.splice([i],1);
        return cart;
      }
    }
    console.log("That item is not in your cart.")
  }
  function placeOrder(cc) {
  var tempCC = cc;
  if (typeof tempCC === 'undefined') {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
  }
  cart = [];
}
function getCart() {
  return cart;
}
function viewCart() {
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var str = "";
    var priceArr = [];
    var itemArr = [];
    for (var i = 0; i < cart.length; i++) {
      itemArr.push(Object.keys(cart[i]));
        //priceArr.push(cart[i].itemArr[i]);
        //console.log(Object.keys(cart[i]));
    }
    //var keys = Object.keys(cart);
    //var values = keys.map(function(v) { return cart[v]; });
// need to pull values
    for (var i = 0; i < cart.length; i++) {
	  var t = Object.keys(cart[i]);
		console.log(t);
      str += ` ${itemArr[i]} at $${cart[i][t]},`;
      //console.log(str);
    }

    str = str.substring(0, str.length-1);
    str += ".";
    console.log('In your cart, you have' + str)
  }
}
