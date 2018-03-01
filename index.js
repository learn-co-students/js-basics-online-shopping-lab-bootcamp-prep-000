var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const itemPrice = Math.floor(Math.random() * 100 + 1);
 var itemName = item;
 cart.push({[itemName]: itemPrice});
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var i = 0;
  var intro = [`In your cart, you have`];
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1) {
      console.log(`${intro} ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`);
      } else if (cart.length === 2) {
        console.log(`${intro} ${Object.keys(cart[i])} at $${Object.values(cart[i])} and ${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
      } else {
        console.log(`${intro}`);
        while (cart.length > 2) {
          console.log(`${Object.keys(cart[i])} at $${Object.values(cart[i])},`);
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
