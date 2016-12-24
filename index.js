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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var itemString = "";
    for (var i = 0 ; i < cart.length ; i++) {
      var itemNames = Object.keys(cart[i]);
      if (i + 1 === cart.length) {
      itemString += ` ${itemNames[0]} at $${cart[i][itemNames]}.`;
    } else {
      itemString += ` ${itemNames[0]} at $${cart[i][itemNames]},`;
    }
    }
    return console.log("In your cart, you have" + itemString);
  }
}

function removeFromCart(itemToRemove) {
  var counter = 0;
  for (var i = 0 ; i < cart.length ; i++) {
    if (cart[i].hasOwnProperty(itemToRemove)) {
      cart.splice(i, 1);
      counter ++;
    }
  }
  if (counter === 0) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    var newCart = [];
    setCart(newCart);
  }

}
