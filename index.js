var cart = [];

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

  return t;
}

function getCart() {
  return cart;
}

function addToCart(item) {
	var price = Math.floor(Math.random() * 100);
	cart.push({[item]: price});
	console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
	var allItems = [];
	if(cart.length === 0) {
		console.log("Your shopping cart is empty.");
	}
	else {
		for(var i = 0; i < cart.length; i++) {
			var item = Object.keys(cart[i])
			allItems.push(` ${item} at $${cart[i][item]}`);
		}
		console.log("In your cart, you have" + allItems + ".");
	}
}

function removeFromCart(item) {
	for(var i = 0; i < cart.length; i++) {
		if(cart[i].hasOwnProperty(item)) {
			cart.splice(i, 1);
			return cart;
		}
  }
	console.log("That item is not in your cart.");
}


function placeOrder(cardNumber) {
	if(cardNumber) {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
		cart.length = 0;
	}
	else {
		console.log("We don't have a credit card on file for you to place your order.");
	}
}
