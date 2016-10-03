var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var temp = {};
  temp[item] = price;
  cart.push(temp);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var l = cart.length;
  if (l === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var result = 'In your cart, you have ';
    for (var i = 0; i < l; i++) {
      for (var item in cart[i]) {
        result += `${item} at $${cart[i][item]}`;
        if (i !== l - 1) {
          result += ', ';
        }
      }
    }
    console.log(`${result}.`);
  }
  return cart;
}

function removeFromCart(item) {
  var l = cart.length;
  if (l === 0) {
    console.log("That item is not in your cart.");
  } else {
    for (var i = 0; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
      }
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
      console.log("We don't have a credit card on file for you to place your order.");
    } else {
      console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
      cart = [];
    }
    return true;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t;
}
