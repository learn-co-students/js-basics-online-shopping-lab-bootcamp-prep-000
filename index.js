var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// function addToCart(item) {
//   cart.push(item);
//   for (let i = 0; i < cart.length; i++) {
//     cart[i] = {
//       itemName: cart[i],
//       itemPrice: Math.floor(Math.random() * (100 - 1) ) + 1,
//     }
//   }
//   return `${item} has been added to your cart.`
// }

function addToCart(item) {
  cart.push(item);
  cart = cart.map(list => ({
    itemName: list,
    itemPrice: Math.floor(Math.random() * (100 - 1) ) + 1,
  }));
  return `${item} has been added to your cart.`
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
