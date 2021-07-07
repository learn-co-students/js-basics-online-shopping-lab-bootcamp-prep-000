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
 cart.push({ [item] : Math.floor(Math.random() * 10) + 1 });
 console.log(`${item} has been added to your cart.`);

 return cart;

}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    var itemName = Object.keys(cart[0]);
    var itemPrice = cart[0][itemName];
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
  } else if (cart.length === 2) {
    var item1 = Object.keys(cart[0]);
    var item2 = Object.keys(cart[1]);
    console.log(`In your cart, you have ${item1} at $${cart[0][item1]} and ${item2} at $${cart[1][item2]}.`);
  } else if (cart.length >= 3) {
    var statement = "In your cart, you have ";
    for (var i = 0; cart.length > i; i++) {
      if (i < cart.length - 1) {
        var item = Object.keys(cart[i]);
        statement += `${item} at $${cart[i][item]}, `;
      } else {
        var item = Object.keys(cart[i]);
        statement += `and ${item} at $${cart[i][item]}.`;
      }
    }
    console.log(statement);
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; cart.length > i; i++) {
    var item = Object.keys(cart[i]);
    total += cart[i][item];
  }

  return total;
}

function removeFromCart(item) {
  var removed = false;
  for (var i = 0; cart.length > i; i++) {
    if (cart[i].hasOwnProperty(item)) {

      cart.splice(i, 1);

      return cart;
      removed = true;
    }
  }
  if (removed === false) {
    console.log("That item is not in your cart.");
  }
}



function placeOrder(cardNumber) {
  if (! cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  } else {
    var tot = total();
    console.log(`Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
