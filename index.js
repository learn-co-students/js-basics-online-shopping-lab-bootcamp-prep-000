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
 cart.push({
   itemName : item,
   itemPrice : Math.floor(Math.random() * 100) + 1
 });
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let str = `In your cart, you have`;
  if(cart.length === 0) return 'Your shopping cart is empty.';
  if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  for(let i = 0; i < cart.length-1; i++) {
    str += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  }
  // last item
  return str += ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
}

function total() {
  // write your code here
  let total = 0;
  for(let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) return "Sorry, we don't have a credit card on file for you.";
  let str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return str;
}
