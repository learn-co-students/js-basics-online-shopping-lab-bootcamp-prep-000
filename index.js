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
 var itemName = item;
 var itemPrice = Math.floor((Math.random() * 100));
 var newItem = {
   [itemName]: itemPrice
 }
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var contents = [];
  var viewItem = [];
  for (let i = 0; i < cart.length; i++) {
      viewItem.push(Object.keys(cart[i]));
    }
  var viewItem = [].concat.apply([], viewItem);
//the cart is an array of objects, but the indexes of the array are acting as
//keys--I have to access the key of the array within each index.
// turn the object keys into an array of just the keys, then identify by i
// using object.keys
  var viewPrice = [];
  for (let i = 0; i < cart.length; i++) {
      viewPrice.push(Object.values(cart[i]));
  }
  var viewPrice = [].concat.apply([], viewPrice);
  // turn the object values into an array of just the values, then identify by i
  // using object.values
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    contents.push(`${viewItem[0]} at $${viewPrice[0]}.`);
  }
  else if (cart.length === 2) {
    contents.push(`${viewItem[0]} at $${viewPrice[0]} and ${viewItem[1]} at $${viewPrice[1]}.`)
  }
  else {
    for (let i = 0; i < (cart.length - 1); i++) {
      contents.push(`${viewItem[i]} at $${viewPrice[i]}, and `)
      }
      contents.push(`${viewItem[(cart.length-1)]} at $${viewPrice[(cart.length-1)]}.`);
  }
    return `In your cart, you have ${contents}`;
}

  //def need an IF statement for if cart.length = 1 vs 2, 3+ for oxford comma
  //don't need loops for length=1 or 2.  3, will loop.
  //DO WHILE--push (to end) final sentence with period; while i<cart.length,
  //push item and price to end.
//    for (i=0; i < cart.length; i++) {
//      contents.push(`${viewItem[i]} at $${viewPrice[i]}, `)
//    }
// do I need a different loop function for the one below/above? Or another if?
//    for (i=0; i = cart.length; i++) {
//      contents.push(`${viewItem[i]} at $${viewPrice[i]}`);
//    }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
