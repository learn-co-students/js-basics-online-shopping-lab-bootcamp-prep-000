var cart;

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

var cart = [];

function getCart() {
  return cart;
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100));
  var cartObj = { [item]: price };
  cart.push(cartObj)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var itemString = [];
    for (var item in cart) {
      var itemName = Object.keys(cart[item]);
      var itemPrice = cart[item][itemName];
      itemString.push(` ${itemName} at $${itemPrice}`);
    }
    console.log(`In your cart, you have${itemString}.`)
  }
}

function removeFromCart(item86) {
  for (let i = 0, l = cart.length; i <= l; i++) {
    if (i==l || !cart[i].hasOwnProperty(item86)) {
      console.log("That item is not in your cart.");
    } else {
      cart.splice(i, 1);
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.length = 0;
}
