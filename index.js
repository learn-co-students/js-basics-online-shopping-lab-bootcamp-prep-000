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
 cart.push({ [item]: price });
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var ordered = [];

  if(!Array.isArray(cart) || !cart.length)
    return console.log("Your shopping cart is empty.");

  for(let i = 0; i < cart.length; i++) {
    let temp = cart[i];
    let item = Object.keys(temp)[0];
    let price = temp[item];
    ordered.push(`${item} at $${price}`);
  }

  if(ordered.length === 2)
    ordered = ordered.join(" and ");
  else if(ordered.length > 2) {
    let last = ordered.length - 1;
    ordered[last] = "and ".concat(ordered[last]);
    ordered = ordered.join(", ");
    debugger;
  }
  console.log(`In your cart, you have ${ordered}.`);
}

function total() {
  // write your code here
  var total = 0;

  for(let i = 0; i < cart.length; i++) {
    for(let item in cart[i]) {
      total += cart[i][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var hasItem = false;

  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      hasItem = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if(!hasItem)
    console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
