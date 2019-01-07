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
}

function viewCart() {
  // write your code here
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

function getCart() {
  return cart;
};

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var displayItem = {"item" : "price"};
  cart.push(displayItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
};

function viewCart(){
  var string = "In your cart, you have "
  if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
  } else {
    for (var items in cart) {
    console.log( string + `${item} at ${price}.` )
  }
};

/*
function removeFromCart(item) {
  if () { // condition: item is in cart === true
   console.log("That item is not in your cart.")
  } else {
    //delete item from array
  }
  return cart;
};

//HINT: Check each object's key to see if it matches the parameter, then remove it if it matches.
//You might find hasOwnProperty to be useful.

function placeOrder(cardNumber) {
  if () { //condition: no argument is received
    return "We don't have a credit card on file for you to place your order."
  } else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  //empty the cart array at the end
};

*/
