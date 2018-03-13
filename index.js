var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
 cart.push(new Object({[item]:price}));
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var items = 'In your cart, you have';
  
  var i = 0;
  
  var l = cart.length;
  if (!l) {
  return console.log('Your shopping cart is empty.');
  } 
  
  else if (l ===1) {
    items += ` ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`;
    return console.log(items);
  }
  
  else if (l ===2) {
    items += ` ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`;
    return console.log(items);
  } else{
    while (i < l - 1) {
    items+= ` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]},`;
    i++;
  }
  items += ` and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`;
  return console.log(items);
}
  
}


function total() {
var sum = 0;
for (var i = 0; i < cart.length; i++) {
  for(var list in cart[i]) {
    sum += cart[i][list];
}
}
return sum;
}

function removeFromCart(item) {
 var i = 0;
  var l = cart.length;
  if (!l) {
  return console.log('That item is not in your cart.');
  
  }
    else {
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
          cart.splice(i, 1);
          return cart;
    }
      }
}
}
function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    return (cart = []);
  }
}
