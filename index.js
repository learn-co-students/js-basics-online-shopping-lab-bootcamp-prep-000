var cart = [];

function priceRandom() {
  return Math.floor(Math.random() * 100);
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {itemName: item, itemPrice: priceRandom()};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var cl = cart.length;
  if (cl === 0) {
    return "Your shopping cart is empty."
  }
  else {
    var sentence = [];
    var counter = 0;
    do {
      sentence.push(` ${cart[counter].itemName} at $${cart[counter].itemPrice}`);
      counter++;
    } while (counter < cl - 1)
    if (cl > 1) {
      sentence.push(` and ${cart[cl - 1].itemName} at $${cart[cl - 1].itemPrice}`)
    }
  }
  return `In your cart, you have${sentence}.`
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var cl = cart.length;
  for (var i = 0; i < cl; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  if (cart.length === cl) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var tot = total();
    cart = [];
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
  }
}
