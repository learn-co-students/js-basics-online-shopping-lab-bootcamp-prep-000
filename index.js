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
  var price = Math.floor(Math.random() * 101);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartList = "In your cart, you have ";
  var cart = getCart();
  var inventory = "";
  var price = 0;

  for (var i = 0; i < cart.length; i++) {
      inventory = Object.keys(cart[i]);
      price = cart[i][inventory[0]];

      if (cartList === "In your cart, you have ") {
        cartList = cartList + inventory + " at $" + price;
      } else {
        cartList = cartList + ", " + inventory + " at $" + price;
      }
    }

  if (cartList === "In your cart, you have ") {
    console.log("Your shopping cart is empty.");
    return;
  }

  cartList = cartList + ".";
  console.log(cartList);
}

function removeFromCart(item) {
  var notInCart = true;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      notInCart = false;
    }
  }

  if (notInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(creditCardNumber) {
  if (creditCardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
  }

  cart = [];
}
