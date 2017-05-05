var cart = [];

function getCart() {
  return cart;
}

function getKeysNValues(array) {
  var cartPrint = [];
  for (var i = 0; i < array.length; i++) {
    cartPrint.push((Object.keys(array[i])) + " " + (Object.values(array[i])));
  } return cartPrint;
}

function addToCart(item) {
  var min = 0;
  var max = 100;
  var itemPrice = Math.floor(Math.random() * (max-min)) + min;
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`)
  return getCart();
}

function viewCart() {
	var cartContent = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
	for (var i = 0; i < cart.length; i++) {
    var cartItem = Object.keys(cart[i])
    var cartItemValue = (cart[i])[Object.keys(cart[i])]
	  cartContent.push(cartItem + " at " + "$" + cartItemValue);
   }
 } console.log("In your cart, you have " + cartContent.join(', ') + ".");
}

/* Works too.
function viewCart() {
  var cartResults = []
  if (cart.length <= 0) {
    console.log("Your shopping cart is empty.")
  } else {
  for (var i = 0; i < cart.length; i++) {
    var objectValuesMap = Object.keys(cart[i]).map(function(key) {
      return cart[i][key];
    });
    cartResults.push((Object.keys(cart[i])) + " at " + "$" + objectValuesMap);;
  }
} console.log(`In your cart, you have ${cartResults.join(', ')}.`);
} */

/* Not recognizing Object.values, works in console but not IDE
function viewCart() {
  var cartResults = []
  if (cart.length <= 0) {
    console.log("Your shopping cart is empty.")
  } else {
  for (var i = 0; i < cart.length; i++) {
    cartResults.push((Object.keys(cart[i])) + " at " + "$" + (Object.values(cart[i])));;
  }
} console.log(`In your cart, you have ${cartResults.join(', ')}.`);
} */


function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
	    if (cart[i].hasOwnProperty(item)) {
		  var updateCartContents =cart.slice(0,i).concat(cart.slice(i + 1));
      cart = updateCartContents;
		  return cart;
    }
  } console.log("That item is not in your cart.");
}
function setCart(newCart) {
  cart = newCart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    const t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }
}


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
