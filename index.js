var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length === 2) {
    var keyOne = Object.keys(cart[0]);
    var valueOne = cart[0][keyOne];
    var keyTwo = Object.keys(cart[1]);
    var valueTwo = cart[1][keyTwo];
    console.log(`In your cart, you have ${keyOne} at $${valueOne} and ${keyTwo} at $${valueTwo}.`);
  } else {
    var cartStr = "In your cart, you have";
    for (let i=0; i<cart.length; i++) {
      if (i+1 == cart.length) {
        cartStr += " and";
      }
      var key = Object.keys(cart[i]);
      var value = cart[i][key];
      cartStr += ` ${key} at $${value}`;
      if (i+1 < cart.length) {
        cartStr += ",";
      }
    }
    console.log(cartStr+".");
  }
}

function total() {
  var value = 0;
  for (let i=0; i<cart.length; i++) {
    var key = Object.keys(cart[i]);
    value += parseInt(cart[i][key]);
  }
  return value;
}

function removeFromCart(item) {
  var itemRemoved = false;
  for (let i=0; i<cart.length; i++) {
    var key = Object.keys(cart[i]);
    if (key == item) {
      cart.splice(i, 1);
      itemRemoved = true;
    }
  }

  if (itemRemoved == false) {
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var totalCost = total();
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
