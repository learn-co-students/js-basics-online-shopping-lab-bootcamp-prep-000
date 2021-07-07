var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
	var obj = {}
	obj['itemName'] = item
	obj['itemPrice'] = Math.floor(Math.random()*100)
	cart.push(obj)
	return `${item} has been added to your cart.`
}

function viewCart() {
	var items = []
	if (cart.length === 0) {
		return "Your shopping cart is empty."
	}
	else {
		for (var i = 0; i < cart.length; i++) {
			items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
		}
		var lastItem = items.pop()
		var itemsString = ""
		if (items.length === 0) {
		  itemsString = lastItem
		}
		else {
  		itemsString = `${items.join(', ')}, and ${lastItem}`
		}
		return `In your cart, you have ${itemsString}.`
	}
}

function total() {
	var sum = 0
	if (cart.length === 0) {
		return sum
	}
	else {
		for (var i = 0; i < cart.length; i++) {
			sum += cart[i].itemPrice
		}
		return sum
	}
}

function removeFromCart(item) {
	var cartIndex = -1
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].itemName == item) {
			cartIndex = i
		}
	}
	if (cartIndex == -1) {
		return "That item is not in your cart."
	}
	else {
    	cart.splice(cartIndex, 1)
	}
}

function placeOrder() {
	return "Sorry, we don't have a credit card on file for you."
}

function placeOrder(number) {
	if (number === undefined) {
		return "Sorry, we don't have a credit card on file for you."
	}
	else {
		var price = total()
		cart = []
		return `Your total cost is $${price}, which will be charged to the card ${number}.`
	}
}