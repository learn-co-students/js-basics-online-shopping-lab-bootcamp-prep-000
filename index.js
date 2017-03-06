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
  var price = Math.floor(100 * Math.random());
  var newItem = {
    [item]: price
  }
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var newArray = [];
    for (let i = 0; i < cart.length; i++) {
      /*for (var item in cart[i]) {
      console.log(`In your cart, you have ${[item]} at $${cart[i][item]}.`)
    }*/
    var itemName = Object.keys(cart[i])
    newArray.push(`${itemName} at $${cart[i][itemName]}`)
    }
    console.log(`In your cart, you have ${newArray.join(", ")}.`)
  }
}

function removeFromCart(itemToRemove) {
  var removed = false;
  for (let i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(itemToRemove)) {
      cart.splice(i, 1);
      var removed = true;
  }
}
  if (removed === false) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(ccNum) {
  if (ccNum === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)
    cart.splice(0, cart.length);
  }
}
