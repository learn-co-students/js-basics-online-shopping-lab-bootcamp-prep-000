var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item]: Math.floor(Math.random() * 100) + 1 });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartOutput = []
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")

  } else {
    for (let i = 0; i < cart.length; i++) {
      cartOutput[i] = ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`  // creates strings of "item at $price"
    }

    if (cart.length == 1) {
      console.log(`In your cart, you have${cartOutput[0]}.`)  //1
    } else if (cart.length == 2) {
      console.log(`In your cart, you have${cartOutput[0]} and${cartOutput[1]}.`)  //1 and 2
    } else if (cart.length > 2) {
      console.log(`In your cart, you have${cartOutput.slice(0,cartOutput.length-1)}, and${cartOutput[cartOutput.length-1]}.`) //1, 2, ..., and n
    }
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i][Object.keys(cart[i])]
  }
  return total;
}

function removeFromCart(item) {
  var detectChange = cart;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {   // if index contains item
      delete cart.splice(i, 1);
      return cart;
    }
  }
  if (detectChange == cart) {
    console.log('That item is not in your cart.')
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
