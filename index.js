var cart = [];

function setCart(newCart) {
  cart = newCart;
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

function getCart() {
  return cart;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item) {
  var price = getRandomIntInclusive(0, 100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var viewArray = [];
    for (var i = 0; i < cart.length; i++) {
     viewArray.push(Object.keys(cart[i]).toString() + " at $" + cart[i][Object.keys(cart[i])]);
    }
    console.log("In your cart, you have " + viewArray.join(", ") + ".");
  }
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item) === false) {
      console.log("That item is not in your cart.");
    } else {
      cart.splice(cart.indexOf(cart[i]), 1);
      return cart;
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    setCart([]);
  }
}
