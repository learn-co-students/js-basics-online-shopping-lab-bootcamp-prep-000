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
 var random_price = Math.floor(Math.random()*100);
 var new_item = {'itemName': item, 'itemPrice': random_price};
 cart.push(new_item);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  
  var cart_message = "In your cart, you have";
  for (let i = 0; i < cart.length; i++) {
    var name = cart[i].itemName;
    var price = cart[i].itemPrice;
    var comma = i === 0 ? '' : ',';
    var and = (i === cart.length - 1 && cart.length != 1) ? ' and' : '';
    cart_message = `${cart_message}${comma}${and} ${name} at \$${price}`;
  }
  return `${cart_message}.`;
  
}

function total() {
  // write your code here
  var total_cost = 0;
  for (let i = 0; i < cart.length; i++) {
    total_cost += cart[i].itemPrice;
  }
  return total_cost;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  var total_cost = total();
  cart = [];
  return `Your total cost is \$${total_cost}, which will be charged to the card ${cardNumber}.`;
  
}
