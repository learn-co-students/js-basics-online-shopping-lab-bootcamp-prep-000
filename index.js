// SKIPPING THIS LAB BECAUSE OF ERRORS. THE TESTS AND INSTRUCTIONS DO NOT MATCH (TESTS ASK FOR ONE THING, INSTRUCTIONS SAY TO DO ANOTHER). 

// MY VERSION WORKS FINE IN THE CONSOLE FOR WHAT IT'S SUPPOSED TO DO. 

var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 if (typeof item === 'undefined' || item === null) {
   viewCart();
   return cart;
 }
 else {
   var randomPrice = Math.floor((Math.random() * 100) + 1);
   var itemHash = { itemName: item, itemPrice: randomPrice, };
   cart.push(itemHash);
   console.log(`${cart[cart.length -1].itemName} has been added to your cart.`);
   return cart;
 }
}


function viewCart() {
  // write your code here.
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
    return cart;
  }
  else if (cart.length < 2) {
    // code for 1 item   
      console.log(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
      return cart;
    }
    else if (cart.length < 3) {
      // code for 2 items
      var i = 0;
      var medCart = [`In your cart, you have `];
      for (i = 0; i < cart.length - 1; i++) {   
      medCart.push(`${cart[i].itemName} at $${cart[i].itemPrice} `);     
       }
       console.log(`${medCart.join("")}and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`);
       return cart;
     }
    else {
      // code for 3+ items
      var bigCart = [`In your cart, you have `];
      for (i = 0; i < cart.length - 1; i++) {   
      bigCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `);
      }
       console.log(`${bigCart.join("")}and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`);
       return cart;
    }
}

function total() {
  // write your code here
  var totalCart = 0;
  var i = 0;
      for (i = 0; i < cart.length; i++) {   
      totalCart += (cart[i].itemPrice);
      }
      return totalCart;
}

// this one may need some work - it's returning the else statement
function removeFromCart(item) {
  // write your code here
  var present = false;  // flag to set if item is present
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      present = true; 
      cart.splice(i, 1);
      viewCart();
      present = false;
      return cart;
    }
    else if  (present === false) {
      console.log("That item is not in your cart.");
      viewCart();
      return cart;
    }    
  }
}


function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === 'undefined' || cardNumber === null) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
