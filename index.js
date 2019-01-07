var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = (Math.floor(Math.random() * 100) + 1);
 var items = { [itemName]: itemPrice };
 cart.push(items);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}


function viewCart() {
  // write your code here
  var productsAtPrices = [];
  for (var i = 0; i < cart.length; i++) {
    var currentObj = cart[i];
    var keys = Object.keys(currentObj);
    var key = keys[0];
    var price = currentObj[key];
    productsAtPrices.push(`${key} at $${price}`);
  }
  var answerString = "In your cart, you have ";
  if (productsAtPrices.length == 1) {
    answerString += productsAtPrices[0];
  }
  else if (productsAtPrices.length == 2) {
    answerString += productsAtPrices[0];
    answerString += " and ";
    answerString += productsAtPrices[1];
  }
  else if (productsAtPrices.length >= 3) {
    for (var i = 0; i < productsAtPrices.length - 1; i++) {
      answerString += productsAtPrices[i];
      answerString += ", ";
    }
    answerString += "and ";
    answerString += productsAtPrices[productsAtPrices.length - 1];
  }
  else {
    answerString = "Your shopping cart is empty";
  }
  answerString += ".";
  console.log(answerString);
}

function total() {
  // write your code here
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var keys = Object.keys(obj);
    var key = keys[0];
    var value = obj[key];
    totalCost += value;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
  }
}
