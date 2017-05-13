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
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemList = "In your cart, you have ";

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (let i = 0; i < cart.length; i++) {
      for (var name in cart[i]) {
        itemList += `${name} at $${cart[i][name]}`;
      }

      if (i === cart.length - 1) {
        itemList += '.';
      } else {
        itemList += ', ';
      }
    }
    console.log(itemList);
  }
}

function removeFromCart(item) {
  var filteredCart = cart.filter(function(value) {
    return !value.hasOwnProperty(item);
  });

  if (filteredCart.length === cart.length) {
    console.log('That item is not in your cart.');
  } else {
    cart = filteredCart;
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
