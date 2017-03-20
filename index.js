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
  var price = Math.floor(Math.random()*101);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var statement = "In your cart, you have";
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        statement += ` ${item} at $${cart[i][item]},`
      }
    }
    console.log(statement.substring(0, statement.length - 1) + '.');
  }
}

function removeFromCart(item_name) {
  var flag = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item_name)) {
      flag = true;
      cart.splice(i, 1);
      i = cart.length;
    }
  }
  if (flag === false) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
