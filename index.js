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
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push( { [item]: price } );
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var msg = [];
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])[0];
      var price = cart[i][key];
      if (i === cart.length - 1 && i !== 0) {
        msg.push(`and ${key} at $${price}`);
      } else {
        msg.push(`${key} at $${price}`);
      }
    }
    if (cart.length === 2) {
      console.log(`In your cart, you have ${msg.join(" ")}.`);
    } else {
      console.log(`In your cart, you have ${msg.join(", ")}.`);
    }
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0];
    total += cart[i][key];
  }
  return total;
}

// This version removes all the repeated items if found.
function removeFromCart(item) {
  // write your code here
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      i--;
      found = true;
      // var temp = cart.splice(i);
      // temp.shift();
      // cart = [...cart, ...temp];
    } else if (i === cart.length - 1 && !found) {
      console.log("That item is not in your cart.");
    }
  }
  if (cart.length === 0) {
		console.log("That item is not in your cart.");
	}
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
