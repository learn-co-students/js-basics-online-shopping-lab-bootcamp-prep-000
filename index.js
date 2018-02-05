var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function rand(num){return Math.floor(Math.random()*num+1);}

function addToCart(item) {
  cart.push({[item]: rand(100)});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var result = '';
  switch (true) {
    case (cart.length === 0):
      result = 'Your shopping cart is empty.';
      break;
    case (cart.length === 1):
      var key = Object.keys(cart[0])[0];
      result = `In your cart, you have ${key} at $${cart[0][key]}.`;
      break;
    case (cart.length === 2):
      var key0 = Object.keys(cart[0])[0];
      var key1 = Object.keys(cart[1])[0];
      result = `In your cart, you have ${key0} at $${cart[0][key0]} and ${key1} at $${cart[1][key1]}.`;
      break;
    case (cart.length > 2):
      var result = 'In your cart, you have';
      var key;
      for (var i = 0; i < cart.length; i++) {
        key = Object.keys(cart[i])[0];
        if(i < cart.length-1){
          result +=` ${key} at $${cart[i][key]},`;
        }else{
          result +=` and ${key} at $${cart[i][key]}.`;
        }
      }
      break;
    default:
  }
  console.log(result);
}

function total() {
  var result = 0;
  for (var i = 0; i < cart.length; i++) {
    result += cart[i][Object.keys(cart[i])[0]];
  }
  return result;
}

function removeFromCart(item) {
  var failer = true;
  for (var i = 0; i < cart.length; i++) {
    if (item === Object.keys(cart[i])[0]) {
      cart.splice(i, 1);
      console.log(i);
      failer = false;
    }
  }
  if(failer){
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }else{
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  cart = [];
}

// addToCart('a');
// addToCart('b');
// addToCart('c');
// addToCart('d');
// removeFromCart('b');
// viewCart();
