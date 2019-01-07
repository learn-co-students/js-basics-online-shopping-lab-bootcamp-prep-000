var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/*
This function adds an item to the cart, then returns a message.
Takes the argument, "item" and stores in variable "name".
Push random prices into an empty array, "price".

itemObject has two keys: itemName and itemPrice with value
of name (which holds the value of the "item" argument) and
price (which parses an element in the array).

itemObject is pushed to the empty "cart" array and returns
a message stating that "item" has been added to the cart.

*/

function addToCart(item) {
  let name = item;
  let price = [];
  
  price.push(Math.floor((Math.random() * 100) + 1));
  var itemObject = {itemName: name, itemPrice: parseInt(price)};
  cart.push(itemObject);
  return `${name} has been added to your cart.`;
  
}

/*
  Allows the user to view the items currently in the cart.
  
  First check to see if cart is empty. If not empty, check for
  special use cases of one item or two items.
  
  Create a variable to store a string with the first item and
  the introduction.
  Create another variable to store a string with the final item
  as well as the correct grammar.
  
  If three or more items in the cart, iterate through middle
  items.  Create empty variable and as long as 'i' points to
  the array index of 1 through 'length - 1' (which will exclude
  the final item), add each item sentence to the variable.
*/

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  
  var firstDescription = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
  var endDescription = `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`;

  if (cart.length === 1) {
    return `${firstDescription}.`;
  }
  
  if (cart.length === 2) {
    return `${firstDescription}${endDescription}.`;
  }
  
  if (cart.length >= 3) {
    var middleDescription = ``;
    
    for (var i = 1; i < cart.length - 1; i++) {
        middleDescription += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    return `${firstDescription}${middleDescription}${endDescription}.`;
  }
}

/*
  Adds the total value of all of the items in the cart using the
  itemPrice key
*/

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  if (cart.includes(item) === false){
    return `That item is not in your cart.`; 
  }
  else {
    var cartIndex = cart.indexOf(item);
    cart.splice(cartIndex, 1);
    return cart;
  }
  /*
  else {
    return `That item is not in your cart.`;
  }
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i]) {
      return `yes`;
    }
    else {
      return `NO`;
    }
  }
  */
}

function placeOrder(cardNumber) {
  // write your code here
}
