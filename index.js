var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {itemName: item, itemPrice: Math.floor(Math.random()*10 + 1)};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartString = "In your cart, you have";
  if(cart.length === 0) return "Your shopping cart is empty.";
  for(let i = 0; i < cart.length; i++){
    if(cart.length === 1) {
      return cartString + ` ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    if(i === cart.length-1) {
      cartString += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    else cartString+= ` ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
  return cartString;
}

function total() {
  let count = 0;
  for(let i = 0; i < cart.length; i++){
    count += cart[i].itemPrice;
  }
  return count;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  let totalVal = total();
  cart = [];
  return `Your total cost is $${totalVal}, which will be charged to the card ${cardNumber}.`
}
