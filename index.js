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
 var newItem = {[item]: Math.floor(Math.random() * 100)};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}


function viewCart() {
  var shoppingCart = "";
  var itemName;
  var itemCost;
  if (cart.length > 0) {
    for (var i = 0; i < (cart.length - 1); i++) {
      itemName = Object.keys(cart[i]);
      shoppingCart += `${itemName} at $${cart[i][itemName]}, and `;
    }
    itemName = Object.keys(cart[i]);
    shoppingCart += `${itemName} at $${cart[i][itemName]}`;
    return `In your cart, you have ${shoppingCart}`;
  } else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
  var cartTotal = 0;
  var itemName;
  for (var i = 0; i < cart.length; i++) {
    itemName = Object.keys(cart[i]);
    cartTotal += cart[i][itemName];
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])){
      cart.splice(i, 1);
      return cart;
    } 
  }
  if (!cart[i].hasOwnProperty(item)){
    return "This item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
