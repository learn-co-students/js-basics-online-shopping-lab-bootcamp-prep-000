var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(myItem) {
 var itemName = myItem;
 var itemPrice = Math.floor(Math.random() * 100);
 var newCartItem = { itemName: itemName, itemPrice: itemPrice };
 getCart().push(newCartItem);

 return `${itemName} has been added to your cart.`;
}

function viewCart() {
  var cartDescription = 'In your cart, you have';

  for (var x=0; x<getCart().length; x++) {
    if ( getCart().length == 1 ) {
       cartDescription = `${cartDescription} ${getCart()[x].itemName} at $${getCart()[x].itemPrice}.`;
    }
    if ( getCart().length >= 2 ) {
      if ( x == getCart().length - 1 ) {
        cartDescription = `${cartDescription} and`;

      }
      cartDescription = `${cartDescription} ${getCart()[x].itemName} at $${getCart()[x].itemPrice}`;
      if ( x == getCart().length - 1 ) {
        cartDescription = `${cartDescription}.`;
      }
      else {
        cartDescription = `${cartDescription},`;
      }
    }
  }
  if ( getCart().length == 0 ) {
    return "Your shopping cart is empty.";
  }// write your code here
  return cartDescription;
}

function total() {
  var cartTotal = 0;
  for (var x=0; x<getCart().length; x++) {
    cartTotal = getCart()[x].itemPrice + cartTotal;
  }
  return cartTotal;
}

function removeFromCart(item) {
  var itemName = item;
  var indexToDelete = -1;
  for (var x=0; x<getCart().length; x++) {
    if (getCart()[x].itemName == itemName) {
      indexToDelete = x;
    }
  }
  if (indexToDelete == -1) {
    return `That item is not in your cart.`;
  }
  else {
    return getCart().splice(indexToDelete, 1);
  }
// write your code here
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (cardNumber) {
    setCart([]);
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return `Sorry, we don't have a credit card on file for you.`
  }
  // write your code here
}
