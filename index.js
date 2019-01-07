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
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if (cart.length > 0){
    var all = "";
    for (var i = 0, l = cart.length-1; i < l; i++) {
      for (var item in cart[i]) {
        all += `${item} at $${cart[i][item]}, `;
      }
    }
    for (var item in cart[cart.length-1]) {
      all += `${item} at $${cart[i][item]}.`;
    }
    console.log("In your cart, you have " + all);
  }
  else {
    console.log("Your shopping cart is empty.");
  }

}

function removeFromCart(item) {
  var wasNotDeleted = true;
  for (var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)){
       cart = [];
      }
  }
  if (wasNotDeleted) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
