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
  return cart
}

// add the item and the price as an object ({{item: price}) to the cart array.
function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  // should I use ${} for pushing the object?
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  var list = "";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    let i = 0;

    while ( i < cart.length ) {
      for (var item in cart[i]) {
        list +=  `${item} at $${cart[i][item]}, `;
      }
      i += 1
    }
    list = list.slice(0, -2)
    console.log(`In your cart, you have ${list}.`)
  }
}

function removeFromCart(item) {
  if (cart.length === 0) {
    console.log("That item is not in your cart.")
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1)
        return cart
      } else {
        console.log("That item is not in your cart.")
      }
    }
  }
}

function placeOrder(cardNbr) {
  if (cardNbr !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNbr}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
