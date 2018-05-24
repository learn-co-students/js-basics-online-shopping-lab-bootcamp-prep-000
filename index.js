var cart = [];

function getCart() 
{
 return cart;
}

function addToCart(item) 
{
 
 
 var additem = { itemName: "name of the item", itemPrice: "price of the item" }
 var object= additem
 additem.itemName=item;
 additem.itemPrice= Math.floor((Math.random() * 100) + 1);
 cart.push(additem);
 
 return  `${additem.itemName} has been added to your cart.`
}

function setCart(c) {
  cart = c;
  return cart;
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
