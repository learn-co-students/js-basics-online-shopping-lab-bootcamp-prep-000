var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  // make random price for itemObj
  var itemPrice = Math.floor(Math.random() * 100);

  // make into an object - { itemName: name of the item, itemPrice: price of the item, }
  var itemObj = {itemName:itemName, itemPrice:itemPrice};
 
  // add to cart array
  cart.push(itemObj);
 
  //return message indicating that the item has been added to cart
  return (itemName + ' has been added to your cart.');
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
