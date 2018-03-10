var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var obj = {};
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  obj[itemName] = itemPrice;
  cart.push(obj);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemsAndPrices = [];
  var intro = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
        itemsAndPrices.push(`${item} at $${price}`);  
    }
    var midItems = itemsAndPrices.join(' and ');
    var beginning = itemsAndPrices.slice(0, -1).join(', ');
    var end = itemsAndPrices.slice(-1);

  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else if (cart.length === 1) {
    console.log(`${intro} ${itemsAndPrices}.`);
  } else if (cart.length === 2) {
    console.log(`${intro} ${midItems}.`);
  } else if (cart.length > 2) { 
    console.log(`${intro} ${beginning}, and ${end}.`);
  }
}

function total() {
  var totalCost = 0; 
for (var i = 0; i < cart.length; i++){
  totalCost += cart[i][Object.keys(cart[i])];
}
return totalCost;
}

function removeFromCart(item) {
  for (var i = 0; i <cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
    if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (var i = cart.length; i >= 0; i--) {
      cart.pop();
    } 
  } 
  else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  return cart;
}