var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
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
    cart = cart.slice(pos, 0);
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
