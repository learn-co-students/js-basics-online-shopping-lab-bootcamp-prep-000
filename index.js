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
  var price = Math.floor(Math.random()*100)
  var itempricepair = {}
  itempricepair[item] = price;
  cart.push(itempricepair);
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var message
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else {
    message = "In your cart, you have ";

    for (let i = 0; i < cart.length; i++) {
      for (let item in cart[i]) {
        message += `${item} at $${cart[i][item]}`;
        (i < cart.length - 1) ? message += ', ' : message += '.';
      }
    }

    console.log(message);
  }
}

function removeFromCart(item) {
  var foundItem = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      foundItem = true;
      cart.splice(i);
    }
  }

  if (foundItem === false) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(num) {
  if(num == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
  }

  for(var o in cart) {
    cart.splice(cart.indexOf(o),1)
  }
  return cart;
}
