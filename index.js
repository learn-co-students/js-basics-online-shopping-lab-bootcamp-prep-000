var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 101)
  cart.push({})
  cart[cart.length-1][item] = price;
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length < 1) {
    console.log(`Your shopping cart is empty.`)
  }

  var items = [];
  var prices = [];
  var item;

// to get items
  for (var i in cart) {
    item = Object.keys(cart[i])[0];
    items.push(item);
    prices.push(cart[i][item]);
  }

  var sent = `In your cart, you have `;
  for (var i in items) {
    if (i < items.length - 1) {
      sent += `${items[i]} at $${prices[i]}, `;
    } else {
      sent += `${items[i]} at $${prices[i]}.`
    }
  }
  console.log(sent);
}


function removeFromCart(item) {
// see if item is in cart
  var test = false;
  var index;
  loop:
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      test = true;
      index = i;
      break loop;
    }
  }
  console.log(i)
  if (test) {
    cart.splice(i,1)
    return cart
  } else {
    console.log(`That item is not in your cart.`)
  }
}

function placeOrder(num) {
  if (typeof(num) !== "number") {
    console.log(`We don't have a credit card on file for you to place your order.`)
  } else {
    var total = 0;
    var item;
    for (var i in cart) {
      item = Object.keys(cart[i])[0];
      total += cart[i][item];
    }
  }
  console.log(`Your total cost is $${total}, which will be charged to the card ${num}.`)
  cart = [];
  return cart
}



function setCart(newCart) {
  cart = newCart;
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
