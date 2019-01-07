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

function getCart(){
  return cart;
}
function addToCart(item){
  var itemPrice = Math.floor();
  cart.push({item: itemPrice});
console.log(item+" has been added to your cart.");
return cart;
}

function viewCart(){
  if(cart.length == 0){
    console.log('Your shopping cart is empty');
  }else{
    console.log("hello");
  }
}

function removeFromCart(item){
  var something = cart.indexOf(item);
  if(something === -1){
    console.log("That item is not in your cart.");
  }

}
function placeOrder(ccNumber){
  if(arguments.length === 0){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`"Your total cost is $${total()}, which will be charged to the card ${ccNumber}."`);
    cart = [];
  }
}
// for (var mealName in meals) {
//   console.log(`I ate ${meals[mealName]} for ${mealName}!`)
// }
// + Define a function `addToCart`. This function should accept one argument, the item the user wants to purchase and the cart.
//     This function should automatically set a price for this item by generating a random number between 0 and 100.
//(Hint: `Math.random()` generates a random number in [0, 1] (0 inclusive, 1 non-inclusive); `Math.floor()` rounds a number down to the nearest integer.)
//     This function should add the item and the price as an object ({`{item: price}`) to the `cart` array.
//This function should print out to the console `<item> has been added to your cart.` and return the cart.
//
// + Define a function `viewCart` which does not accept any arguments. This function should loop over every item in `cart` to print out `"In your cart you have [item and price pairs]."`.
// If there isn't anything in your cart, the function should print out `"Your shopping cart is empty."`.
//
// + Define a function `removeFromCart` which accepts one argument, the name of item you wish to remove. If the item isn't in the cart, the function should print out `"That item is not in your cart."`.
// If the item is in your cart, it should remove the object from the `cart` array. Then return the cart.
//(**HINT**: Check each object's key to see if it matches the parameter, then remove it if it matches.
//You might find [hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) to be useful.)
//
// + Define a function `placeOrder` which accepts one argument, a credit card number. If no argument is received,
// then the function should print out `"We don't have a credit card on file for you to place your order."`.
//     If there is a credit card on file, the function should print out `"Your total cost is $${total()}, which will be charged to the card ${cardNumber}."`.
// The function should empty the `cart` array..
