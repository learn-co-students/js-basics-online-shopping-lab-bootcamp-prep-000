var cart = [];

function getRandomInt( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min )) + min;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = {}
  newObj[ 'itemName'] = item;
  newObj[ 'itemPrice' ] = getRandomInt( 1, 100 );
  cart.push(newObj);
  return `${ item } has been added to your cart.`
}

function viewCart () {
  var counter = cart.length; //so that I don't change the cart.length value
  if (counter == 0) {
    return "Your shopping cart is empty.";
  }
  else {
    let added = ''
    for (let i = 0; i < cart.length; i++) {
      if (i == cart.length - 1 && cart.length > 1) {
        added += ` and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if (cart.length == 1) {
        added += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else {
        added += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
    }
    return `In your cart, you have${added}.`
  }
}

function total() {
  var totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += parseInt(cart[i].itemPrice);
  }
  return totalCost;
}

function removeFromCart(item) {
  var itemIndex = 10;
  for (let i = 0; i < cart.length; i++) {
    if (item == cart[i].itemName) {
      itemIndex = i;
      cart.splice(i, 1);
    }
  }
  if (itemIndex == 10) {
    return 'That item is not in your cart.';
  }
}


function placeOrder(cardNumber) {
  var price = total();
  if (cardNumber == null ) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    cart.splice(0, cart.length);
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
  }
}
