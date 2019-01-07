var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({
    [item]: itemPrice
  });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    let one = `In your cart, you have ${Object.keys(cart[0])} at \$${cart[0][Object.keys(cart[0])]}.`
    console.log(`${one}`);
  } else if (cart.length === 2) {
    let two = `In your cart, you have ${Object.keys(cart[0])} at \$${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at \$${cart[1][Object.keys(cart[1])]}.`
    console.log(`${two}`);
  } else if (cart.length > 2) {
    var list = [];
    for (var i = 0; i < cart.length - 1; i++) {
      list.push(` ${Object.keys(cart[i])[0]} at \$${cart[i][Object.keys(cart[i])[0]]}`);
    }
    let e = cart.length - 1;
    let el = `and ${Object.keys(cart[e])} at \$${cart[e][Object.keys(cart[e])]}.`
    console.log(`In your cart, you have ${list}, ${el}`);
  }
}



function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
      cart.splice(i, 1)
      return cart
    } else {
      console.log('That item is not in your cart')
    }
  }
}



function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log('Sorry, we don\'t have a credit card on file.')
  } else {
    console.log(`Your total cost is ${total}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
