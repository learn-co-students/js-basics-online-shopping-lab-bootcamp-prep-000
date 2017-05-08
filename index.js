var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  cart.push(`${item}: ${price}`);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var i = 0;
  if (cart.length > 0) {
    for (i = 0; i < cart.length - 1; i++)
    var cartContents = [];
    cartContents.push(`${item[i]} at ${price[i]}`);
    return `In your cart, you have ${cartContents}.`
  } else {
    return "Your shopping cart is empty."
  }
}

function removeFromCart(item) {
  if (cart.length > 0 && cart.hasOwnProperty(item)){
  cart.pop(cart[item]);
  return cart;
  } else {
  return "That item is not in your cart.";
  }
}

/* function placeOrder(cardNumber) {
  if (cardNumber !== null){

    return `Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "We don't have a credit card on file for you to place your order.";
  }
  cart.length = 0;
} */
