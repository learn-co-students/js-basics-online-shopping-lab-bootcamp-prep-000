var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random() * 100);
 cart.push({[itemName]: itemPrice});
 console.log(`${itemName} has been added to cart.`);

 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty!');
  }
  var resultArray =[];
  let i = 0;

  while (i < cart.length;) {
    var item = Object.keys(cart[i])[0];
    var price = cart[i][itemName];
    resultArray.push(itemName + ' at $' + price);
    i++
  }
  console.log(`In your cart, you have ${resultArray.join(', ')}.`)
}

function total() {
  let total = 0;

  for (var i = 0; i < cart.length; i++) {
    for (var itemName in cart[i]) {
      t += cart[i][itemName];
    }
  }
  return t;
}

function removeFromCart(item) {
  var inCart = false;

  for (var n = 0; n < cart.length; n++) {
    if (cart[n].hasOwnProperty(item)) {
      var inCart = true;
      cart.shift(item)
    }
  }
  if (!inCart) {
    console.log('The item is not in your cart');
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  if (cardNumber != undefined) {
    console.log(`Your total is ${total}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
