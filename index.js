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
  const intro = `In your cart, you have`;
  var items = Object.keys(cart);
  var prices = Object.values(cart);
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else if (items.length === 1) {
      console.log(`${intro} ${items[0]} at ${prices[0]}.`);
    } else if (items.length === 2) {
        console.log(`${intro} ${items[i]} at ${prices[i]} and ${items[i+1]} at ${prices[i+1]}.`);
      } else {
        console.log(`${intro}`);
        for (let i=0; i > 2; i++) {
         console.log(`${items[i]} at ${prices[i]}, `); 
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
