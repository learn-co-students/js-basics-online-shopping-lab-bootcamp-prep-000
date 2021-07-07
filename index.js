var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function addToCart(item) {
  var newItem = {[item]: randomNumber()};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var cartItems = "In your cart, you have ";

    if (cart.length <= 2) {
      for (var i = 0; i < cart.length; i++) {
        if (i === 0) {
          cartItems += (`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
        } else {
          cartItems += (` and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
        }
      }
    } else {
        for (var i = 0; i < cart.length; i++) {
          if (i !== cart.length - 1) {
            cartItems += (`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `);
          } else {
            cartItems += (`and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
          }
        }
    }

    cartItems += "."
    console.log(cartItems);
  }



}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  var hasproperty = false;
  var a = 0;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      hasproperty = true;
      a = i;
    }
  }
  if (!hasproperty) {
    console.log("That item is not in your cart.");
    return cart;
  } else {
     cart.splice(a, 1);
    return cart;
  }

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
