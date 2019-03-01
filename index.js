var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 var object = {};
 let i = Math.random() * Math.floor(100);
 
 object.itemName = item;
 object.itemPrice = i;
 
 cart.push(object);
 
 return `${item} has been added to your cart.`;
}
 
 

function viewCart() {
  // write your code here
  let i = 0;
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } 
  if (cart.length === 1) {
    return `In your cart, you have ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  } 
  else {
    var statement = `In your cart, you have `;
    do {
      statement = statement + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      i++;
    }
    while (i < cart.length - 1);
    statement = statement + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
    return statement;
  }
}

function total() {
  // write your code here
  let total = 0;
  for (let i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for( let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item ){
      cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined ){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let cost = total()
    cart.length = 0
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
