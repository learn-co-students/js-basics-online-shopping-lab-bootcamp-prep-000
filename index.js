var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  // write your code here
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({[itemName]: itemPrice});
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }

  const items = [];
  let sumUp = "";
  let last = "";

  for(let i = 0; i < cart.length; i++) {
    for (let key in cart[i]) {
      items[i] = `${key} at $${cart[i][key]}`;
    }
  }

  if (items.length === 1) {
    sumUp = items[0];
  } else if (items.length === 2) {
    sumUp = items.join(' and ');
  } else if (items.length > 2) {
    last = items.pop();
    sumUp = `${items.join(', ')}, and ${last}`;
  }

  return console.log(`In your cart, you have ${sumUp}.`);
}

function total() {
  // write your code here
  let total = 0;
  for(let i = 0;i < cart.length; i++) {
    for (var key in cart[i]) {
      total += parseFloat(cart[i][key]);
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0;i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  let msg;
  if(cardNumber) {
    msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return console.log(msg);
  } else {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
}
