var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = parseInt(Math.floor(Math.random() * 100));
 var List = [];
 List.push(item);
 console.log(`${price}`)
 
 for (var i = 0; i < List.length; i++) {
   item = { itemName: item, itemPrice: price };
   
   cart.push(item);
   
   return `${item.itemName} has been added to your cart.`
 }

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
