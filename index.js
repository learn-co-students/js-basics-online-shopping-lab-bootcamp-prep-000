// variable to be used as the cart 
var cart = [];
// function getCart taking one parameter 'item'
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 // push the object{} with the keys itemName and itemPrice to the cart[] array 
 // use Math.random() to create a number between 0 and 1 and multiply by 100 to get non-decimal integer
 // wrap Math.random() in Math.floor() to round to the nearest integer 
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 // now return the string literal combined with the custom message 
 return(`${item} has been added to your cart.`)
}

// no argument on this one. looping over the entire cart array 
function viewCart() {
  // set blank array to work with
  var array = [];
  // set 'i' condition and iteration for the array push()
  for ( let i = 0; i < cart.length; i++) {
      // push the inputs to the blank array using template literals
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  // tried dynamic but it looks like I have to define cart length statically 
  // if cart.length is 0 return message 
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;}
  // if cart.length is 1 return the single item
  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  // if cart length is 2 return a 2-item string
  if (cart.length ===2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  // if over 2 then append the remainder. 
  }else{
    let lastItem = array.pop();
    return `In your cart, you have ${array.join(', ')}, and ${lastItem}.`
  }
}

function total() {
  // write your code here
  // create variable to the total price starting point (0 since we're adding the remaining to it)
  var totalPrice = 0;
  // set condition and iteration 
  for (var i = 0; i<cart.length; i++){
    // use += to add itemPrice to totalPrice (with starting value of zero) to get cart total
    totalPrice += cart[i].itemPrice
  }
  // after calculation we escape the above function and return the new value of "totalPrice"
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  // set condition and iteration for increasing interval 
  for (let i = 0; i < cart.length; i++){
    // check to see if item name exists in object 
    if (cart[i].itemName === item){
      // IF the name matches, set splice method to choose as index and remove 1 element
      cart.splice(i,1);
      // return the new cart array 
      return cart;
    }
  }
  // if the above if statement returns false, skip to returning this message: 
  return "That item is not in your cart.";
}

function placeOrder(card) {
  // write your code here
  // check to verfy that there is a card number 
  if (card){
    // call on the previous total function to pull the total price of cart
    let totalPrice = total();
    // empty cart by resetting the cart[] array to blank 
    cart =[];
    // string together the text and literals to form the right sentence. 
    return`Your total cost is $${totalPrice}, which will be charged to the card ${card}.`;
  } else {
    // if the function was executed without a card number; 
    return "Sorry, we don't have a credit card on file for you.";
  }
}
