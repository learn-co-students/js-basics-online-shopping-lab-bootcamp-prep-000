var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/* Function adds an item (type string) to the cart
 * and assigns it a random price between 1-100. 
 * Prints to the console that the item has been added,
 * and returns the updated cart.
 */
function addToCart(item) {
  var randomPrice = Math.floor(Math.random()*100);
  var itemAndPrice = { [item]: randomPrice};
  console.log(`${item} has been added to your cart.`);
  cart.push(itemAndPrice);
  return cart;
}

/* Function does not take any argument.
 * Prints the contents of the cart to the console.
 * Prints an empty message if the cart is empty.
 */
function viewCart() {
  
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  }
  
  var itemsAndPrices = [];
  
  for (var i=0; i<cart.length; i++) {
    var itemPricePair = cart[i];
    var item = Object.keys(itemPricePair)[0];
    var price = itemPricePair[item];
    
    itemsAndPrices.push(`${item} at $${price}`);
  }
  
  var message = 'In your cart, you have ';
  if (cart.length === 1) {
     message += `${itemsAndPrices[0]}.`;
     console.log(message);
  }

  if (cart.length === 2) {
    message += `${itemsAndPrices[0]} and ${itemsAndPrices[1]}.`;
    console.log(message);
  }
  
  else{
    for (var k = 0; k<cart.length-1; k++) {
      message += `${itemsAndPrices[k]}, `;
    }
    message += `and ${itemsAndPrices[cart.length-1]}.`;
    console.log(message);
  }
}

/* Function which finds and returns the total 
 * of the item prices in the cart. 
 */
function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

/* Function which takes an item as its argument
 * and removes it from the cart. 
 * Prints an error message if the item is not
 * in the cart. Otherwise, returns the updated 
 * cart with the desired item removed. 
 */

function removeFromCart(item) {
  var i = 0;
  var containsItem = false;
  
  /*Checks to see if the item is in the cart */
  while (containsItem === false && i < cart.length) {
    containsItem = cart[i].hasOwnProperty(item);
    i++;
  }
  
  if (containsItem === false) {
    console.log("That item is not in your cart.")
  }
  /*Removes the item from the cart*/
  else {
    var itemIndex = i-1;
    cart.splice(itemIndex, 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  var message;
  if (cardNumber === undefined) {
    message = "Sorry, we don't have a credit card on file for you.";
  }
  else {
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
  }
  console.log(message);
}
