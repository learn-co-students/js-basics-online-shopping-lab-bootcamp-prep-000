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
  var viewItem = [Object.keys(cart)];
// turn the object keys into an array of just the keys, then identify by i
// using object.keys
  var viewPrice = [Object.values(cart)];
  // turn the object values into an array of just the values, then identify by i
  // using object.values
  if (cart.length === 0) {
    return "Your shopping cart is empty";
  }
//can probably clean below to else ifs all the way down
  else {
    if (cart.length === 1) {
      contents.push(`${viewItem[0]} at $${viewPrice[0]}.`);
    }
    else if (cart.length === 2) {
      contents.push(`${viewItem[0]} at $${viewPrice[0]} and ${viewItem[0]} at $${viewPrice[0]}.`)
    }
    else {
      //Loop through early entries
      //hard add final entry
    }
  //def need an IF statement for if cart.length = 1 vs 2, 3+ for oxford comma
  //don't need loops for length=1 or 2.  3, will loop.
  //DO WHILE--push (to end) final sentence with period; while i<cart.length,
  //push item and price to end.
    for (i=0; i < cart.length; i++) {
      contents.push(`${viewItem[i]} at $${viewPrice[i]}, `)
    }
// do I need a different loop function for the one below/above? Or another if?
    for (i=0; i = cart.length; i++) {
      contents.push(`${viewItem[i]} at $${viewPrice[i]}`);
    }
    return `In your cart, you have ${contents}.`;
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
