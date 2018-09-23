var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {
  itemName: item,
  price: 10
  }
  cart.push(newItem)
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return  `Your shopping cart is empty.`
  }
  for (var i = cart.length; i > 0; i--){
    return (`In your cart, you have ${cart.itemName[i]} at ${cart.price[i]}, `)
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
