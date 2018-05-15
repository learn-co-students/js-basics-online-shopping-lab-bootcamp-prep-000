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
 item = generateCartItem(item);
 getCart().push(item);
 return `${item.itemName} has been added to your cart.`;
 
}

function viewCart() {
  // write your code here
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription();
}

function total() {
  // write your code here
  var sum = sumUpPrices();
  return sum;
}

function removeFromCart(itemName) {
  // write your code here
  /* The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
+ If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
+ ***HINT***: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to be useful.
+ If the cart does not contain a matching item, the function should return `That item is not in your cart.` */

  var itemToRemove = searchCartForItemToRemove(itemName) //search for item to remove (if item exists) 
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyItemNotInCart();

}

function placeOrder(cardNumber) {
  // write your code here
   if (cardNumber === undefined) {
     return 'Sorry, we don\'t have a credit card on file for you.'
   } else {
     var sumToCharge = total()
     setCart([])
     return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
   }
  
}

// added functions
function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1,100) //cost
  };
}

function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min +1))+min;
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

  return `${cartDescription}.`
}

function sumUpPrices() {
  var sum = 0;
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice;
  }
  
  return sum;
  
}

function searchCartForItemToRemove(itemName) {
  var itemSearch;
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {
      itemSearch = getCart()[i];
    }
  } return itemSearch;
  
  
}

function notifyItemNotInCart() {
  return 'That item is not in your cart.';
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove);
  getCart().splice(indexOfItemToRemove,1);
}
