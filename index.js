var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function viewCart() {
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.');
  } else {
    var message = `In your cart, you have `;
    for (var i = 0; i < cart.length; i++) {
      if (i !== cart.length - 1) {
        for (var key in cart[i]) {
          message += `${key} at $${cart[i][key]}, `;
        }
      } else {
        for (var key in cart[i]) {
           message += `${key} at $${cart[i][key]}.`;
        }
      }
    }
    console.log(message);
  }
}

function removeFromCart(item) {
  var originalLength = cart.length;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }
  if (cart.length !== originalLength) {
    return cart;
  } else {
    console.log('That item is not in your cart.');
  }
}

function placeOrder(ccNumber) {
  if(ccNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`);
    cart.length = 0;
  }
}
