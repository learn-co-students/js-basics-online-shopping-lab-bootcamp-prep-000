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
  var price = Math.floor((Math.random() * 100) + 1);
  var obj = new Object({ [item] : price })
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) { console.log("Your shopping cart is empty."); }

  var arrItems = []; // to store itemName and itemPrice for each item in cart

  for (var i = 0; i < cart.length; i++ ) {
     /* cart is array of objects with itemName and itemPrice in each object

     var cart = [ { apples: 2}, {bananas: 5}, {bread: 3}, {milk: 4} ];
     console.log(Object.keys(cart))
         -----(4) ["0", "1", "2", "3"]
     console.log(Object.keys(cart[0]));
         -----["apples"]
     var item = Object.keys(cart[0]);
     item
         -----["apples"]
     cart[0]["apples"]
         -----2
     */
    var itemName = Object.keys(cart[i]);
    var itemPrice = cart[i][itemName];
    arrItems.push(`${itemName} at $${itemPrice}`);
  } // end for

  /*arrItems
      -----(4) ["apples at $2", "bananas at $5", "bread at $3", "milk at $4"]*/

  //See that the string output is different depending on cart.length
  if (cart.length === 1) {
    console.log(`In your cart, you have ${arrItems[0]}.`);
    //In your cart, you have apples at $2.
  }

  if (cart.length === 2) {
    console.log(`In your cart, you have ${arrItems[0]} and ${arrItems[1]}.`);
    //In your cart, you have apples at $2 and bananas at $5.
  }

  if (cart.length > 2) {
    var msg = "In your cart, you have ";
    msg += arrItems.slice(0, arrItems.length - 1).join(', ');
    msg += `, and ${arrItems.slice(-1)}.`
    console.log(msg);
  }
}

function total() {
  // write your code here
  var total = 0;

  for (var i = 0; i < cart.length; i++ ) {
    var itemName = Object.keys(cart[i]);
    var itemPrice = cart[i][itemName];
    total += itemPrice;
  } // end for
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      //proceed to remove the item from cart
      cart.splice(i, 1);
      //return the updated cart after removal
      return cart;
    }
  } // end for
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined || cardNumber === null || cardNumber === NaN) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
