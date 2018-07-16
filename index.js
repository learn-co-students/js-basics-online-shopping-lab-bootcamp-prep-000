var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * 100)
 console.log("itemPrice: "+ itemPrice)
 var new_obj = {itemName: item, itemPrice: itemPrice};
 cart.push(new_obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var str = "In your cart, you have"
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else {
    for (var i = 0; i < cart.length; i++){
      str += ` ${i===cart.length-1 && cart.length > 1 ? "and " : ""}${cart[i].itemName} at $${cart[i].itemPrice}`
      str += `${i===cart.length-1 ? ".":","}`
      }
    }
  return str
}

function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
	if (cart.length === 0){
  	return "That item is not in your cart."
  } else {
  	for (var i = 0; i < cart.length; i++){
  		if (cart[i].itemName === item){
    		cart.splice(i, 1)
    	}else if (i === cart.length-1 && cart[i].itemName != item){
    		return "That item is not in your cart."
  		}
		}
	}
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  var totalAmount = total()
  cart = []
  return `Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`
}
