var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}


function addToCart(item) {
 // write your code here
 var item = generateCartItem(item);
 getCart().push(item);
 return `${item.itemName} has been added to your cart.`;
 }

function viewCart() {
  // write your code here
  return getCart().length === 0 ? `Your shopping cart is empty.` : generateCartItem();
}

function total() {
  // write your code here
  var sum = sumUpPrices ();
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var itemToRemove = searchCartForItemToRemove(itemname);
  return itemToRemove ? removeItemFromCart(itemToRemove): notifyUserThereIsNoItemToRemove();
}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments[0] === undefined) {
    return `Sorry, we do not have a credit card on file for you.`
  } else {
    return `Your total cost is $$(sumToCharge), which will be charged to the card ${cardNumber}`;
  }
}

// helper functions

function generateCartItem(itemName) {
  return{
    itemName:itemName,
    itemPrice:getRandomInt(1,100)
  }
}

function generateCartDescription() {
  var cartDescription = `In your cart, you have.`;
  if (getCart(),length >= 1)  {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
  }
}

if ( getCart().length += 2 ) {
  var middleCartItemsDescription = '';
  for (var i = 1; i < getCart().length -1; i++); {
    middleCartItemsDescription += `${getCart()[i].itemName}`  `$${getCart()[i].itemPrice}`;
  }
}
getCart().splice(indexOfItemToRemove,1);
