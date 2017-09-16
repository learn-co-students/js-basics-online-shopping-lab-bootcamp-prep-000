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
 var newObj = {};
 newObj[item] = Math.floor((Math.random() * 100) + 1);
 cart.push(newObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
     console.log("Your shopping cart is empty.");
  } else {
   var count = cart.length;
   var response = "In your cart, you have ";
   for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
      var price = cart[i][Object.keys(cart[i])[0]];
      var ending = "";

      if (count > 2) {
          ending = ", ";
      }

      if (count === 2) {
          if(cart.length > 2) {
              ending = ", and ";
          } else {
              ending = " and ";
          }
      }

      if (count === 1) {
          ending = ".";
      }

      response += item + " at $" + price + ending;
      count --;
   }
   console.log(response);
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
     total += cart[i][Object.keys(cart[i])[0]];;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}
/*
function removeFromCart(item) {
  // write your code here
  var found = false;
  for (var i = 0; i < cart.length; i++) {
     if (Object.keys(cart[i])[0] === item) {
        cart.splice(i, 1);
        return cart;
     }
  }
  if (found === false) {
     console.log("That item is not in your cart.");
 }
  return cart;
}
*/
function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
     console.log("Sorry, we don't have a credit card on file for you.");
 } else {
     console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
     cart = [];
 }
}
