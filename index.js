var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart (item) {
	if (item.length ===0) {
		console.log("nothing");
		return "There is nothing in the cart";
	}
  
  for (let i = 0; i < item.length; i++) {
    let newItem = {
   'itemName': item,
   'itemPrice': Math.floor(Math.random()*100)
    }
		cart.push(newItem);
return( `${item} has been added to your cart.`);
			}
		
}

function viewCart() {
	if(cart.length ===0) {
		console.log("empty");
		return "Your shopping cart is empty.";
	}
   if (cart.length ===1) {
		return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
	}
	if (cart.length===2) {
		return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.` ;
	}
	else if (cart.length > 2) {
		
	return`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
	
	}
}

function total( ){
	 let num = [];
	 let cartTotal = 0;
	 for (let i=0; i<cart.length; i++) {
		 num.push (cart[i].itemPrice);	
		 cartTotal += num[i];
	 }
	 return cartTotal;
 }
function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
		if (item === cart[i].itemName) {
			cart.splice(cart.indexOf(cart[i]), 1);
 			return cart; 
 		} 
 	}
  if (item !== cart.itemName) {
		console.log("N/A");
		return "That item is not in your cart."
	}
}

  
function placeOrder(ccNum) {
	if (arguments.length === 0) {
  return "Sorry, we don't have a credit card on file for you.";
		
	} else if (ccNum>0 ) {
		for (let i = 0; i < cart.length; i++) {
			let num = [];
			let cartTotal = 0;
			num.push(cart[i].itemPrice);
			cartTotal += num[i];
			cart.length = 0;
		  return `Your total cost is $${cartTotal}, which will be charged to the card ${ccNum}.`;
		}
	}

}