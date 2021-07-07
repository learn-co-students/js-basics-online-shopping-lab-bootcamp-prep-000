  var cart = [];

function getCart( ) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
   var itemObj = {
      itemName: item,
      itemPrice: Math.floor(Math.random() * 100)
  }
  cart.push(itemObj);
  return itemObj.itemName + ` has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1) {
    var message = `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return `In your cart, you have ${message}`;
  }
  if (cart.length === 2) {
    var message = `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    return `In your cart, you have ${message}`;
  }
  var i = 0;
  var newArray = [];
  while (i < cart.length) {
    var message = `${cart[i].itemName} at $${cart[i].itemPrice}`;
    newArray.push(message);
    i++;
  }
  var lastMessage = newArray.pop();
  return `In your cart, you have ${newArray.join(", ")}, and ${lastMessage}.`;
}

function total() {
  // write your code here
  var i = 0;
  var newArray = [];
  while (i < cart.length) {
    var price = cart[i].itemPrice;
    newArray.push(price);
    i++;
  }
  var i = 0;
  var x = 0;
  while (i < newArray.length) {
    x = newArray[i] + x;
    i++;
  }
  return x;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
        cart.splice(i, i);
    }
  }
  return "That item is not in your cart.";
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
if (cardNumber !== undefined) {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  }
  else {
    return `Sorry, we don\'t have a credit card on file for you.`;
  }
  }
