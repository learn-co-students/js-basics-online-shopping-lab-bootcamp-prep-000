var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.round(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var cartContent = [];
  var cartContentOutputToLog = '';

  for (var i = 0; i < cart.length; i++) {
    var currentItemName = Object.keys(cart[i]);
    var currentItemPrice = cart[i][currentItemName];

    cartContent.push(currentItemName + ' at $' + currentItemPrice);
  }

  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return;
  }

  if (cart.length === 1) {
    cartContentOutputToLog = cartContent.toString();
  } else if (cart.length === 2) {
    cartContentOutputToLog = cartContent.join(' and ');
  } else {
    var lastItem = cartContent[cartContent.length - 1].toString();

    cartContentOutputToLog = cartContent.join(', ');
    cartContentOutputToLog = cartContentOutputToLog.replace(', ' + lastItem, ', and ' + lastItem);
  }
  console.log('In your cart, you have ' + cartContentOutputToLog + '.');
}

function total() {
  var total = 0;
  cart.forEach(function(element){
    total += parseInt(Object.values(element), 10);
  });
  return total;
}

function removeFromCart(item) {
  var itemInCart = false;

  cart.forEach(function(element, i) {
    if (element.hasOwnProperty(item)) {
      cart.splice(i, 1);
      itemInCart = true;
    }
  });

  if (itemInCart === false) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var totalCost = total();
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
