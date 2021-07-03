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
 let newItem = {};
 let price = Math.floor(Math.random()*101);
 newItem = {itemName:item, itemPrice:price};
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let inCart = `In your cart, you have`;
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    for (let i = 0; i < cart.length; i++) {
      inCart += ` ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } 
    return inCart;
  } else {
    for (let i = 0; i < cart.length; i++) {
      inCart += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
    return inCart.replace(` ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice},`, ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`);
  } 
}

var totalAmount = 0;

function total() {
  // write your code here
  let amount = 0;
  for (let i = 0; i < cart.length; i++) {
    amount += parseInt(cart[i].itemPrice);
  }
  totalAmount = amount;
  return amount;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    let checkout = cart;
    cart = [];
    return `Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`;
  }
}
