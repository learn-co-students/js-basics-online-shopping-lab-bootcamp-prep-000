var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 cart.push({ itemName: item, itemPrice: price});
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  let arr = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  for (var i = 0; i < cart.length; i++) {
    arr.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if (arr.length === 1) {
    return (`In your cart, you have ${arr.join(', ' )}.`);
  } else {
    var lastItem = arr.pop();
    arr.push(`and ${lastItem}`);
  return (`In your cart, you have ${arr.join(', ' )}.`);
  }
}

function total() {
  // write your code here
  let total = 0;
  for (var i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
  if (cart[i].itemName === item) {
    return cart.splice(i, 1);
  }
  }return ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return ("Sorry, we don't have a credit card on file for you.");
  } else {
    var message = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return message;
  }
  
}
