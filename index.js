var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
<<<<<<< HEAD
 var newItem = {};  // this object contains the item name and price.
 var itemList = []; // this is the arry to contails all the items-price objects.
=======
 var newItem = {};  \\ this object contains the item name and price.
 var itemList = []; \\ this is the arry to contails all the items-price objects.
>>>>>>> bb963aafada5bb097e2849afbdedfee0f1bf6c17
 newItem.itemName = item;
 newItem.itemPrice = Math.floor(Math.random()*100)
 itemList.pop(newItem);
 return newItem.itemName;
}

function viewCart() {
  if (itemList.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
<<<<<<< HEAD
      // need to figure out the output format.
=======

>>>>>>> bb963aafada5bb097e2849afbdedfee0f1bf6c17
  }
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
