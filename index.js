var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  obj[item] = Math.floor(Math.random() * 100);
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function getItemsArray(cart) {
  var result = [];
  
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var itemName = Object.keys(obj)[0];
    var itemPrice = obj[itemName];
    var pair = `${itemName} at $${itemPrice}`;
    result.push(pair);
  }
  
  return result;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  
  var message = 'In your cart, you have ';
  var itemsArray = getItemsArray(cart);
  
  if (cart.length === 1) {
    message += itemsArray[0] + '.';
  } else if (cart.length === 2) {
    message += itemsArray[0] + ' and ' + itemsArray[1] + '.';
  } else {
    message += (itemsArray.slice(0, itemsArray.length - 1).join(', ')) + ',' + ' and ' + itemsArray[itemsArray.length -1] + '.';
  }
  
  console.log(message);
}

function total() {
  var total = 0;
  
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var itemName = Object.keys(obj);
    var itemPrice = obj[itemName[0]];
    total += itemPrice;
  }
  
  return total;
}

function findPosition(cart, item) {
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var itemName = Object.keys(obj);
    if (item === itemName[0]) {
      return i;
    }
  }
}

function removeFromCart(item) {
  var idx = findPosition(cart, item);
  
  if (idx === undefined) {
    console.log('That item is not in your cart.');
  } else {
    cart.splice(idx, 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
