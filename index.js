var cart = [];

console.log('running');

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var itemObj = {};
  var price = Math.floor(Math.random()*100);
  itemObj[item]=price;
  console.log (`${item} has been added to your cart.`);
  cart.push(itemObj);
  return cart;
}

function viewCart () {
  if(cart.length === 0)
  {
    console.log('Your shopping cart is empty.');
  } else{
    var resStr = '';
    for(var i=0;i<cart.length;i++) {
      var itemObj=cart[i];
      for (var key in itemObj) {
        resStr += `, ${key} at $${itemObj[key]}`;
      }
    }
    resStr = resStr.substr(2);
    console.log(`In your cart, you have ${resStr}.`);
  }
}

function removeFromCart(item) {
  var i = 0;
  var startLen = cart.length
  while(i<cart.length) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
    } else {
      i += 1;
    }
  }
  if (cart.length === startLen) {
    console.log('That item is not in your cart.');
  }

  return cart;
}

function placeOrder(cc) {
  if(cc) {
    var total = 0;
    var itemObj;
    while (itemObj = cart.shift()) {
      for (var key in itemObj) {
        total += itemObj[key];
      }
    }
    console.log(`Your total cost is $${total}, which will be charged to the card ${cc}.`);
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
