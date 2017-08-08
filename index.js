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
  var price = Math.floor((Math.random() * 100));
  var obj = {[item]: price};
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var newAry = [];
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        newAry.push(`${item} at $${cart[i][item]}`);
      }
    }
    console.log(`In your cart, you have ${newAry.join(", ")}.`);
  }
}

function removeFromCart(item) {
  let itemsincart = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemsincart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (!itemsincart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(creditcardNum) {
  let total = 0
  if (creditcardNum === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    for (let i = 0; i < cart.length; i++) {
      for (let item in cart[i]) {
        total += cart[i][item]
      }
    }
    console.log(`Your total cost is $${total}, which will be charged to the card ${creditcardNum}.`)
    cart = []
  }
}
