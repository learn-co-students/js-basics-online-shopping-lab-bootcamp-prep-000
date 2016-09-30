var cart;

var cart = []; // i added
var item; // i added
var price = Math.floor(Math.random()*100); // i added
var cardNumber = 123; // i added

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

//provided already above this line; below i added

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]:price}); // item needs to be [item] for viewCart function to pass
  console.log(`${[item]} has been added to your cart.`);
  return cart;
}

// new way, with object literals::

function viewCart() {
  var purchase = [];
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    for (var index in cart) {
      var itemObject = cart[index];
      var itemKey = Object.keys(itemObject)[0];
      var itemValue = itemObject[itemKey];
      purchase.push(`${itemKey} at \$${itemValue}`);
    }
    console.log(`In your cart, you have ${purchase.join(', ')}.`)
  }
}

//removeFromCart

// Define a function removeFromCart which accepts one argument,
// the name of the item you wish to remove. If the item isn't in the cart,
// the function should print out "That item is not in your cart.".
// If the item is in your cart, it should remove the object from the cart array.
// Then return the cart. (HINT: Check each object's key to see if it
// matches the parameter, then remove it if it matches.
// You might find hasOwnProperty to be useful.)


function removeFromCart(item) {
  for (var item in cart) {
  if (!cart.hasOwnProperty(item)) { //if cart does NOT have item
      //console.log(`That item is not in your cart.`);  -- seems like this should go here??
    } else if (cart.hasOwnProperty(item)) { //if cart does have item
      cart.pop(item);
    } return cart;
  } console.log(`That item is not in your cart.`);
}


// Define a function placeOrder which accepts one argument, a credit card number.
// If no argument is received, then the function
// should print out "We don't have a credit card on file for you to place your order.".
// If there is a credit card on file, the function
// should print out "Your total cost is $${total()},
// which will be charged to the card ${cardNumber}.".
// The function should empty the cart array.

//new version:

// if (typeof variable !== 'undefined') {
//     // the variable is defined
// }

function placeOrder(cardNumber) {
    if (typeof cardNumber !== 'undefined') { //if typeof variable, cardNumber, exists (AKA isn't undefined)
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart.length = 0;
    } else {
      console.log(`We don't have a credit card on file for you to place your order.`);
  }
}

// function placeOrder(cardNumber) {
//   //code here
//   for (var cardNumber in cart) {
//     if (cart.hasOwnProperty(cardNumber)) { //if cart does have cardNumber
//
//         var cardObject = cart[cardNumber];
//         var cardKey = Object.keys(cardObject)[0]; //cardKey
//         var cardValue = cardObject[cardKey]; //cardValue
//         cardNumber = cardValue;
//
//       console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
//       cart.length = 0;
//     }
//   } //console.log(`We don't have a credit card on file for you to place your order.`);
// }


//below works for "we don't have your card", but not for if they do have card

// function placeOrder(cardNumber) {
//   //code here
//   for (var cardNumber in cart) {
//   if (!cart.hasOwnProperty(cardNumber)) { //if cart does NOT have cardNumber
//       //console.log(`We don't have a credit card on file for you to place your order.`);  -- seems like this should go here??
//     } else if (cart.hasOwnProperty(cardNumber)) { //if cart does have cardNumber
//
//         // var cardObject = cart[cardNumber];
//         // var cardKey = Object.keys(cardObject)[0]; //cardKey
//         // var cardValue = cardObject[cardKey]; //cardValue
//
//       console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
//       cart.length = 0;
//     }
//   } console.log(`We don't have a credit card on file for you to place your order.`);
// }



//notes for viewCart:::


//what some other dude has:::

// function viewCart() {
//   if (cart === []) {
//     console.log(`Your shopping cart is empty.`);
//   } else {
//     for (var cartItem in cart) {
//       console.log(`In your cart, you have ${cartItem} at $${cart[cartItem]}`);
//     }
//   }
// }



//new way

// function viewCart() {
//   var purchase = [];
//     for (var index in cart) {
//       var itemObject = cart[index];
//       var itemKey = Object.keys(itemObject)[0];
//       var itemValue = itemObject[itemKey];
//       purchase.push(` ` + itemKey + ` at $` + itemValue);
//     } console.log(`In your cart, you have ` + purchase.join(', ') + `.`)
// }


//
//best so far: <<<<<<<---------

// function viewCart() {
//   var purchase = [];
//   //var itemsInCart = Object.keys(cart[index]);
//
//     for (var index in cart) {
//       purchase.push(` ` + cart[index] + ` at $` + price);
//     } console.log(`In your cart, you have` + purchase + `.`)
// }
// viewCart(); // delete this
