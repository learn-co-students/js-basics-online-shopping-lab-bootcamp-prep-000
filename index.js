var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemToAdd = {};
 itemToAdd[item] = Math.floor(Math.random() * 100) + 1;
 cart.push(itemToAdd);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    var obj = cart[0];

    for (var key in obj) {
      var item = key;
      var price = obj[key];
    }

    console.log(`In your cart, you have ${item} at $${price}.`)
  } else if (cart.length === 2) {
    var statement = "In your cart, you have ";

    for (var i = 0; i < cart.length; i++) {
      var obj = cart[i];

      for (var key in obj) {
        var item = key;
        var price = obj[key];
      }

      if (i === 0) {
        statement += `${item} at $${price} and `;
      } else {
        statement += `${item} at $${price}.`;
      }
    }

    console.log(statement);
  } else {
    var statement = "In your cart, you have ";

    for (var i = 0; i < cart.length; i++) {
      var obj = cart[i];

      for (var key in obj) {
        var item = key;
        var price = obj[key];
      }

      if (i === cart.length - 1) {
        statement += `${item} at $${price}.`;
      } else if (i === cart.length - 2){
        statement += `${item} at $${price}, and `;
      } else {
        statement += `${item} at $${price}, `;
      }
    }

    console.log(statement);
  }
}

function total() {
  var sum = 0;

  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];

    for (var key in obj) {
      sum += obj[key];
    }
  }

  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];

    for (var key in obj) {
      if (key === item) {
        cart.splice(i, 1);
        return cart;
      }
    }
  }

  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var cost = total();
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);
  }
}
