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

function getCart () {
  return cart;
}

function addToCart (item) {
  var priceOfItem = Math.floor(Math.random() * 100);
  var keyVal = {};
  keyVal[item] = priceOfItem;
  cart.push(keyVal);
  console.log(item + " has been added to your cart.");

  return cart;
}

function viewCart () {
  var itemsInCart = "In your cart, you have ";

  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }

  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      var val = cart[i][key];

      if (i === cart.length - 1){
        itemsInCart += Object.keys(cart[i]) + " at $" + val + ".";
      } else {
        itemsInCart += Object.keys(cart[i]) + " at $" + val + ", ";
      }
    }
  }

  console.log(itemsInCart);
}

function removeFromCart (item) {
  for (var i = 0; i < cart.length; i++){
    var itemObj = cart[i];

    if (itemObj.hasOwnProperty(item)){
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      return cart;
    }
  }

  console.log("That item is not in your cart.");
}

function placeOrder (creditCard) {
  if (arguments.length === 0){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
