var cart = [];

function getCart() {
	return cart;
}

function setCart(c) {
	cart = c;
	return cart;
}

function addToCart(item) {
	var price = function getRandomArbitrary() {
  		return Math.floor(Math.random() * (100 - 1) + 1);
	}
	var object = {};

	Object.assign(object, {
  		itemName: item,
  		itemPrice: parseInt(price())
	});

	cart.push(object);

	return item + " has been added to your cart.";
}

function viewCart() {
	if (cart.length > 0) {
		var combo = [];

		for (let i = 0; i < cart.length; i++) {
			if (cart.length >= 2) {
				if (i === (cart.length - 1)) {
					combo[i] = " and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".";
				} else {
					combo[i] = " " + cart[i].itemName + " at $" + cart[i].itemPrice;
				}
			}

			else if (cart.length === 1) {
				combo[i] = " " + cart[i].itemName + " at $" + cart[i].itemPrice + ".";
			}
		}

		return `In your cart, you have${combo}`;

	} else if (cart.length === 0) {
		return "Your shopping cart is empty.";
	}
}

function total() {

	var combo = [];

	cart.forEach(function(element) {
  		combo.push(element.itemPrice);
	});

	var sum = combo.reduce((a, b) => a + b, 0);

	return sum;
}

function removeFromCart(item) {
	for (let i = 0; i < cart.length; i++) {
		if (item === cart[i].itemName) {
			cart.splice(i, 1);
			return cart;
		}
	}

	return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
	if (cardNumber === undefined) {
		return `Sorry, we don't have a credit card on file for you.`;
	} else if (cardNumber > 0) {
		return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.${cart = []}`;
	}
}
