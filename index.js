var cart =  [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var itemObject = {};
  itemObject[item] = price;
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var listy = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        listy.push(`${item} at $${cart[i][item]}`)
      }
    }
      console.log(`In your cart, you have ${listy.join(", ")}.`)
    }
}

function removeFromCart(item) {
  var neverCalled = true;
  for (var i = 0; i < cart.length; i++) {
    for (var product in cart[i] ) {
      if (product === item) {
        cart.splice(i, 1);
        var neverCalled = false;
      }
    }
  }
  if (neverCalled === true) {
    console.log("That item is not in your cart.")
  } else {return cart}
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
  if (cardNumber > 0) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  } else {
    console.log ("We don't have a credit card on file for you to place your order.")
  }
}
