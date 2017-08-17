var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var newItem = { [itemName]: Math.floor(Math.random() * 100 + 1) };
  cart.push(newItem);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1) {
    console.log(
      `In your cart, you have ${Object.keys(cart[0])} at $${Object.keys(
        cart[0]
      ).map(function(key) {
        return cart[0][key];
      })}.`
    );
  } else if (cart.length === 2) {
    console.log(
      `In your cart, you have ${Object.keys(cart[0])} at $${Object.keys(
        cart[0]
      ).map(function(key) {
        return cart[0][key];
      })} and ${Object.keys(cart[1])} at $${Object.keys(cart[1]).map(function(
        key
      ) {
        return cart[1][key];
      })}.`
    );
  } else {
    var listCartItems = [];
    for (var i = 0; i < cart.length; i++) {
      listCartItems.push(
        `${Object.keys(cart[i])} at $${Object.keys(cart[i]).map(function(key) {
          return cart[i][key];
        })}`
      );
    }
    console.log(
      `In your cart, you have ${listCartItems
        .slice(0, -1)
        .join(", ")}, and ${listCartItems.slice(-1)}.`
    );
  }
}

function total() {
  var totalValue = [];
  for (var i = 0; i < cart.length; i++) {
    totalValue.push(Number(Object.keys(cart[i]).map(key => cart[i][key])));
  }
  var totalValue = totalValue.reduce(function(a, b) {
    return a + b;
  }, 0);
  return totalValue;
}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  const cartTotal = total();
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(
      `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
    );
    cart = [];
  }
}
