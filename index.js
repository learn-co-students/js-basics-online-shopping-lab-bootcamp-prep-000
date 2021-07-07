var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 //var item = Object.assign({}, {[itemName]: itemPrice});
 cart.push( Object.assign({[itemName]: itemPrice}));
 console.log(itemName + " has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
 	if (cart.length >= 1) {
		var cartStatus = "In your cart, you have ";
		var and = "and";
		var at = "at";
		var totalItems = cart.length;
		
		for (var i = 0; i < cart.length; i++) { 
			var obj = cart[i];
			var objName = Object.keys(obj); 
			var objValue = cart[i][objName]; 
		
			if (totalItems === 1){
				cartStatus += `${objName} ${at} $${objValue}.`;
			}
				
			if (totalItems === 2) {
				if (i === 0) {
					cartStatus += `${objName} ${at} $${objValue}`;
				} else {
					cartStatus += ` and ${objName} ${at} $${objValue}.`;
				}
			}
			
			if (totalItems > 2) {
				if (totalItems > (i + 1)) {
					if (i === 0) {
						cartStatus += `${objName} ${at} $${objValue},`;
					} else {
						cartStatus += ` ${objName} ${at} $${objValue},`;
					}
				} else {
					cartStatus +=  ` and ${objName} ${at} $${objValue}.`;
				} 
					
			}	
		} 
	} else {
		cartStatus = "Your shopping cart is empty.";
	}
	console.log(cartStatus);
}

function total() {
  // write your code here
  var cartTotal = 0;
	
	for (var i = 0; i < cart.length; i++) {
		var obj = cart[i];
		var objName = Object.keys(obj); 
		var objValue = cart[i][objName];

		cartTotal = cartTotal + objValue;
	}
	return cartTotal;
}

function removeFromCart(itemName) {
  // write your code here
  	var itemRemoved = false;
	if (cart.length > 0) {
		for (var i = 0; i < cart.length; i++) {
			var obj = cart[i];
			var objName = Object.keys(obj); 
			if (obj.hasOwnProperty(itemName)) {
				cart.splice(i, 1);
				itemRemoved = true;
			}
		}
	}
	if (!itemRemoved) {
		console.log("That item is not in your cart.");
	}
	return cart;
}

function placeOrder(cardNumber){
  // write your code here
	var cartTotal = total();

	if ((cardNumber !== "") && (cardNumber !== null && (cardNumber!== undefined))){
	  console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
	  cart = [];
	} else {
	  console.log("Sorry, we don't have a credit card on file for you.");
	}

}

