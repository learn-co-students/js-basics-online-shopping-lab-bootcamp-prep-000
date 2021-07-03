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
 var object = {};
 object["itemName"] = item;
 object["itemPrice"] = Math.floor(Math.random() * 100);
 cart.push(object);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
  return "Your shopping cart is empty."
  } else {
    var cartContents = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++) {
    cartContents += (`${cart[i].itemName} at $${cart[i].itemPrice}`);
    if(cart.length === 1) {
      cartContents += ".";
      return cartContents;
    } else if(cart.length === i + 2) {
      cartContents += `, and ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}.`;
      return cartContents;
    } else {
      cartContents += ", "
    }
    }
  }
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].itemPrice);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
  if(cart[i].itemName === item) {
    cart.splice(i, 1);
    return cart;
  } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(isNaN(parseInt(cardNumber))) {
    return "Sorry, we don\'t have a credit card on file for you."; 
  } else {
    var price = total();
    cart = [];
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`;
  }
}
