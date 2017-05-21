var cart = [];

function getCart () {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var obj = {[item]:price}
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart () {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  } else {
    var message = 'In your cart, you have ';
    var item = [];
    var price = [];
    var itemPrice = [];
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        item.push(key)
        price.push(cart[i][key]);
      }
      itemPrice[i] = item[i] + " at $" + price[i]
    }
    console.log(message + itemPrice.join(', ') + ".")
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    return cart = [];
  }
}

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
