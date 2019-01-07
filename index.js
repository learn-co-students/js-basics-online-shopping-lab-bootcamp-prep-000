var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor((Math.random() * 100) + 1)})
  console.log(`${item} has been added to your cart.`)
  return cart
 };

function viewCart() {
  var cartString = []
	for (var i = 0; i < cart.length; i++) {
    cartString.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
  };
  var masterString = 'In your cart, you have ';
  var lastArray = cartString.slice(-1)
  if (0 === cart.length) {
      console.log('Your shopping cart is empty.')
    } else if (1 === cart.length) {
      console.log(masterString.concat(cartString[0]) + ".")
    } else if (2 === cart.length) {
      console.log(`In your cart, you have ${cartString[0]} and ${cartString[1]}.`)
    } else {
      cartString.pop();
      console.log(masterString.concat(cartString.join(", ") + ", and " + lastArray + "."))
      };
};

function total() {
  var cartVal = []
  function addCart(a, b) {
    return a + b;
  };
  for (var i = 0; i < cart.length; i++) {
    cartVal.push(cart[i][Object.keys(cart[i])])
  };
  return cartVal.reduce(addCart);
};

function removeFromCart(item) {
  var cartObj = {};
  var cartItems = [];
  for (var i = 0; i < cart.length; i++) {
    cartObj[Object.keys(cart[i])] = cart[i][Object.keys(cart[i])];
  };
  for (var i = 0; i < cart.length; i++) {
    cartItems.push(Object.keys(cart[i])); // this creates multiple arrays within array cartItems
    var allCartItems = [].concat.apply([], cartItems); // combines all those arrays into one
  };
  if (cartObj.hasOwnProperty(item)) {
    var cartIndex = allCartItems.indexOf(item);
    cart.splice(cartIndex, 1);
    return cart;
  } else {
    console.log('That item is not in your cart.');
    return cart;
  };
};

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  } else {
  console.log("Sorry, we don't have a credit card on file for you.");
  };
};
