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
  var price = Math.floor(Math.random(0, 100));
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

  if (cart.length > 0) {

    var itemList = [];

    for (let i = 0; i < cart.length; i++) {
      var itemData = cart[i];
      var item = Object.keys(itemData)[0];
      var price = itemData[item];

      itemList.push(`${item} at \$${price}`);

    }

    return console.log(`In your cart, you have ${itemList.join(', ')}.`);

  } else {
    return console.log("Your shopping cart is empty.");
  }

}

function removeFromCart(item) {
  var itemIsInCart = false

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemIsInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }

  if (!itemIsInCart) {
    console.log("That item is not in your cart.");
  }

  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  } else {
    cart = [];
    return console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
  }
}
