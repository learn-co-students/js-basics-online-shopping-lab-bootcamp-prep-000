var cart = [];

function getCart() {
	return cart
}

function addToCart(item) {
	var price = Math.floor(Math.random() * 100);
	var object = {
		[item]: price
	};
	cart.push(object);
	console.log([item] + ' has been added to your cart.');
	return cart
}

function viewCart() {
	if (!cart.length) {
		return console.log('Your shopping cart is empty.')
	}
	var itemAndPrice = [];
	// var 'i' is index in 'cart', so it searces through the indexes in cart
	for (var i in cart) {
		// cart[i] is saved in variable called item.
		var item = cart[i];
		//we push the key and vaules as string to the array 'itemAndPrice'
		itemAndPrice.push(Object.keys(item) + " at " + '$' + item[Object.keys(item)]);
	}
	//log and seaparte the strings by words by using .join(', ')
	console.log('In your cart, you have ' + itemAndPrice.join(', ') + '.')
}

function removeFromCart(item) {
	//items start at boolean of false
	var items = false
		// if th item has its own property it becomes true
	for (var i in cart) {
		if (cart[i].hasOwnProperty(item)) {
			items = true
				//grabs value that starts at 0 then grabs up to but not the item, then concats where the item was removed
			cart = cart.slice(0, i).concat(cart.slice(i + 1))
		}
	}
	if (!items) {
		console.log('That item is not in your cart.')
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
  //return must be OUTSIDE the for loop or else it will only go through once and return
  return t // you have a return in the for loop, return breaks our of loops and just returns the value
}

function placeOrder(credit) {
	// if no credit card input
	if (!credit) {
		console.log('We don\'t have a credit card on file for you to place your order.');
	} // if there is a credit card number
	else {
		console.log('Your total cost is $' + total() + ", which will be charged to the card " + credit + ".")
	}
	//return empty cart
	return cart = []
}
