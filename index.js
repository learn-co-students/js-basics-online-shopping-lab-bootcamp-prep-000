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
 var itemObject = { [item]: Math.floor(Math.random()*(100-1)+1)};
 cart.push(itemObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var s = "In your cart, you have";
    // Iterate through each object in the array
    for (var i = 0; i < cart.length; i++) {
      // Access the name of the item in the object,
      // and add the name and price to the string
      for (var k in cart[i]) {
        if (cart[i].hasOwnProperty(k)) {
          s += " " + k + " at $" + cart[i][k];
        }
      }
      // If last item in cart, always put period
      if (i+1 === cart.length) {
        s += ".";
      }
      // If second to last item in cart,
      // put "and" and decide whether to put Oxford comma
      else if (i+2 === cart.length) {
        if (cart.length >2) {
          s += ","; // Adds Oxford comma if 3+ items in cart
        }
        s += " and";
      }
      else {
        s += ",";
      }
    }
    console.log(s);
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    // Access the name of the item in the object,
    // and add the name and price to the string
    for (var k in cart[i]) {
      if (cart[i].hasOwnProperty(k)) {
        total += cart[i][k];
      }
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    // Access the name of the item in the object,
    // and add the name and price to the string
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  // If you're still in the function, it means it wasn't found in the cart
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}

// cart.push({bananas: 50});
// cart.push({kumquats: 60});
// cart.push({apples: 70});
// viewCart();
