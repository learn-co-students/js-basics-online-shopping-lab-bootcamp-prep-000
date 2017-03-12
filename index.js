var cart;
setCart([]);

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var itemPrice = {};
  itemPrice[item] = price;
  cart.push(itemPrice);
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
    return;
  }

  // transform cart objects {'something': 123 } into string array, e.g. ["puppy at $12", "cat at $78"]
  var formattedPairs = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      formattedPairs.push(item + ' at $' + cart[i][item]);
    }
  }

  console.log('In your cart, you have ' + formattedPairs.join(', ') + '.');
}

function removeFromCart(item) {
  var found = false;
  // loop over each object in the cart
  for (var i = 0; i < cart.length; i++) {
    // remove if current object matches parameter
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log("That item is not in your cart.")
  }
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
function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  setCart([])
}
