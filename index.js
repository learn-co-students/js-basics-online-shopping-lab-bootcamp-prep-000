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
 var myObject = new Object();
 myObject.itemName = item;
 myObject.itemPrice = Math.floor(Math.random() * (100 - 1)) + 1;
 cart.push(myObject);
 return `${myObject.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $ ${cart[0].itemPrice} `;
  }
  else {
    return `In your cart, you have ${cart} `;
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
