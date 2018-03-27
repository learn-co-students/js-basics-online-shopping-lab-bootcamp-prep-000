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
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return  `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice} and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
  } else if (cart.length === 3) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice} and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`;
  }
}

function total() {
  let totalCost = 0;
  for (i = 0; i < cart.length; i++) { 
    console.log (cart[i]);
    }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}