var cart = [];

function setCart(newCart) { //only assigns
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
  var itemObj = {};
  itemObj[item] = (Math.floor(Math.random() * 100));
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var str = `In your cart, you have `;
    for (var i = 0; i < cart.length - 1; i++) {
      var item = cart[i];

      for (var key in item) {
        str += `${key} at $${item[key]}, `;
      }

    }

    for (var k in cart[cart.length - 1]) {
      str += `${k} at $${cart[cart.length - 1][k]}.`;
    }

    console.log(str);

  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {

    var itemObj = cart[i];

    for (var key in itemObj) {

      if (itemObj[key] !== undefined) {
        cart = cart.slice(0, i) + cart.slice(i + 1);
        return cart;
      }

    }
  }

  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
