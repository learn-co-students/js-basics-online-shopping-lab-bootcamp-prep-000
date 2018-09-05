var cart = [];

function getCart() {
 return cart;
}

function setCart(newCart) {
  cart = newCart;
  return cart;
}

function addToCart(item) {
 var price = Math.ceil(Math.random()  * 100);
 cart.push({itemName: item, itemPrice: price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here

  if (cart.length == 0) {
    return "Your shopping cart is empty.";
  } 
  if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  if (cart.length == 3) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
  }
}

function total() {
  // write your code here
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice([i], 1);
      return cart;
    } else {
      return "That item is not in your cart.";
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == "") {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
