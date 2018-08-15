var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * (100 - 1));
  cart.push({itemName:[item], itemPrice: price});
return `${item} has been added to your cart.`;
} 

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    let string = 'In your cart, you have'
    for (var i = 0; i < cart.length; i++) {
      string += `${cart[i][itemName]} at $${cart[i][itemPrice]}.`
    }
   return string;
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
