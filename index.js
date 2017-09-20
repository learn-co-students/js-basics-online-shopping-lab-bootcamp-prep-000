var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
    cart.push({[item] : price});
    console.log(item +' has been added to your cart.');
    return cart;
}

function viewCart() {
  if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
    } else {
      var newArr = [];

      for (var i = 0; i < cart.length; i++) {
        var price = Object.keys(cart[i]);

        for (var price in cart[i]) {
          newArr.push(`${Object.keys(cart[i])} at $${cart[i][price]}`);
        }
      }
      return console.log("In your cart, you have " + newArr.join(", ") + ".");
}

function total() {
  let ttl = 0;

  for (var i = 0; i < cart.length; i++) {

    for (var item in cart[i]) {
      ttl += cart[i][item];
    }
  }

  return ttl;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
      console.log('We don\'t have a credit card on file for you to place your order.');
    }
    else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
}
}
