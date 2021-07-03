var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var curCart = {[item]: parseInt((Math.random(1) * Math.floor(100)))};
 cart.push(curCart);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  var products = [];
  var values = [];
  var sentenceStructure = ['In your cart, you have', ];
  var finalString = '';
  var cartLength = cart.length;

  if(cart.length === 0) {
    finalString = 'Your shopping cart is empty.';
  }
  for(var i = 0; i < cart.length; i++) {
    products.push(Object.keys(cart[i]));
    values.push(Object.values(cart[i]));
    sentenceStructure.push(`${products[i]} at $${values[i]}`);
  }

  sentenceStructure[sentenceStructure.length - 1] += '.';

  if(sentenceStructure.length === 2) {
    finalString = sentenceStructure.join(' ');
  } else if(sentenceStructure.length === 3) {
    sentenceStructure.splice(2, 0, 'and');
    finalString = sentenceStructure.join(' ');
  } else if(sentenceStructure.length > 3) {
    for(var j = 1; j < sentenceStructure.length - 1; j++) {
      sentenceStructure[j] += ',';
    }
    sentenceStructure.splice(-1, 0, 'and');
    finalString = sentenceStructure.join(' ');
  }
  console.log(finalString);
}

function total() {
  var totalCart = 0;
  for(var i = 0; i < cart.length; i++) {
    totalCart += Number(Object.values(cart[i]));
  }
  return totalCart;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      delete cart[i];
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  var total = 0;
  var itemValues = [];

  if(!cardNumber) console.log('Sorry, we don\'t have a credit card on file for you.');

  for(var i = 0; i < cart.length; i++) {
    itemValues.push(Object.values(cart[i]));
  }

  for(var j = 0; j < itemValues.length; j++) {
    total += itemValues[j][0];
  }
  cart = cart.splice(0, -1);
  console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`);
}
