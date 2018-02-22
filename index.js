var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  
  var newItem = {[item] : itemPrice};
  cart.push(newItem);
  
  console.log(`${item} has been added to your cart.`);
  console.log(cart);
  return cart;
}

function viewCart(cart) {
  var output = [];
  var keys = Object.keys(cart);
  
  for (let i = 0; i < keys.length; i++) {
    if (keys.length === 1) {
      output.push( `${ keys[i] } at $${ cart[keys] [i] }`);
    
    } else if (i < keys.length) {
      output.push( `${ keys[i] } at $${ cart[keys] [i] }`);
      
    } else if (i === keys.length - 1) {
      output.push( `and ${ keys[i] } at $${ cart[keys] [i] }`);
    }
    
    // "i at i, i+ at i+, and i++ at i++.
    
    console.log(cart);
    if (length !== 0) {
      return `In your cart, you have ${output}.`;
    }
  }
  return `Your shopping cart is empty.`;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
