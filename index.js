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
 var price = Math.floor((Math.random() * 100) + 1);
 var newItem = {[item]: price};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
if (cart.length === 0) {
  console.log("Your shopping cart is empty.");
} else {
  var statement = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var key = Object.keys(item);
    var price = item[key];
    if (cart.length === 1 ) {
      statement +=`${key} at $${price}.`;
    } else if (i === (cart.length - 1)) {
      statement += `and ${key} at $${price}.`;
    } else if (cart.length === 2) {
      statement += `${key} at $${price} `;
    } else {
      statement += `${key} at $${price}, `;
    }
  }
  console.log(statement);
}
}


function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      total += cart[i][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var sum = total();
  if (cardNumber) {
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
