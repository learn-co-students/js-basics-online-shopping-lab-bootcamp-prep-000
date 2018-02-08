var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randomNum = Math.floor(Math.random() * 101) + 1;
 var itemObj = {[item]: randomNum};
 
 console.log(`${item} has been added to your cart.`);
 cart.push(itemObj);
 return cart;
}

function viewCart() {
  var cartStr = 'In your cart, you have';
  
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else { 
    for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      var item = key;
      var price = cart[i][key];
      
      cartStr += ` ${item} at $${price}`;
      
      if ((i !== cart.length - 1 && cart.length > 2) || (i === cart.length - (3 + i) && cart.length > 2)) {
        cartStr += ',';
      }
      
      if (i === cart.length - 1) {
        cartStr += '.'
      }
      
      if (cart.length > 1 && i === cart.length - 2 ) {
        cartStr += ' and' 
      }
    }
  }
  console.log(cartStr);
 }
}

function total() {
  var sum = 0;
  for (var i = 0; i< cart.length; i++) {
    for (var item in cart[i]) {
      sum += cart[i][item];
    }
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
