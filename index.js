var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randomNum = Math.floor(Math.random() * 100) + 1;
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
  var isInCart = false
  
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      isInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
    
  console.log('That item is not in your cart.')

  return cart;
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } 
  
  console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);  
  
  cart = [];
}
