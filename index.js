var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.random() * (100 - 1) + 1;

  cart.push({[item]: Math.floor(randomPrice)});

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  var sentence = 'In your cart, you have ';
  var cartLength = cart.length;

  if (cartLength === 0) {
    sentence = 'Your shopping cart is empty.';
  } else {

    for (var i = 0; i < cartLength; i++) {
      var keys = Object.keys(cart[i]);

      if (cartLength === 1) {
        sentence += `${keys} at $${cart[i][keys]}.`;
      }

      if (cartLength === 2) {
        if (i === 0) {
          sentence += `${keys} at $${cart[i][keys]} `;
        } else {
          sentence += `and ${keys} at $${cart[i][keys]}.`;
        }
      }

      if (cartLength > 2) {
        if (i < cart.length - 1) {
          sentence += `${keys} at $${cart[i][keys]}, `;
        } else {
          sentence += `and ${keys} at $${cart[i][keys]}.`;
        }
      }
    }
  }
  console.log(sentence);
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var keys = Object.keys(cart[i]);
    sum += cart[i][keys];
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
