var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({itemName: item, itemPrice: price});
  return(`${item} has been added to your cart.`);
}

function viewCart() {
  var list = [];
  for (let i = 0; i < cart.length; i++) {
    list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if (cart.length === 0) {
    return "Your shopping cart is empty."; 
   }
  else if (list.length === 1) {
    return (`In your cart, you have ${list.join(', ' )}.`);
  } else {
    var last = list.pop();
    list.push(`and ${last}`);
   return (`In your cart, you have ${list.join(', ' )}.`);
  }
}

function total() {
    var sum = 0
    for (let i = 0; i < cart.length; i++) {
       sum += cart[i].itemPrice; 
    }
  return sum
 }

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
  if (cart[i].itemName === item) {
    cart.splice(i,1);
    return cart; 
   } 
  }
  return ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (! cardNumber) {
    return ("Sorry, we don't have a credit card on file for you.");
  } else {
     var quote = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return quote;
  }
}

