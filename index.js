var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  cart.push({ [item]: itemPrice });
  console.log(`${item} has been added to your cart.`);
  return cart;
  //creates object using "item" as key, randomly generates price as value then adds object cart array. 
  //logs ""item" has been added to your cart."
}

function viewCart() {
  if (cart.length === 1) {
    var viewCartArray1 = [
      `In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`
    ];
    console.log(viewCartArray1.toString());
  } else if (cart.length === 2) {
    var viewCartArray2 = [
      `In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`,
    ];
    console.log(viewCartArray2.toString());
  } else if (cart.length > 2) {
    var number = cart.length;
    var viewCartArray3 = [ `In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`];
    for (var i = 1; i < number - 2; i++) {
      viewCartArray3.push(
        ` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
      );
    }
    var next = i + 1;
    viewCartArray3.push(
      ` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, and ${Object.keys(cart[next])[0]} at $${cart[next][Object.keys(cart[next])[0]]}.`
    );
    console.log(viewCartArray3.toString());
  } else {
    console.log(`Your shopping cart is empty.`);
  }
}

function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    cartTotal += parseInt(cart[i][Object.keys(cart[i])[0]], 10);
  }
  return cartTotal;
}

function removeFromCart(item) {
  var itemCheck = false;
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      itemCheck = true;
      cart.splice(i, 1);
      return cart;
    }
  }
  if (itemCheck === false) {
    console.log(`That item is not in your cart.`);
  }
}

function placeOrder(cardNumber) {
  var cartTotal = total()
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    cart.splice(0, cart.length);
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  }
}
