var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    [item]: Math.floor(Math.random() * 100) + 1
  });

  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var list = cart.length;
  var newArray = [];

  if (list == 0) {
    console.log("Your shopping cart is empty.")
  } else if (list == 1) {
    var firstItem = Object.keys(cart[0])[0];
    var firstItemCost = cart[0][Object.keys(cart[0])[0]];

    console.log(`In your cart, you have ${firstItem} at $${firstItemCost}.`)
  } else if (list == 2) {
    var firstItem = Object.keys(cart[0])[0];
    var firstItemCost = cart[0][Object.keys(cart[0])[0]];
    var secondItem = Object.keys(cart[1])[0];
    var secondItemCost = cart[1][Object.keys(cart[1])[0]];

    console.log(`In your cart, you have ${firstItem} at $${firstItemCost} and ${secondItem} at $${secondItemCost}.`);
  } else {
    for (var i = 0; i < list - 1; i++) {
      var item = Object.keys(cart[i])[0];
      var itemCost = cart[i][Object.keys(cart[i])[0]];
      newArray.push(` ${item} at $${itemCost}`);
    }
    var item = Object.keys(cart[list - 1])[0];
    var itemCost = cart[list - 1][Object.keys(cart[list - 1])[0]];
    newArray.push(` and ${item} at $${itemCost}`);

    console.log(`In your cart, you have${newArray}.`);
  }
}

function total() {
  var sum = 0;
  var list = cart.length

  if (list == 0) {
    return sum;
  } else {
    for (var i = 0; i < list; i++) {
      sum += cart[i][Object.keys(cart[i])[0]]
    }

    return sum;
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice([i], 1);
      return cart;
    }
  }

  console.log ("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log ("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  return cart;
}
