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
 var temp = item;
 item = new Object({itemName: item});
 cart.push(item);
 var rng = Math.floor(Math.random() * 100) + 1;
 item.itemPrice = rng;
 return `${temp} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else {
    var sentence = "In your cart, you have ";
    var dollar = " at $";
    var period = ".";
    var comma = ", ";
    var and = "and ";
    if (cart.length === 1) {
      return `${sentence}${cart[0].itemName}${dollar}${cart[0].itemPrice}${period}`;
    }
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        sentence = `${sentence}${and}${cart[i].itemName}${dollar}${cart[i].itemPrice}${period}`;
      }
      else {
        sentence = `${sentence}${cart[i].itemName}${dollar}${cart[i].itemPrice}${comma}`;
      }
    }
    return sentence;
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var j = 0; j < cart.length; j++) {
    if (cart.length === 0) {
      return 0;
    }
    else {
      total += cart[j].itemPrice;
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var counter = 0;
  for (var k = 0; k < cart.length; k++) {
    if (cart[k].itemName === item) {
      cart.splice(k, 1);
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var totalCost = parseInt(total());
    cart = [];
    return "Your total cost is $" + totalCost + `, which will be charged to the card ${cardNumber}.`;
  }
}