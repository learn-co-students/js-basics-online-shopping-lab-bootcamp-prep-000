var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*(100-1+1)+1);
  var itemObject = { item: itemPrice};
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
  // write your code here
}

function viewCart() {
  if (cart <= 0) {
    return 'Your shopping cart is empty.'
  } else {
    console.log(`In your cart, you have ${cart.join(' at ')}, `)

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
