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
 var obj = {};
 obj[item] = Math.floor(Math.random() * (100)) + 1;
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);

 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  if(cart.length === 1) {
    console.log(`In your cart, you have ${Object.getOwnPropertyNames(cart[0])} at $${cart[0][Object.getOwnPropertyNames(cart[0])]}.`);
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.getOwnPropertyNames(cart[0])} at $${cart[0][Object.getOwnPropertyNames(cart[0])]} and ${Object.getOwnPropertyNames(cart[1])} at $${cart[1][Object.getOwnPropertyNames(cart[1])]}.`);
  } else {
    var str = ``;
    for(var i = 0; i < cart.length; i++) {
      if(i === 0) {
        str += `In your cart, you have ${Object.getOwnPropertyNames(cart[i])} at $${cart[0][Object.getOwnPropertyNames(cart[i])]}`;
      } else if(i === cart.length - 1) {
        str += `, and ${Object.getOwnPropertyNames(cart[i])} at $${cart[i][Object.getOwnPropertyNames(cart[i])]}.`;
      } else {
        str += `, ${Object.getOwnPropertyNames(cart[i])} at $${cart[i][Object.getOwnPropertyNames(cart[i])]}`;
      }
    }
    console.log(str);
  }
}

function total() {
  // write your code here
  var totalCost = 0;
  for(var i = 0; i < cart.length; i++) {
    totalCost += cart[i][Object.getOwnPropertyNames(cart[i])];
  }

  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  var bool = true;
  for(var i = 0; i < cart.length; i++) {
      if(Object.getOwnPropertyNames(cart[i]) == item) {
        cart.splice(i, 1);
      }
    }
    if(bool) {
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
