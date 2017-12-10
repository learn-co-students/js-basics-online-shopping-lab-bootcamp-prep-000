var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var num = Math.random() * 10;
  num = Math.floor(num);
  var newObj = {};
  newObj[item] = num;
  cart.push(newObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  var firstObj = cart[0];
  var secondObj = cart[1];
  var firstKey = Object.keys(firstObj);
  firstKey = firstKey[0];
  var firstPrice = firstObj[firstKey];
  if (cart.length === 1) {
    console.log(`In your cart, you have ${firstKey} at $${firstPrice}.`);
    return;
  }
  var secondKey = Object.keys(secondObj);
  secondKey = secondKey[0];
  var secondPrice = secondObj[secondKey];
  if (cart.length === 2) {
    console.log(`In your cart, you have ${firstKey} at $${firstPrice} and ${secondKey} at $${secondPrice}.`);
    return;
  }
  var result = "In your cart, you have ";
  for (var i = 0; i < cart.length - 1; i++) {
    var itemObj = cart[i];
    var keyArray = Object.keys(itemObj);
    var key = keyArray[0];
    var price = itemObj[key];
    result += `${key} at $${price}, `;
  }
  var finalItemObj = cart[cart.length - 1];
  var finalKeyArray = Object.keys(finalItemObj);
  var finalKey = finalKeyArray[0];
  var finalPrice = finalItemObj[finalKey];
  result += `and ${finalKey} at $${finalPrice}.`;
  console.log(result);
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    var itemObj = cart[i];
    var keyArray = Object.keys(itemObj);
    var key = keyArray[0];
    var price = itemObj[key];
    totalPrice += price;
  }
  return totalPrice;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var itemObj = cart[i];
    if (itemObj.hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  var cost = total();
  console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
