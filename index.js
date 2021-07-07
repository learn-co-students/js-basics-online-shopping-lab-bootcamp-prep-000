var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item = {itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(item);
 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  var listingCart = [];
  var i = 0;
  if (cart.length >= 1) {
  	while  (i < cart.length) {
  		if (cart.length === 1)	{
  			listingCart.push(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`)
  			return listingCart.toString(); 
  		}
  		else if (cart.length === 2) {
  			listingCart.push(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`)
  			return listingCart.toString(); 
  		}
  		else if (cart.length === 3) {
  			listingCart.push(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`)
  			return listingCart.toString(); 
  		}
  	}
  } else if (cart.length === 0){ 
  	  return 'Your shopping cart is empty.' 
  	}
}

//returning itemName: `${item}`, itemPrice: random number
//reducing -- the sum variable is the accumulator, i.itemPrice is the current value. 
//this '=>' functions initial value is 0 and adds those two

function total() {
	return cart.reduce((sum, i) => sum + i.itemPrice, 0);
}

// if the entered item is in the cart, remove it. return the updated cart

function removeFromCart(removeItem) {
  var cartRemoved = [];
  for (var i = 0; i < cart.length; i++) {
  	if (removeItem === getCart()[i].itemName) {
  		cartRemoved = getCart().splice(i, 1);
  		return cartRemoved;
  	} 
  } return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (cardNumber > 0) {
  	for (var i = 0; i < cart.length; i++){
  		cart.shift();
  	}
  	return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
  return "Sorry, we don't have a credit card on file for you."; 
}
