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

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function getCart() {
  return cart;
}

//
// 'Your total cost is $80, which will be charged to the card 123.'
function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}

function removeFromCart(removeMe) {
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      if (cart[i].hasOwnProperty(removeMe)) {
        cart.splice(i,1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
}

function viewCart() {
  var report = "In your cart, you have ";
  var contents = [];
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      contents.push(`${item} at $${cart[i][item]}`);
    }
  }
  console.log(report + contents.join(", ") + ".");
}
