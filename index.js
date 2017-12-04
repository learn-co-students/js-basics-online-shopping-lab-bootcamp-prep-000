var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  newItem[`${item}`] = Math.floor(100 * Math.random()) + 1;
  getCart().push(newItem);
  console.log(`${item} has been added to your cart.`)
  return getCart();
}

function viewCart() {
  var cart = getCart();
  var cartLength = cart.length;
  if (cartLength === 0) console.log('Your shopping cart is empty.');
  else {
    var output = 'In your cart, you have ';
    for (var i = 0; i < cartLength; i++){
      var item = Object.keys(cart[i]);
      var price = cart[i][item];

      output += `${cartLength === 2 && i === 1 ? ' ' : ''
        }${i === cartLength - 1 && i !== 0 ? 'and ' : ''
        }${item} at $${price
        }${cartLength !== 2 && i !== cartLength - 1 ? ', ' : ''}`;
    }
    output += '.';
    console.log(output);
  }
}

function total() {
  var total = 0;
  var cart = getCart();
  for (var i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  var foundItem = false;
  var cart = getCart();

  for (var i = 0; i < cart.length && !foundItem; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      foundItem = true;
    }
  }
  if (!foundItem) console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) console.log('Sorry, we don\'t have a credit card on file for you.');
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart(new Array());
  }
}
