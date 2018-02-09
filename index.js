var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var item = { [itemName]: itemPrice };
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  let text = [];
  let items = [];
  let prices = [];

  if (cart.length===0) {
       console.log(`Your shopping cart is empty.`);
      } else if (cart.length===1) {
        console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
      } else if (cart.length===2) {
          console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
      } else {
        for (let i = 0; i < cart.length; i++) {
            items.push(Object.keys(cart[i]));
            prices.push(Object.values(cart[i]));
            text.push(`${items[i]} at $${prices[i]}`);
          }
        console.log(`In your cart, you have ${text.join(', ')}.`);
      }
      return cart;
}

function total() {
  return cart.values;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
