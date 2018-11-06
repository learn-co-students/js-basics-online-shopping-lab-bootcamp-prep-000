var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var addItem = {itemName: item, itemPrice: Math.floor(Math.random() * Math.max(100))}
 cart.push(addItem);

 var msg = `${item} has been added to your cart.`;
 return msg;
}

function viewCart() {
  // write your code here
  if (cart === undefined || cart.length === 0) return "Your shopping cart is empty.";

  var msg = "In your cart, you have ";

  for (let i = 0; i < cart.length; i++) {
    var item = cart[i];
    if (i === cart.length-1) {
      if (cart.length === 1) msg += `${item.itemName} at $${item.itemPrice}.`;
      else msg += `and ${item.itemName} at $${item.itemPrice}.`;
    }
    else msg += `${item.itemName} at $${item.itemPrice}, `;
  }
  return msg;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    var cartItem = cart[i];
    if (item === cartItem.itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) return "Sorry, we don't have a credit card on file for you.";
  var msg =`Your total cost is $` + total() + `, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return msg;
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}


