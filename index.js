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

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var message = 'In your cart, you have ';
  var item;
  if (cart.length <= 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0, l = cart.length; i < l; i++) {
      item = Object.keys(cart[i])
      message += `${item} at $${cart[i][item]}, `;
    }
  }
      message = message.replace(/, $/, ".")
      console.log(message)
  }

  function checkCart(item) {
    for (var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        return true
      }
    }
    return false
  }

  function getPos(item) {
    for (var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        return i
      }
    }
  }

function removeFromCart(item) {
  var pos = getPos(item);
  if (checkCart(item)) {
    cart = cart.slice(0,pos).concat(pos + 1, cart.length)
    return cart
  } else {
    console.log("That item is not in your cart.")
  }
}

function removeFromCart(item) {
  var pos = getPos(item);
  if (checkCart(item)) {
    var current_item = cart[pos];
    cart = cart.slice(pos,0);
    return cart
  } else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    const t = total();
    cart = [];
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
