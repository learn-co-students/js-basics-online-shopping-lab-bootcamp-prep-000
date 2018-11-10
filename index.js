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
 cart.push({ itemName: item, itemPrice: Math.floor(Math.random() * 100)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var str = "In your cart, you have";
  if (cart.length === 0)
    str = "Your shopping cart is empty."
  else if (cart.length === 1){
    str += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else {
    var i = 0;
    for (var i=0; i < cart.length; i++){
      if (i === cart.length - 1)
        str += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      else
        str += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
  }
  return str;
}

function total() {
  // write your code here
  var sum = 0;
  for (var i=0; i<cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (let i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined)
    return "Sorry, we don\'t have a credit card on file for you.";
  else {
    var str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return str;
  }
}
