var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
	return cart
}

function total() {
  var t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += Number(cart[i][item])
    }
  }
  return t
}

function addToCart(item) {
	var price = Math.floor(Math.random() * 100)
	var o = {}
	o[item] = price
	cart.push(o)
	console.log(item + " has been added to your cart.")
	return cart
}

function viewCart() {
	var Cart = []
		if (cart.length > 0) {
			for(var i = 0; i < cart.length; i++) {
				var o = cart[i];
				for(var key in o) {
					Cart.push(" " + key + " at $" + o[key]);
				}
			} console.log(`In your cart, you have` + Cart + `.`)
		} else console.log("Your shopping cart is empty.")
}

function removeFromCart(item) {
	//1
	for (var i = 0; i < cart.length; i++) {
		var p = cart[i];
		var q;
		if (p.hasOwnProperty(item)) {
			var q = 'foundIt'
		}
	}
	//2
	if (q != 'foundIt') {
		console.log("That item is not in your cart.")
		} else {
			for (var i = 0; i < cart.length; i++) {
				var p = cart[i];
				if (p.hasOwnProperty(item)) {
				cart.splice(i, 1)
			}
		} console.log(cart)
	}
}

function placeOrder(cardNumber) {
	if (cardNumber == undefined) {
		console.log("We don't have a credit card on file for you to place your order.")
	} else console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
	cart = []
}
