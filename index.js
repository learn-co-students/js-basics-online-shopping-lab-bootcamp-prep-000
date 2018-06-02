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
 var itemName = item;
 var price = Math.floor(Math.random() * 100 + 1);
 var newItem = { itemName: item, itemPrice: price };
 cart.push(newItem);
 return `${itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if ( cart.length === 0){
    return `Your shopping cart is empty.`;
  }else{
    for (var i=0; i < 0; i++) {
      
    }
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
