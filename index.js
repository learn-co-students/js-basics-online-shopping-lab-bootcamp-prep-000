var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
   item = [{
   itemName: '',
   itemPrice: ''
   }];
   
  item.itemPrice= Math.floor(Math.random()*100);
   if(item.itemName!==""){
     return itemName has been added to your cart
   }
   
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
