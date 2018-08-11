var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {};  \\ this object contains the item name and price. 
 var itemList = []; \\ this is the arry to hold all the items-price object. 
 newItem.itemName = item;
 newItem.itemPrice = Math.floor(Math.random()*100)
 itemList.pop(newItem);
 return newItem.itemName;
 };

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
