var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = { [item]: Math.floor(Math.random() * (100 - 1 + 1)) + 1 };
  cart.push(newObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var items = new Array();
  var keys = Object.keys(cart);

  for (var key in keys) {
    if (cart[key].hasOwnProperty(Object.keys(cart[key]))) {
      items.push(Object.keys(cart[key]) + " at $" + cart[key][Object.keys(cart[key])]);
      //console.log(cart[key]);
      //console.log(Object.keys(cart[key]) + " at " + cart[key][Object.keys(cart[key])]);
    }
  }

  var numberOfItems = items.length;

  if (numberOfItems < 1) {
    console.log(`Your shopping cart is empty.`);
  } else if (numberOfItems === 1) {
    console.log(`In your cart, you have ${items[0]}.`);
  } else {
    var output = `In your cart, you have `;

    if (numberOfItems <= 2) {
      for (let i = 0; i < numberOfItems - 1; i++) {
        output += `${items[i]} `;
      }
    } else {
      for (let i = 0; i < numberOfItems - 1; i++) {
        output += `${items[i]}, `;
      }
    }

    console.log(`${output}and ${items[numberOfItems - 1]}.`);
  }
}

function total() {
  var sum = 0;
  for (var key in cart) {
    sum += parseInt(cart[key][Object.keys(cart[key])]);
  }

  return sum;
}

function removeFromCart(item) {
  var keys = Object.keys(cart);
  var found = "";

  for (var object in cart) {
    if (item === Object.keys(cart[object]).toString()) {
      cart.splice(object, 1);
      return cart;
    }
  }

  console.log("That item is not in your cart.");
  return cart;

}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}
