var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var max = Math.floor(100)
  var min = Math.ceil(1)
  var num = Math.floor(Math.random()*(max-min))+min
  
  var itemList = {itemName: item, itemPrice: num}
  cart.push(itemList)
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    var str = `In your cart, you have`;
    for (var i = 0; i < cart.length - 1; i++) {
      str += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
  return str + ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
