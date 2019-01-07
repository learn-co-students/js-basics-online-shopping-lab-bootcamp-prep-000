var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
	var price = Math.floor(Math.random() * 100)
	var entry = {[item]: price}
	cart.push(entry)
	console.log(`${item} has been added to your cart.`)
	return cart
}

function viewCart() {
	var result = []
	if (cart.length === 0){
		console.log("Your shopping cart is empty.")
	} else{
		for (var i=0; i < cart.length; i++){
			var key = Object.keys(cart[i])
			result.push(`${key[0]} at $${cart[i][key[0]]}`)
		}
	}
	if (cart.length === 2){
		console.log(`In your cart, you have ${result[0]} and ${result[1]}.`)
	}
	else if (cart.length > 2){
		console.log(`In your cart, you have ${result.slice(0, result.length - 1).join(', ')}, and ${result[result.length - 1]}.`)
	}
	else if (cart.length === 1){
		console.log(`In your cart, you have ${result[0]}.`)
	}
  // write your code here
}

function total() {
  	var total = 0
	if (cart.length === 0){
		return total
	}
  	for (var i = 0; i < cart.length; i++){
		var key = Object.keys(cart[i])
		total += cart[i][key[0]]
	}
	return total
}

function removeFromCart(item) {
	for (var i = 0; i < cart.length; i++){
		if (cart[i].hasOwnProperty(item)){
			cart.splice(i, 1)
			return cart
		}
	}
	console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
	if (typeof(cardNumber) === "undefined"){
		console.log("Sorry, we don\'t have a credit card on file for you.")
	}else{
		console.log(`Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`)
	}
	cart = []
}
