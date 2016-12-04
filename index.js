var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price
  price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartObject = {};
  var cartArray = [];
  var i;
  var l;
  if (cart.length > 0) {
    for (i = 0, l = cart.length; i < l; i++) {
      Object.assign(cartObject, cart[i]);
    }
    var cartKeys;
    cartKeys = Object.keys(cartObject);
    for (var cartKeys in cartObject) {
      cartArray.push(`${cartKeys} at $${cartObject[cartKeys]}`);
    }
    console.log(`In your cart, you have ${cartArray.join(', ')}.`);
    } else {
   console.log("Your shopping cart is empty.")
   }
}



function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item) === true) {
        cart.splice([i], 1);
        return cart
        }
      } console.log("That item is not in your cart.");
}

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


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (var i = 0, l = cart.length; i < l; i++) {
      cart.pop();
    }
  }
}
