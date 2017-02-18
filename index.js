var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var itemPricePairs = [];
    var itemName;
    var itemPrice;

    for (var i = 0; i < cart.length; i++) {
      itemName = Object.keys(cart[i])[0];
      itemPrice = cart[i][itemName];
      itemPricePairs.push(`${itemName} at $${itemPrice}`);
    }

    console.log(`In your cart, you have ${itemPricePairs.join(', ')}.`);
  }
}

function removeFromCart(targetItem) {
  var cartChanged = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(targetItem)) {
      cart.splice(i, 1);
      cartChanged = true;
    }
  }

  if (!cartChanged) {
    console.log('That item is not in your cart.');
  }
  
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([]);
  }
} 
