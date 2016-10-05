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
  let price = Math.floor( Math.random() * 100 + 1)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let cartDetails = [];

  if (!cart.length == 0) {
    for (let i = 0, l = cart.length; i < l; i++) {
      for (let itemName in cart[i]) {
        cartDetails.push(` ${itemName} at $${cart[i][itemName]}`)
      }
    } console.log(`In your cart, you have${cartDetails}.`)
  } else {
    console.log('Your shopping cart is empty.')
  }
}


function removeFromCart(item) {

  let hasItem = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      hasItem = true;
      cart.splice(i, 1);
    }
  }

  if (!hasItem) {
    console.log(`That item is not in your cart.`);
  }

  return cart;
  }


function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log(`We don't have a credit card on file for you to place your order.`);
  } else {
    let t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
