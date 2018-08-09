var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObj = { itemName: item, itemPrice: (Math.floor(Math.random() * 101)) }
  cart.push(itemObj)
  return `${item} has been added to your cart.`
}

function viewCart(){
	if(cart.length === 0){
		return 'Your shopping cart is empty.'
	} else {
		let prePend = 'In your cart, you have'
		let firstItemCombo = ` ${cart[0].itemName} at $${cart[0].itemPrice}`
		if(cart.length === 1){
			return prePend + firstItemCombo + '.'
		} else {
		let itemCombo = []
		let lastItemObj = cart.slice(-1)
		let lastItemCombo = ` ${lastItemObj[0].itemName} at $${lastItemObj[0].itemPrice}`

		for(let i = 0; i < cart.length - 1; i++){
			itemCombo.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
		} return prePend + itemCombo + ', and' + lastItemCombo + '.'
	    	}
	  } 
}

function total(){
	let itemPrice = []
	let total = 0
	for(let i = 0; i < cart.length; i++){
		itemPrice.push(cart[i].itemPrice)
	} for(let x = 0; x < itemPrice.length; x++){
		total += itemPrice[x]
	} return total
}

function removeFromCart(item){
	for(let i = 0; i < cart.length; i++){
		if(cart[i].itemName === item){
			cart.splice(i, 1)
			return cart
		}
	} return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(!cardNumber){
  	return "Sorry, we don't have a credit card on file for you."
  } else {
  	let totalStr = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  	cart = []
  	return totalStr
  	}
}
