var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var newItem = { [itemName]: itemPrice };
  cart.push(newItem);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');

  } else if (cart.length === 1) {
      var firstObject = cart[0];
      var firstItem = Object.keys(firstObject);
      console.log(`In your cart, you have ${firstItem} at $${firstObject[firstItem]}.`);

  } else if (cart.length === 2) {
    var listedItems = [];
    for (var i = 0; i < cart.length; i++) {
      var thisItem = Object.keys(cart[i]);
      listedItems.push(thisItem);
    }
    var firstObject = cart[0];
    var firstItem = Object.keys(firstObject);
    var secondObject = cart[1];
    var secondItem = Object.keys(secondObject);
    console.log(`In your cart, you have ${listedItems[0]} at $${cart[0][firstItem]} and ${listedItems[1]} at $${cart[1][secondItem]}.` );

  } else if (cart.length >= 3) {
    var listedItems = [];
    for (var i = 0; i < cart.length; i++) {
      var thisItem = Object.keys(cart[i]);
      listedItems.push(thisItem);
    }
    var firstObject = cart[0];
    var firstItem = Object.keys(firstObject);
    var middleItems = [];
    for (var i = 1; i < cart.length - 1; i++) {
      var nextItem = Object.keys(cart[i]);
      middleItems.push(` ${nextItem} at $${cart[i][nextItem]}`);
    }
    var lastObject = cart[cart.length-1];
    var lastItem = Object.keys(lastObject);
    console.log(`In your cart, you have ${listedItems[0]} at $${cart[0][firstItem]},${middleItems}, and ${listedItems[cart.length-1]} at $${cart[cart.length-1][lastItem]}.`)
  }
}

function total() {
  var totalPrice = 0;
  var listedItems = [];
  for (var i = 0; i < cart.length; i++) {
    var thisItem = Object.keys(cart[i]);
    listedItems.push(thisItem);
    totalPrice += cart[i][thisItem];
  }
  return totalPrice;
}

function removeFromCart(item) {
  var i = 0;
  while (i < cart.length) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
    i++
  }
  console.log ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var totalCost = 0;
    for (var i = 0; i < cart.length; i++) {
      var thisItem = Object.keys(cart[i]);
      var thisCost = cart[i][thisItem];
      totalCost += thisCost;
    }
    console.log (`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log ("Sorry, we don't have a credit card on file for you.");
  }
}
