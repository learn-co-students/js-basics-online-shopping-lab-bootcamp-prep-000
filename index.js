var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let randomNumber= Math.floor(Math.random() * 100) + 1;
 cart.push({itemName: `${item}`, itemPrice: randomNumber});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  let message = "In your cart, you have ";
  if(cart.length === 1) {
    message += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return message;
  }
  for(let i=0; i<cart.length;i++) {
    if(i === cart.length - 1) {
      message += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      return message;
    }
    message += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
  }
  return message;
}

function total() {
  let accumulator = 0;
  for(let i = 0; i < cart.length; i++) {
    accumulator += cart[i].itemPrice;
  }
  return accumulator;
}

function removeFromCart(item) {
  for(let i=0;i<cart.length;i++) {
    if(item === cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  let finalTotal = total();
  if(cardNumber===undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart.splice(0,cart.length);
    return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
