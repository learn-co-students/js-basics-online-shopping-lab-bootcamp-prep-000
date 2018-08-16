var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName: item, itemPrice: Math.floor(Math.random()*100)+1 })
  return `${item} has been added to your cart.`
 }

function viewCart(){
  if (!cart.length) return 'Your shopping cart is empty.'
	let report = 'In your cart, you have'
	for(let i=0; i< cart.length; ++i){
		const currentObj = cart[i]
		if(i === 0) {
			report = `${report} ${currentObj.itemName} at $${currentObj.itemPrice}.`;
    }
		if(i === cart.length-1 && i !==0){
			report = `${report.slice(0, report.length-1)}, and ${currentObj.itemName} at $${currentObj.itemPrice}.`
			break;
    }
		if( i > 0) report = `${report.slice(0, report.length-1)}, ${currentObj.itemName} at $${currentObj.itemPrice},`
    }
	return report
}

function total() {
  let sum = 0;
  for(let i=0; i< cart.length; ++i){
    const currentObj = cart[i]
	  sum += currentObj.itemPrice
  }
  return sum
}

function removeFromCart(item) {
	for(let i=0; i< cart.length; ++i){
    	const currentObj = cart[i] ;
        if(currentObj.itemName === item){
            cart.splice(i, 1) //destructif
			      return cart
        }
    }
	return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  let price = total()
	if(cardNumber){
		cart.length = 0
		return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
    }
	return "Sorry, we don't have a credit card on file for you."
}
