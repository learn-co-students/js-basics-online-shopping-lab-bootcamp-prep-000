var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// turns items into Javascript objects, properly structuring them in the
// { itemName: itemPrice } format, setting the itemPrice at random number between 1 and
// 100, before adding them to the cart, printing a message to console indicating that
// the item has been added and returning the cart

function addToCart(item) {
  var itemName = item;
  var itemPrice = (Math.floor(Math.random() * 100) + 1);
  cart.push( { [itemName]: itemPrice });
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}


// The viewCart() function does not accept any arguments. It should loop over every item
// in your cart, printing out the contents as one long, coherent statement in this
// format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
// If the cart is empty, the function should instead print out Your shopping cart is empty.
// Note: Pay close attention to the syntax above. The printed statement should be a single
// sentence that begins with In your cart, you have, terminates in a period, and can assume
// the following shapes according to how many items the cart contains:
// 1 item — In your cart, you have bananas at $17.
// 2 items — In your cart, you have bananas at $17 and pancake batter at $5.
// 3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
function viewCart() {
  // checkItemsInCart determines how many items are in the cart
  var checkItemsInCart = Object.keys(cart).length;
  // check to see if there are any items in the cart
  if (checkItemsInCart === 0) {
    console.log("Your shopping cart is empty.");

  } else {
    // determines the last itemName/key in the object cart and places into the variable last
    var last = Object.keys(cart[cart.length-1])[0];
    // setup an array ItemList to place each key/value pair of cart into.
    const itemList = [];
    itemList.join(', ');
    // loop through keys in the cart
    for (var i = 0; i < cart.length; i++) {
      let itemName = Object.keys(cart[i])[0];
      let itemPrice = cart[i][itemName];
      // determine whether the key is the last item in the object
      if ( itemName === last && checkItemsInCart != 1 ) {
      // true add AND before last item, and print out everuthing that's in the cart
          itemList.push(`${itemName} at $${itemPrice}`);
          return console.log(`In you cart, you have ${itemList}.`);
      } else if (checkItemsInCart === 1) {
      // check if there is only 1 item in the cart, print specific statement
           itemList.push(` ${itemName} at $${itemPrice}`);
           console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
      } else {
      // false add to item to output array itemList
            itemList.push(`${itemName} at $${itemPrice}`);
      }
    }
  }
}

function total() {
  // creates an array and stores only the VALUE of the cart objects keys in
  var valuesToAdd = [];
    for (var i = 0; i < cart.length; i++) {
    let itemName = Object.keys(cart[i])[0];
    let itemPrice = cart[i][itemName];
    valuesToAdd.push(itemPrice);
  }
  // as long i is less than the length of the array valuesToAdd loop through and parse
  // strings to integers.
  for(var t = 0, len = valuesToAdd.length; t < len; t++) {
    valuesToAdd[t] = parseInt(valuesToAdd[t], 10);
  }
  // after loop and all strings in the array are typed integers sum all elements
  // of the array add each element to the sum beginning with a sum = 0 from left
  // to right and return the sum total of the elements in the array
  var totalCost = (valuesToAdd.reduce(add, 0));
  function add(a, b) {
    return a+b;
  }
  // check that totalCost is returning the correct value
   return totalCost;
 }

function removeFromCart(item) {
  if (!cart.length) {
    console.log("Your cart is currently empty.")
   } else {
   for (var i = 0; i < cart.length; i++) {
      let itemName = item;
      if (itemName === (Object.keys(cart[i])[0])) {
         delete cart[i];
         var temp = [];
         for(let i of cart)
         i && temp.push(i); // copy each non-empty value to the 'temp' array
         cart = temp;
         console.log(cart);
      } else {
             let len = cart.length-1
             if (i === len) {
                return console.log("That item is not in your cart.");
              }
        }
      }
   }
}

function placeOrder(cardNumber) {
  // write your code here
}
