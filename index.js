var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemProp = {[item]: Math.floor(Math.random()*100 + 1)};
  cart.push(itemProp);
  console.log(`${item} has been added to your cart.` )
  return cart;

}

function viewCart() {
	if(cart.length === 0){
		console.log("Your shopping cart is empty.")
	} else if(cart.length === 1){
		console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + Object.values(cart[0])[0] + ".")
	} else if(cart.length > 1){
		  var tempArr = [];
	    for(var i = 0; i < cart.length - 1; i++){
	      var itemName = Object.keys(cart[i])[0];
	      var itemPrice = Object.values(cart[i])[0];
	      tempArr.push(`${itemName} at $${itemPrice}`)
    	}

      if(cart.length === 2){
    	var lastItemAndPrice = " and " + Object.keys(cart[cart.length-1])[0] + " at $" + Object.values(cart[cart.length-1])[0] + "."
    } else {
        lastItemAndPrice = ", and " + Object.keys(cart[cart.length-1])[0] + " at $" + Object.values(cart[cart.length-1])[0] + "."
    }
    	console.log("In your cart, you have " + tempArr.join(", ") + `${lastItemAndPrice}`)
  }
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i ++){
  	total += Object.values(cart[i])[0]
  }
  return total;
}

function removeFromCart(item) {
	var status = false;

	for(var i = 0; i < cart.length; i++){
	    if(cart[i].hasOwnProperty(item) === true){
	    	status = true;
	    	cart = cart.slice(0, i).concat(cart.slice(i + 1))
	    	return cart;
	    }
	}

	if(status === false){
		console.log("That item is not in your cart.")
	}
}
function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  }else if(cardNumber !== undefined){
    const totalPrice = total();
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }

}
