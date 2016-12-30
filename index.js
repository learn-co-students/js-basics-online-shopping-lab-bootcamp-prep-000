var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  let message = "";
  if(cart.length === 0) {
    message = "Your shopping cart is empty.";
    console.log(message);
  } else {
    message = "In your cart, you have ";
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if(i < l - 1) {
          message += `${item} at $${cart[i][item]}, `;

        } else {
          message += `${item} at $${cart[i][item]}.`;
        }
      }
    } // for loop

  }
  console.log(message);
}

function removeFromCart(item) {
  // holds the index of the item in the cart
    var idx = -1;
    for(var i = 0, len = cart.length; i < len; i++) {
      if(cart[i].hasOwnProperty(item)) {
        idx = i;
      }
    }

    if(idx >= 0) {
      console.log('item found.');
      cart.splice(idx,1);
    } else {
      console.log('That item is not in your cart.');
    }
    return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}
