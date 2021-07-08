var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  });
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (!cart.length) return 'Your shopping cart is empty.';
  
  if (cart.length === 1) return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  
  var message = 'In your cart, you have ';
  for (var i = 0; i < cart.length; i++){
    const item = cart[i];
    if (i === cart.length - 1) return message + `and ${item.itemName} at $${item.itemPrice}.`;
    message += `${item.itemName} at $${item.itemPrice}, `;
  }
  return message;
}

function total() {
  let amount = 0;
  for (const item of cart){
    amount += item.itemPrice;
  }
  return amount;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName !== item) continue;
    cart.splice(i, 1);
    return cart;
  }
  
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (!cardNumber) return "Sorry, we don't have a credit card on file for you.";
  
  var message = `Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`;
  cart = []
  return message;
}
