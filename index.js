var cart = [];

// our random number generator, takes no params (internal setup), returns int value
function getRandomInt()
{
  // set max price
  Math.ceil(100)
  
  // set min price
  Math.floor(1)
  
  // return the number
  return Math.floor(Math.random() * 101);
}



function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/*
The addToCart() function accepts one argument, the name of an item.
Use that passed-in string to create a new object representing the item. 
The object should consist of two key-value pairs : 
{ itemName: name of the item, itemPrice: price of the item, }. 
As more items are added, the cart should start to look something like this: 
[ { itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, 
                                            { itemName:"eggs", itemPrice: 49 }].
The price of each item should be a randomly-generated integer between 1 and 100.
*/

function addToCart(item) {
 // write your code here
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
