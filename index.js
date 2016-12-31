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
  cart.push({[item]: Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var message;
  if (cart.length !== 0) {
    message = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        if(i < cart.length - 1) {
          message += `${item} at $${cart[i][item]}, `;
        } else {
          message += `${item} at $${cart[i][item]}.`;
        }
      }
    }
  } else {
    message = "Your shopping cart is empty.";
  }
  console.log(message);
}

function removeFromCart(item) {
  var removed = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item){
        cart.splice(i, 1);
        removed++;
      }
    }
  }
  if (removed === 0) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
