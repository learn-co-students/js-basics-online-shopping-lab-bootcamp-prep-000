var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = parseInt(Math.floor(Math.random()*100))
  // var cartItem = {[item]: price}
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
 // write your code here

}

function viewCart() {
  var newStringArray=[]
  var outputString = "In your cart, you have "
    for(var i = 0; i < cart.length  ; i++) {
	    var arrayKey = Object.keys(cart[i])
	    var arrayValue = cart[i][arrayKey]
	    var itemString = `${arrayKey} at $${arrayValue}`
	    newStringArray.push(itemString)
    }

    if(cart.length === 0){
      console.log("Your shopping cart is empty.")
    } else {
      var i = 0
      do{
        outputString = outputString + newStringArray[i]
        if(newStringArray.length === 1) {
        	outputString = outputString + "."
        	console.log(outputString)
        	return
        } else if (newStringArray.length === 2){
        	outputString = outputString
        	break
        } else if (newStringArray.length > 2){
        	outputString = outputString + ", "
        i++
    	}
      } while (i < newStringArray.length - 1) {
      var finalItemIndex = newStringArray.length-1
      console.log(`${outputString.trim()} and ${newStringArray[finalItemIndex]}.`)
      }
    }
}

function removeFromCart(item) {
  const cartLength = cart.length
  for(var i = 0; i < cart.length; i++){
  	// Save Object key for comparison
  	var cartItemKey = Object.keys(cart[i]).toString()

     	if(cartItemKey === item) {
  		cart.splice(i, 1)
  		console.log(cart)
  		}
  }
  if(cartLength === cart.length){
  	console.log("That item is not in your cart.")
  }
}

function total() {
	var total = 0
	for(var i=0; i < cart.length; i++){
		var key = Object.keys(cart[i])
		total += cart[i][key]
	}
	return total
}

function placeOrder(cardNumber) {
	if(!cardNumber){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  // write your code here
}
