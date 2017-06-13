var cart = []

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
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  var itemsWithCosts = [];
  for (var i = 0; i < cart.length; i++) {
    for (var items in cart[i]) {
      itemsWithCosts.push(` ${items} at $${cart[i][items]}`);
    }
  }
  console.log(`In your cart, you have${itemsWithCosts}.`)
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var items in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
        cart.pop()
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(number) {
  if (number === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
  }
  cart = []
}
