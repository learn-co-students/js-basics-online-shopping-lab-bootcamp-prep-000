var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length) {
    var cartString = "In your cart, you have";
    cart.forEach(function(itemObject) {
      var item = Object.keys(itemObject)[0];
      cartString += ` ${item} at $${itemObject[item]},`;
    });
    var newCartString = cartString.replace(/,$/, '.');
    console.log(newCartString);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  var foundItemIndex = -1;
  cart.forEach(function(iteratedItem) {
    foundItemIndex++
    if (Object.keys(iteratedItem)[0] === item) {
      cart.splice(foundItemIndex,1);
    }
  })
  if ((cart.length-1) !== foundItemIndex) {
    return cart;
  } else {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(creditCardNumber) {
  if (creditCardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
