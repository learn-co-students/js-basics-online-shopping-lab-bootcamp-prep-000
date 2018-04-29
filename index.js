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
 //Object.assign()
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var print = 'In your cart, you have ';
    for (let i = 0; i < cart.length; i++) {
      var nextItem = (i+1 === cart.length) ? `and ${cart[i].itemName} at $${cart[i].itemPrice}.` : `${cart[i].itemName} at $${cart[i].itemPrice}, `
      print += nextItem;
    }
    return print
  }
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var initialLen = cart.length;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1)
    }
  }
  var output = (initialLen === cart.length) ? 'That item is not in your cart.' : cart;
  return output;
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === 'undefined') {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  var cartTotal = total();
  cart = [];
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  
}
