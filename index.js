var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random()*100);
  cart.push({itemName:`${item}`, itemPrice:price});
  return (`${item} has been added to your cart.`)
}

function viewCart() {
	if (cart.length === 0) {
		return "Your shopping cart is empty."
	}
	else if (cart.length === 1) {
		return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
	}
	else if (cart.length > 1) {
		var cartNE = "In your cart, you have"
		for (var i = 0; i < cart.length; i++) {
			if (i === 0) {
				cartNE += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
			}
			else if (cart.length -2 >= i > 0) {
				cartNE += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
			}
			else if (i === cart.length -1) {
				cartNE += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
			return cartNE
			}
		}
	}
}

function total() {
var cartTotal = []
for (i = 0; i < cart.length -1; i++) {
cartTotal += cart[i].itemPrice
}
return cartTotal.reduce(reducer)
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
