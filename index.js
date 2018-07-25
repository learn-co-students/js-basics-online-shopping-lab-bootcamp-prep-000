var cart = [];

function getCart() {
 return cart;
}
console.log(getCart())

function setCart(c) {
  cart = c;
  return cart;
}
console.log(setCart())

function addToCart(item) {
  var p = Math.floor(Math.random() * 100 + 1);
  cart.push({itemName: item, itemPrice: p});
  return `${item} has been added to your cart.`
}

function viewCart() {
  debugger;
  var cartOrder = 'In your cart, you have ';
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    if(cart.length >= 1) {
        cartOrder += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
      }
    if(cart.length >= 2) {
      var items = ""
      for (let i = 1; i < cart.length - 1; i++) {
        items += `${(cart[i].itemName)} at $${(cart[i].itemPrice)}`);
      }
      cartOrder += `${items}, and ${cart[cart.length - 1].itemName} at ${cart[cart.length - 1].itemPrice}.`
    }
    }
    return cartOrder
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
