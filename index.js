var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var itemObject = { [item]: itemPrice };
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var l = cart.length

  if(l === 0) {
    return console.log('Your shopping cart is empty.');
  }

  var itemsAndPrices = [];

  for(var i = 0; i < l; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at $${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(' and ');
      break;
    default:
      itemsAndPrices[l-1] = 'and '.concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(', ');
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}


function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      sum += cart[i][item]; // cart[i][item] = itemPrice
    }
  }
  return sum;
}

function removeFromCart(item) {
  let itemInCart = false;

  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }

  if(!itemInCart) {
    console.log('That item is not in your cart.');
  }

  return cart;
}


function placeOrder(cardNumber) {
  var message = [];

  if(!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
