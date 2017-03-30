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
  let price = Math.floor(Math.random()*101);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    } else {
      let message = "In your cart, you have";
      for (let i = 0, l = cart.length; i < l; i++) {
        for (let item in cart[i]) {
          switch (i) {
            case l - 1 : message = message + ` ${[item]} at $${cart[i][item]}.`;
            //this was designed so I could insert "and" before the last item in the list
            //but it works fine for the test requirements too
              break;
            default : message = message + ` ${[item]} at $${cart[i][item]},`;
              break;
            }
          }
        }
      console.log(message);
    }
}

function removeFromCart(item) {
  let removed = false;
  for (let i = 0, l = cart.length; i < l; i++) {
    for (let cartItem in cart[i]) {
      if (cartItem === item) {
        cart.splice(i, 1);
        console.log(`${item} was removed from your cart.`);
        removed = true;
      }
    }
  }
  if (removed === false) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardnumber) {
  if (cardnumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardnumber}.`);
    cart = []
  }
}
