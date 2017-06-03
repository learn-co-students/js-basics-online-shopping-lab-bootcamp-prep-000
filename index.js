var cart = []

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);

  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

function removeFromCart(item) {
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart
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
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
