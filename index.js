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
  var   price = Math.floor(Math.random() * 100)
  const myObject = {[item]:price};
  cart.push(myObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart () {
  if (cart.length === 0)
      console.log("Your shopping cart is empty.");
  const stuffInCart = [];
  for (var i = 0; i < cart.length; i++) {
      var myThing = Object.keys(getCart()[i]);

      stuffInCart.push(`${myThing} at $${getCart()[i][myThing]}`);
    }
    console.log(`In your cart, you have ${stuffInCart.join(", ")}.`);
}


function removeFromCart (item) {
  for (var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item) === true) {
  cart.splice(i);
  return cart;
  }
}
console.log("That item is not in your cart.")
return cart;
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.")
}    else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
cart = [];
    }
}
