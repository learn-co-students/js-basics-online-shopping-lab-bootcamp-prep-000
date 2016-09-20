var cart = [];

function getCart () {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1  ;
  var obj = {[item]: price};
  cart.push(obj);
  console.log(item + " has been added to your cart.");
  return cart;
}
function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
  	var prefix = "In your cart, you have ";
  	var suffix = "";

    for (var cartItems in cart) {
	var item_and_price_pair = cart[cartItems];
		suffix += Object.keys(item_and_price_pair) + " at " + "$" + item_and_price_pair[Object.keys(item_and_price_pair)] + ", ";
    }
  console.log(prefix + suffix.slice(0,-2) + ".");

  }
}


function removeFromCart(removedItem) {
for (var cartItems in cart) {
		var item_and_price_pair = cart[cartItems];
		var property = Object.keys(item_and_price_pair)[0];

		if (item_and_price_pair.hasOwnProperty(removedItem)) {
			cart.splice(cart[removedItem],1);
			var	deleted = true;
		}
}
	if (deleted) {
		return cart;
	}
	else {
	console.log("That item is not in your cart.");
	return cart;
	}
}

function setCart(newCart) {
  cart = newCart;
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


function setCart(newCart) {
  cart = newCart;
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


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
   var sum = 0;
    for (var cartItems in cart) {
      var item_and_price_pair = cart[cartItems];
      var property = Object.keys(item_and_price_pair)[0];
      var value = item_and_price_pair[Object.keys(item_and_price_pair)];
      sum += value;
    }
    console.log("Your total cost is $" + sum + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
