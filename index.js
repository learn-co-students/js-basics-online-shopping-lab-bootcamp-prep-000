var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push(Object.assign({[item]: price}));
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var output = '';
  var itemName;
  var itemPrice;
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1) {
    itemName = Object.keys(cart[0]);
    console.log(`In your cart, you have ${itemName} at $${cart[0][itemName]}.`);
  } else if (cart.length === 2) {
    itemName = Object.keys(cart[0]);
    output = `${itemName} at $${cart[0][itemName]} and `;
    itemName = Object.keys(cart[1]);
    output = `${output}${itemName} at $${cart[1][itemName]}`;
    console.log(`In your cart, you have ${output}.`);
  } else if (cart.length > 2) {
    for (var i = 0; i < cart.length; i++) {
      itemName = Object.keys(cart[i]);
      if ( i + 1 === cart.length ) {
        output = `${output} and ${itemName} at $${cart[i][itemName]}`;
      } else if ( i + 1 < cart.length ) {
        output = `${output} ${itemName} at $${cart[i][itemName]},`;
      } else {
        console.log(`Error line 42 index.js`);
      }
    }
    console.log(`In your cart, you have${output}.`);
  }
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i ++) {
    totalPrice = totalPrice + cart[i][Object.keys(cart[i])];
  }
  return totalPrice;
}

function removeFromCart(item) {
  var itemFound = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemFound = true;
	    cart.splice(i, 1);
    }
  }
  if (itemFound === false) {
    console.log(`That item is not in your cart.`);
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }
}
