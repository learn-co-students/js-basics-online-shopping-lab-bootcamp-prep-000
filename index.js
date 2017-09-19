var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// (1) The addToCart() function accepts one argument, the name of an item.
// (2) Use that passed-in string to create a new object representing the item.
// The object should consist of one key-value pair in which the key is the item's name and the value is a randomly-generated price: { itemName: itemPrice }.
// As more items are added, the cart should start to look something like this:
// [ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }].
// (3) The price of each item should be a randomly-generated integer between 1 and 100.
// (4) HINT: Look into Math.random() and Math.floor().
// (5) If you're struggling to create a new object from the item name, remember that ES6 provides a nifty way to dynamically set the keys in an object literal.
// That is, it allows the use of variables as keys. If you're having trouble recalling the syntax, take a look back at the Top Tip in the JavaScript Objects lesson.
// Upon the successful addition of a new item to the cart, the function should print <itemName> has been added to your cart. to the console and then return the updated cart.
//REF: https://learn.co/lessons/javascript-objects
function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 var cartObj = new Object({ [item]: itemPrice });
 cart.push(cartObj);
 console.log(`${item} has been added to your cart.`);

 return cart;
}

// (7) The viewCart() function does not accept any arguments.
// It should loop over every item in your cart, printing out the contents as one long,
// coherent statement in this format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
// (8) If the cart is empty, the function should instead print out Your shopping cart is empty.
// (9) Note: Pay close attention to the syntax above. The printed statement should be a single sentence that begins with In your cart,
// you have, terminates in a period, and can assume the following shapes according to how many items the cart contains:
// (10) 1 item — In your cart, you have bananas at $17.
// (11) 2 items — In your cart, you have bananas at $17 and pancake batter at $5.
// (12) 3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
function viewCart() {
  // write your code here
  var cartLength = cart.length;

  if (cartLength === 0) {
    console.log('Your shopping cart is empty.');
    return;
  }

  var message = "In your cart, you have ";

  for (var i = 0; i < cartLength; i++) {
    var isNotAtEnd = i !== (cartLength - 1);
    var isNextToLastItem = i === (cartLength - 2);
    var cartObj = cart[i];
    var itemKey = Object.keys(cartObj)[0];
    message += `${itemKey} at $${cartObj[itemKey]}`;

    if(isNextToLastItem){
      message += cartLength === 2 ?  " and " :  ", and ";
    }
    else if(isNotAtEnd) {
      message += ", ";
    }
  }

  console.log(message + ".");
}

// (13) The total() function accepts no arguments, iterates through the cart array,
// and returns the current total value of the items in the cart.
function total() {
  // write your code here
  var sum = 0;

  for (var i = 0; i < cart.length; i++) {
    var cartObj = cart[i];
    var itemKey = Object.keys(cartObj)[0];
    sum += cartObj[itemKey];
  }

  return sum;
}

// (14) The removeFromCart() function accepts one argument, the name of the item that should be removed.
// (15) If the cart does not contain a matching item, the function should print out That item is not in your cart.
// and return the unchanged cart.
// (16) If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
// (17) HINT: Check each object's key (the name of the item) to see if it matches the parameter, then remove it if it matches.
// You might find hasOwnProperty to be useful.
function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    // Checks if cart contains current item.
    if (cart[i].hasOwnProperty(item)) {
      var index = cart.indexOf(cart[i]);
      cart.splice(index, 1);

      return cart;
    }
  }

  console.log("That item is not in your cart.");
}

// (18) The placeOrder() function accepts one argument, a credit card number.
// (19) If no argument is received, the function should print out Sorry,
// we don't have a credit card on file for you..
// (20) If a card number is received, the function should print out Your total cost is $71, which will be charged to the card 83296759.
// (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder()). Then, it should empty the cart array.
function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === "undefined" || !cardNumber || cardNumber <= 0) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
    return;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = new Array();
}
