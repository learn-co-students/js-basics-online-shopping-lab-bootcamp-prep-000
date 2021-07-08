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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var cartList = [];
    for (var i = 0; i < cart.length; i++) {
      var itemKey = Object.keys(cart[i])[0];
      var itemValue = cart[i][itemKey];
      cartList.push(`${itemKey} at $${itemValue}`);
    }
    console.log("In your cart, you have " + cartList.join(", ") + ".");
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(cardNumber === parseInt(cardNumber)) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    while(cart.length > 0) {
      cart.pop();
    };
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
