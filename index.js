var cart = [];

function setCart(newCart) {
  cart = newCart;
}


function getCart() {
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({item: itemPrice});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.');
  } else {
      var itemsInCart = 'In your cart, you have';
      for (var i = 0; i < cart.length; i++) {
        for (var item in cart[i]) {
        itemsInCart += '${item} at $${cart[i][item]}';
      }
      if (i < cart.length - 1) {
        itemsInCart += ', ';
      }
      else {
        itemsInCart += '.';
      }
    }
    console.log(itemsInCart);
  }
}

function removeFromCart(itemName) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        return cart.splice(i, 1);
      }
    }
    console.log('That item is not in your cart');
}

function total() {
  var t = 0;
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        t += cart[i][item];
      }
    }
    return t;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log('Your total is $${total()}, which will be charged to ${cardNumber}');
    setCart([]);
    } else {
        console.log("We don't have a credit card on file for your order.");
    }
  }
