var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random()*100)+1);
 cart.push(new Object({itemName: item, itemPrice: price})); 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) { 
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`; 
  } else {
  var phrase = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice},`
  for (let i = 1; i < cart.length - 1; i++) {
    phrase += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
  phrase += ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  return phrase
  }
}

function total() {
  var sum=0; 
  var i=cart.length; 
  while(i--) 
  sum += cart[i].itemPrice;
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
    return cart.splice(i, 1);
  	}
  }
  return "That item is not in your cart.";
}





function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
  	return "Sorry, we don't have a credit card on file for you."
  } else {
  	var sum=0; 
  	var i=cart.length; 
  	while(i--) 
  	sum += cart[i].itemPrice;
  	cart = [];
  	return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
    } 
}
