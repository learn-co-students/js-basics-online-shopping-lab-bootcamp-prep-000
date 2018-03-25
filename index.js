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
 var newItem = new Object();
 var price = Math.floor(Math.random() * 100);
 newItem.itemName = item;
 newItem.itemPrice = price;
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var cartContents = "In your cart, you have ";
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1) {
    return cartContents += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  for (var i = 0; i < cart.length; i++) {
    if (i === cart.length - 1) {
      cartContents += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } else {
      cartContents += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
  }
  return cartContents;
}

function total() {
  // write your code here
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  var orderCost = total();
  if (cardNumber === undefined) {
    return "Sorry, we don\'t have a credit card on file for you.";
  }
  cart = [];
  return `Your total cost is $${orderCost}, which will be charged to the card ${cardNumber}.`;

}
