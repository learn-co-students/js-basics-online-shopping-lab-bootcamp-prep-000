var cart = new Array();


function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({item : Math.floor(Math.random() * 100)});
  console.log(item + " has been added to your cart.")
  return cart;
}

function viewCart() {

  if (getCart().length === 0) {
    console.log("Your shopping cart is empty.");
  }

  for (var i = 0, l = getCart().length; i < l;  i++) {
    var cartView = "In your cart, you have ";

    for (var item in getCart()[i]) {
      var price = getCart()[i][item];
      cartView += `${item} at $${price},`;
      }

    console.log(cartView);
  }
}

function removeFromCart(item) {
  var i = 0, l = cart.length;
  var deleted = false;

  while (i < l || deleted === true) {
    if (cart[i].indexOf(item) !== -1) {
      delete cart[i].item;
      deleted = true;
    }
    i++;
  }
  if (!deleted) {
    console.log("That item is not in your cart");
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
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`);
    setCart();
  } else {
    console.log("We don't have a credit card on file for you to place your order");
  }
}
