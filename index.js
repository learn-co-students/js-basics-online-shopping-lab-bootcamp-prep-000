var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  let itm = {};
  itm[item] = Math.floor(Math.random()*100);
  console.log(`${item} has been added to your cart.`);
  cart.push(itm);
  return cart;
}

function viewCart() {
  
  var len = cart.length;
  var message = ``;
  
  if(len === 0) {
    message = `Your shopping cart is empty.`;
  } else if(len === 1) {
    message = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
  } else if(len === 2) {
    message = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
  } else {
    message = `In your cart, you have`;    
    for(let i = 0; i < len; i++) {
      let key = Object.keys(cart[i]);
      if(i === len - 1) {
        message += ` and ${key[0]} at $${cart[i][key[0]]}.`;
      } else {        
        message += ` ${key[0]} at $${cart[i][key[0]]},`;
      }
    }    
  }
  console.log(message);
}

function total() {
  
  var total = 0;

  for(let i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i]);
    parseInt(total += cart[i][key[0]]);
  }
  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(isNaN(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
