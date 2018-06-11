var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(itemName) {
    cart.push({itemName, itemPrice: (Math.floor(Math.random() * 100))});
    return `${itemName} has been added to your cart.`
 }

//


function viewCart() {
  for (var i = 0; i > cart.length; i++) {
    if (cart.length === 0) {
      return `Your shopping cart is empty`;
      } else if (cart.length === 1) {
        return `In your cart, you have ${itemName[i]} at ${itemPrice[i]}.`;
      } else if (cart.length === 2) {
        return `In your cart, you have ${cart[i].itemName} at ${cart[i].itemPrice}, and ${itemName[i]} at ${cart[i].itemPrice}.`;
      } else {
        var man = cart.legnth - 1;
        return `In your cart you have ${itemName[i]} at ${cart[i].itemPrice},${itemName[i]} at ${cart[i].itemPrice}, and ${cart[man].itemName at cart[man].itemPrice}`;
      }
      
    }
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
