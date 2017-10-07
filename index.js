var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = {};
  var itemPrice = Math.floor(Math.random() * 99 + 1);
  newObj[item] = itemPrice;
  cart.push(newObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart === undefined || cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return 'Your shopping cart is empty.';
  }
  var statement = 'In your cart, you have ';
  var stringArray = [];
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      var value = cart[i][key];
      stringArray.push(`${key} at $${value}`);
    }
  }
  if (stringArray.length === 1) {
    statement += stringArray[0] + '.';
    console.log(statement);
    return statement;
  } else if (stringArray.length === 2) {
    console.log(statement + stringArray.join(' and ') + '.');
    return statement;
  } else {
    statement += stringArray.slice(0, stringArray.length-1).join(', ') + ', and ' + stringArray[stringArray.length-1] + '.';
    console.log(statement);
    return statement;
  }
}

function total() {
  var sum = 0;
  if (cart === undefined || cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return 'Your shopping cart is empty.';
  }
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      var value = cart[i][key];
      sum += value;
    }
  }
  console.log(sum);
  return sum;
}

function removeFromCart(item) {
  var countRemoved = 0;
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    if (obj.hasOwnProperty(item)) {
      countRemoved++;
      cart.splice(i, 1);
    }
  }
  if (countRemoved === 0) {
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber === null) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
  return cart;
}
