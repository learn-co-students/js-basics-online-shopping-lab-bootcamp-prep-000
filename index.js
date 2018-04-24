var cart = [];
function getPrice() {
  return Math.floor(Math.random() * 100) + 1;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var price = getPrice(); 
  var item = {
    itemName: itemName,
    itemPrice: price
  }
  cart.push(item);
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  var message = "In your cart, you have ";
  if(cart.length === 0) {
    message = "Your shopping cart is empty.";
  } else {
  	for(var i = 0; i < cart.length; i++) {
	    message += `${i + 1 === cart.length && cart.length !== 1 ? 'and ' : ''}${getCart()[i].itemName} at $${getCart()[i].itemPrice}${i + 1 === cart.length ? '.' : ', '}`;
    }
  }
  return message;
}

function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  var found = false;
  for(var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      found = true;
    }
  }
  if(found) {
    return cart;
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if( cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var cost = total();
    cart.length = 0;
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
    
  }
}
