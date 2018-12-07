var cartItem = {}
var price = Math.floor(Math.random() * 101);
function addToCart(item) {
 // write your code here


 cartItem.itemName = item;
 cartItem.itemPrice = price;

 var output = `${cartItem.itemName} has been added to your cart. Item price is ${cartItem.itemPrice}`;



return output
}
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const entries = Object.entries(fruits)
console.log(entries)
for (const [fruit, count] of entries) {
  console.log(`There are ${count} ${fruit}s`)
}

// Result
// There are 28 apples
// There are 17 oranges
// There are 54 pears
console.log(addToCart(""))
function viewCart(){
  //Should loop over every item in the cart
  //return a statement of what items are in the cart
  if (cartItem.itemName.length <= 0)
  {
    return "Your shopping cart is empty.";
  } else {
    return null};
}
console.log(viewCart())
console.log(cartItem.itemName.length)



var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) { //1. The `addToCart()` function accepts one argument, the name of an item. adds to cart object two key pairs.
 var price = Math.floor(Math.random() * 101);
 var cartObj = {itemName: item, itemPrice: price}
 cart.push(cartObj);
  //cart[itemPrice] = ;
  var output = `${item} has been added to your cart.`;
  return output;
}
/*2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart, returning the contents as one long,
coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead return `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above.
    The returned statement should be a single sentence that begins with `In your cart, you have `,
    terminates in a period, and can assume the following shapes according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17, and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.` */


function viewCart() {
//const entries = Object.entries(cart)
var statement = [];
var firstSentence = 'In your cart, you have '
if (cart.length == 0){
    return "Your shopping cart is empty.";
  }
if (cart.length == 1){
    var output = firstSentence + `${cart[0].itemName} at $${cart[0].itemPrice}.`
return output
}
if (cart.length >= 2){
  for (var i = 0; i<cart.length; i++) {
    statement.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
    var last = statement.pop()
    return firstSentence + statement.join(", ") + ", and " + last +"."
    }
}

/*addToCart('pears')
addToCart('apples')
addToCart('peaches')
//console.log(cart)
viewCart()*/

function total() {
var suma = 0;
//The total() function accepts no arguments, iterates through the cart array, and returns the current total value of the items in the cart.
for (var i = 0; i<cart.length; i++){
suma += parseInt(cart[i].itemPrice);
}
return suma
}
total()

function removeFromCart(item) {
  // write your code here
/*4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
+ If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
+ ***HINT***: 
Check each object's itemName value key to see if it matches the parameter, then remove it if it matches.
You might find [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to be useful.
+ If the cart does not contain a matching item, the function should return `That item is not in your cart.`*/
}
