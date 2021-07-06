var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price= Math.floor(Math.random() * 100) + 1;
  var item1 = {itemName:item,itemPrice:price};
  getCart().push(item1);
  return `${item1.itemName} has been added to your cart.`;
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription();
}

function total() {
  var t = 0;
  for (var i=0; i<getCart().length; i++) {
    t = t + getCart()[i].itemPrice;
  }
  return t;
  
}

function removeFromCart(itemName) {
  var x;
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {
      x = getCart()[i];
    }
  }
 
  return x ?  removeItemFromCart(x) : 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (arguments[0] ===undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } 
  else {
    var charging = total();
    setCart([]);
    return `Your total cost is $${charging}, which will be charged to the card ${cardNumber}.`;
  }
}


function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`;
}


function removeItemFromCart(itemToRemove) {
  var indexOfItem = cart.indexOf(itemToRemove);
  getCart().splice(indexOfItem,1);
}