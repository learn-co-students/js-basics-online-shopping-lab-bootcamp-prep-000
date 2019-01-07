var cart = [];
//var contents = [];
//var viewItem = [];
//var viewPrice = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName = item;
 var itemPrice = Math.floor((Math.random() * 100));
 var newItem = {
   [itemName]: itemPrice
 }
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
var contents = [];
var viewItem = [];
var viewPrice = [];
  for (let i = 0; i < cart.length; i++) {
    viewItem.push(Object.keys(cart[i]));
  }

  for (let i = 0; i < cart.length; i++) {
    viewPrice.push(cart[i][viewItem[i]]);
  }

  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    contents.push(`${viewItem[0]} at $${viewPrice[0]}.`);
  }
  else if (cart.length === 2) {
    contents.push(`${viewItem[0]} at $${viewPrice[0]} and ${viewItem[1]} at $${viewPrice[1]}.`)
  }
  else {
    for (let i = 0; i < (cart.length - 1); i++) {
      contents.push(`${viewItem[i]} at $${viewPrice[i]}, and `)
      }
      //might have to slice the comma off?
      contents.push(`${viewItem[(cart.length-1)]} at $${viewPrice[(cart.length-1)]}.`);
  }
    return `In your cart, you have ${contents}`;
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
