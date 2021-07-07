var cart = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({[itemName] : getRandomInt(1, 100)});
  console.log(`${itemName} has been added to your cart.`)
  return cart;
}

//In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
function viewCart() {
  const itemsAndPrice = [];
  for (let i = 0; i < cart.length; i++) {
    for (var itemName in cart[i])
    itemsAndPrice.push(`${itemName} at $${cart[i][itemName]}`);
  }
  if (!cart.length) {
    return console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1) {
    return console.log(`In your cart, you have ${itemsAndPrice}.`);
  } else if (cart.length === 2) {
    return console.log(`In your cart, you have ${itemsAndPrice.join(' and ')}.`);
  } else if (cart.length > 2) {
    return console.log(`In your cart, you have ${itemsAndPrice.slice(0, itemsAndPrice.length - 1).join(', ')}, and ${itemsAndPrice.slice(-1).join('')}.`);
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var itemName in cart[i]) {
      total+= cart[i][itemName];
    }
  }
  return total;
}

function removeFromCart(itemName) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i,1);
      //delete cart[i][itemName];
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}

addToCart('bananas');
addToCart('pancake batter');
addToCart('eggs');
console.log(cart);

//console.log(viewCart());
//console.log(total());

//placeOrder();
