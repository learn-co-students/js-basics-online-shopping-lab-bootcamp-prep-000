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
//       itemPrice: Math.floor(Math.random() * (100 - 1)) + 1,
//     }
//   }
//   return `${item} has been added to your cart.`
// }

function addToCart(item) {
  cart.push(item);
  cart = cart.map(list => ({
    itemName: list,
    itemPrice: Math.floor(Math.random() * (100 - 1)) + 1,
  }));
  return `${item} has been added to your cart.`
}

function viewCart() {
  let message = "In your cart, you have";
  let cartLength = cart.length;
  if (cartLength === 0) {
    return "Your shopping cart is empty."
  } else if (cartLength === 1) {
    cart.map(list => (
      message = `${message} ${list.itemName} at $${list.itemPrice}.`
    ));
  } else if (cartLength === 2) {
    let cartArr = cart.map(list => list);
    let i = 0;
    let cartItem = cartArr.splice(i, 1);
    return message = `${message} ${cartItem.itemName} at $${cartItem.itemPrice},
    and ${cartItem.itemName} at $${cartItem.itemPrice}.`
  }
  return message;
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
