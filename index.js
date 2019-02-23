var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = { itemName: item, itemPrice: Math.floor(Math.random() * 100) };
  cart.push(obj)
  
  return `${item} has been added to your cart.`
}

function viewCart() {
const array = [];

for (let i = 0; i < cart.length; i++) {
array.push(` ${cart[i]} at $${Math.floor(Math.random() * 100)}`)

  if (cart[i] === array.length) {
  array.push(` and ${array}.`);
	} else {
	array.join(', ')
      }
  }
  
  if (array.length === 0) {
console.log("Your shopping cart is empty.");
    } else {
  return 'In your cart, you have array'
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
