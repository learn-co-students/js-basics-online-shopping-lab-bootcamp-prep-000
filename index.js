var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100);

  cart.push({ 
				itemName: item, 
				itemPrice: price
				});
	return `${item} has been added to your cart.`;

}

function viewCart() {
  let newArray = [];

	for (let i = 0; i < cart.length; i++) {
		newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
		}
		let newArray2= newArray.slice(0, -1);
	  let newArray3 = newArray.slice(-1);
		if (cart.length === 1) {
			return `In your cart, you have ${newArray.join(', ')}.`;
	}
		else if (cart.length > 1) {

		  return `In your cart, you have ${newArray2.join(', ')}, and ${newArray3.join(', ')}.`;
		 }
			else {
			return ('Your shopping cart is empty.');
			}

}

function total() {
  let count = 0;
	for (let i = 0; i < cart.length; i++) {
		count += cart[i].itemPrice;
	}
		return count;
}

function removeFromCart(item) {
  
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
    }
  }
  for (let t = 0; t < cart.length; t++) {
    if (item !== cart[t].itemName) {
    }
  } 
  return 'That item is not in your cart.';
}





function placeOrder(cardNumber) {
  let x = total();
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  else if (cardNumber > 0) {
		  cart.length = 0;
		  return `Your total cost is $${x}, which will be charged to the card ${cardNumber}.`;
		  
  }
}

