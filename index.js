var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]; //t = t + cart[i][item]
    }
  }
  return t
}

/* 2) #total adds up the prices of the items in the cart:
     Error: Expected '0socks: 69puppy: 39iPhone: 39' to equal NaN
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:73:21)  */

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  cart.push(`${item}: ${price}`);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var i = 0;
  var cartKeys = Object.keys(cart);
  var cartContents = [];
  if (cart.length > 0) {
    for (i = 0; i < cart.length - 1; i++)
    var item = cartKeys[i];
    var price = cart[item];
    cartContents.push(`${item} at ${price}`);
    console.log(`In your cart, you have ${cartContents}.`) ;
  } else {
    console.log("Your shopping cart is empty.");
  }
}

/*   1) #viewCart should print each item in the cart and their cost:
     Error: spy was never called with [ 'In your cart, you have socks at $undefined, puppy at $undefined,
iPhone at $undefined.' ]
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toHaveBeenCalledWith (node_modules/expect/lib/Expectation.js:333:28)
      at Context.<anonymous> (test/index-test.js:49:25)   */

function removeFromCart(item) {
  if (cart.hasOwnProperty(item)){
    cart.pop(cart[item]);
    console.log(cart);
  } else {
    console.log("That item is not in your cart.");
  }
}
/* 3) #removeFromCart removes the item from the cart:
     Error: Expected false to be true
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toBe (node_modules/expect/lib/Expectation.js:66:28)
      at Context.<anonymous> (test/index-test.js:81:41)     */

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    var total = total();
    console.log(`Your total cost is ${total}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
  console.log(cart);
}
/* 4) #placeOrder lets you place an order with a credit card:
     Error: spy was never called with [ 'Your total cost is $0pizza: 43, which will be charged to the card
 123.' ]
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toHaveBeenCalledWith (node_modules/expect/lib/Expectation.js:333:28)
      at Context.<anonymous> (test/index-test.js:111:25)

  5) #placeOrder empties the cart:
     Error: Expected false to be true
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toBe (node_modules/expect/lib/Expectation.js:66:28)
      at Context.<anonymous> (test/index-test.js:119:41) */
