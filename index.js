var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100);
 let newObj = {itemName:item, itemPrice:price};
 cart.push(newObj);
 return `${item} has been added to your cart.`;
 
}

function viewCart() {
  let cartItems = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return  `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice} and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
  } else {
    for (var i = 0; i < cart.length; i++) {
      cartItems.push(` ${cart[i].itemName}.`);
    }
    return `In your cart, you have${cartItems}, ${cartItems} and ${cartItems}.`;
  }
}

function total() {
  let totalCost = 0;
  for (var i = 0; i < cart.length; i++) { 
    totalCost = totalCost + cart[i].itemPrice;
    }
    return totalCost;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}