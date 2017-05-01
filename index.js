var cart = [];

function addToCart(item){
	cart.push({[item]: Math.floor(Math.random()*100)});
	console.log(`${item} has been added to your cart.`);
	return cart;
}

function getCart(){
	return cart;
}

function viewCart(){
  var message = "In your cart, you have"
	if (cart.length === 0){
		console.log("Your shopping cart is empty.")
	} else{
		for (let i = 0; i < cart.length; i++){
			for (var itemName in cart[i]){
				message += ` ${itemName} at $${cart[i][itemName]},`
			}
		}
    console.log(message.slice(0, -1) + ".")
	}
}

function removeFromCart(item){
	for (let i = 0; i < cart.length; i++){
		if (cart[i].hasOwnProperty(item)){
				cart.splice(i, 1)
				return cart;
			}
	}
	console.log("That item is not in your cart.")
}

function placeOrder(num){
	if (num === undefined){
		console.log("We don't have a credit card on file for you to place your order.")
	} else {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
		cart = []
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
