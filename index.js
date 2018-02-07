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
 var newItem = new Object({[item] : Math.floor(Math.random()*101)});
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  var sentence = "In your cart, you have ";
  var items = Object.keys(cart);
  var prices = Object.values(cart);
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    sentence += `${items[0]} at $${prices[0]}.`;
    console.log(sentence);
  }
  else if (cart.length === 2) {
    sentence += `${items[0]} at $${prices[0]} and ${items[1]} at $${prices[1]}.`;
    console.log(sentence);
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length-1) {
        sentence += `and ${items[i]} at $${prices[i]}.`;
      } else {
        sentence += `${items[i]} at $${prices[i]}, `;
      }
    }
    console.log(sentence);
  }
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
