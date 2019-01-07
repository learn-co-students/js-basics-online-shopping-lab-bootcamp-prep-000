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
  return cart
}

function addToCart(item) {
  cart.push({[item]: Math.floor((Math.random() * 100))})
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var inCart = [] ;

      for (var i = 0; i < cart.length; i++) {
          for (var item in cart[i]) {
            inCart.push(`${item} at $${cart[i][item]}`)
          }
      }
    console.log("In your cart, you have " + inCart.join(', ') + ".");
  }
}

function removeFromCart(item) {
  var check;
  var index;

  for (var i = 0; i < cart.length; i++) {
    for (var items in cart[i]) {
      if (cart[i].hasOwnProperty([item])) {
        check = cart[i].hasOwnProperty([item]);
        index = cart.indexOf(cart[i])
      }
    }
  }

  if (check === true) {
      cart.splice(index, 1)
  } else {
    console.log("That item is not in your cart.");
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
